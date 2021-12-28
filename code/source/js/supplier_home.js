const apiUrl = "https://8wgvs62e5k.execute-api.us-east-2.amazonaws.com/list"

var resumeNo_new = ''

function paddingLeft(str,lenght){
	if(str.length >= lenght)
	return str;
	else
	return paddingLeft("0" +str,lenght);
}

$(function() {
    // GET/READ onload
    $(document).ready(function() {
        $.ajax({
            url: apiUrl + '/products',
            contentType: 'application/json',
            success: function(response) {
                var tbodyEl = $('#list');
                var pagiEl = $('#paginum');
                var pagicnt = 0;
                tbodyEl.html('');
                pagiEl.html('');

                response.products.forEach(function(product) {
                    resumeNo_new = product.resumeNo;
                    tbodyEl.append('\
                        <tr>\
                                <td class="column1">' + product.date + '</td>\
                                <td class="column2">' + product.resumeNo + '</td>\
                                <td class="column4">供應數量' + product.numOfItem + '，重量' + product.weight + '</td>\
                                <td class="column5">\
                                    <input type="button" name="edit" value="詳情查看" id="check_resume"    onclick="document.getElementById(\'dataModal\').style.display=\'block\'" class="button button-view edit_data"/>\
                                    <input type="button" name="view" value="聯係厨房" id="check_tel"  onclick="document.getElementById(\'check_tel_Modal\').style.display=\'block\'"   class="button button-change update-button"/>\
                                </td>\
                            </tr>\
                    ');

                    pagicnt++;
                });

                pagiEl.append('\
                    <p>共 ' +  pagicnt + ' 筆</p>\
                ');
            }
        })
    })

    // GET/READ onclick
    $('#get-button').on('click', function() {
        $.ajax({
            url: apiUrl + '/products',
            contentType: 'application/json',
            success: function(response) {
                var tbodyEl = $('#list');
                var pagiEl = $('#paginum');
                var pagicnt = 0;
                tbodyEl.html('');
                pagiEl.html('');

                response.products.forEach(function(product) {
                    resumeNo_new = product.resumeNo;
                    tbodyEl.append('\
                        <tr>\
                                <td class="column1">' + product.date + '</td>\
                                <td class="column2">' + product.resumeNo + '</td>\
                                <td class="column4">供應數量' + product.numOfItem + '，重量' + product.weight + '</td>\
                                <td class="column5">\
                                    <input type="button" name="edit" value="詳情查看" id="check_resume"    onclick="document.getElementById(\'dataModal\').style.display=\'block\'" class="button button-view edit_data"/>\
                                    <input type="button" name="view" value="聯係厨房" id="check_tel"  onclick="document.getElementById(\'edit_emp_Modal\').style.display=\'block\'"   class="button button-change update-button"/>\
                                </td>\
                            </tr>\
                    ');

                    pagicnt++;
                    console.log(product.productid);
                });

                pagiEl.append('\
                    <p>共 ' +  pagicnt + ' 筆</p>\
                ');
            }
        })
    });

    // CREATE/POST
    $('#create-form').on('submit', function(event) {
        event.preventDefault();

        var tmp = resumeNo_new.slice(2);
        var tmp2 = resumeNo_new.slice(0,2);
        var hold = parseInt(tmp, 10);
        hold++;
        var tmp = hold.toString();
        tmp = paddingLeft(tmp,3);
        resumeNo_new = tmp2.concat(tmp);

        var createDate = $('#new_date');
        var createNumofitem = $('#new_numofitem');
        var createSupplierName = document.getElementById("supplierName").innerText;
        var createSupplierTel = document.getElementById("supplierTel").innerText;
        var createWeight = $('#new_weight');

        $.ajax({
            url: apiUrl + '/product',
            method: 'POST',
            contentType: 'application/json',
            data: JSON.stringify({
                                    resumeNo: resumeNo_new,
                                    date: createDate.val(),
                                    numOfItem: createNumofitem.val(),
                                    supplier: createSupplierName,
                                    tel: createSupplierTel,
                                    weight: createWeight.val()
                                }),
            success: function(response) {
                console.log(response);  
                createDate.val('');
                $('#get-button').click();
            },
        })
    })

    // UPDATE/PUT
    $('table').on('click', '.update-button', function() {
        var rowEl = $(this).closest('tr');
        var id = rowEl.find('.id').text();
        var newName = rowEl.find('.name').val();

        $.ajax({
            url: apiUrl + '/product',
            method: 'PUT',
            contentType: 'application/json',
            data: JSON.stringify({ newName: newName }),
            success: function(response) {
                console.log(response);
                $('#get-button').click();
            }
        });
    });

    // DELETE
    $('table').on('click', '.delete-button', function() {
        var rowEl = $(this).closest('tr');
        var id = rowEl.find('.id').text();

        $.ajax({
            url: apiUrl + '/product',
            method: 'DELETE',
            contentType: 'application/json',
            data: JSON.stringify({
                                productid: id
                            }),
            success: function(response) {
                console.log(response);
                $('#get-button').click();
            }
        });
    });
});
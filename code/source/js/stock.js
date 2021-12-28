const apiUrl = " https://nxgwufyj81.execute-api.us-east-2.amazonaws.com/list"

var foodid_new = '';

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
                    foodid_new = product.stock_id;
                    tbodyEl.append('\
                        <tr>\
                                <td class="column1">' + product.stock_id + '</td>\
                                <td class="column2">' + product.stock_name + '</td>\
                                <td class="column3">' + product.numofstock + '</td>\
                                <td class="column4">' + product.weight + '</td>\
                                <td class="column5">' + product.exp_date + '</td>\
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
                    foodid_new = product.stock_id;
                    tbodyEl.append('\
                        <tr>\
                                <td class="column1">' + product.stock_id + '</td>\
                                <td class="column2">' + product.stock_name + '</td>\
                                <td class="column3">' + product.numofstock + '</td>\
                                <td class="column4">' + product.weight + '</td>\
                                <td class="column5">' + product.exp_date + '</td>\
                            </tr>\
                    ');

                    pagicnt++;
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
        var tmp = foodid_new.slice(2);
        var tmp2 = foodid_new.slice(0,2);
        var hold = parseInt(tmp, 10);
        hold++;
        var tmp = hold.toString();
        tmp = paddingLeft(tmp,5);
        foodid_new = tmp2.concat(tmp);
        
        var createDate = $('#new_date');
        var createFoodName = $('#new_name');
        var createNumofitem = $('#new_numofitem');
        var createWeight = $('#new_weight');

        $.ajax({
            url: apiUrl + '/product',
            method: 'POST',
            contentType: 'application/json',
            data: JSON.stringify({
                                    stock_id : foodid_new,
                                    exp_date: createDate.val(),
                                    stock_name : createFoodName.val(),
                                    weight : createWeight.val(),
                                    numofstock: createNumofitem.val()
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
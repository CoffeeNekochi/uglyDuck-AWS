const apiUrl = "https://q61dt57w7d.execute-api.us-east-2.amazonaws.com/list"

$(function() {
    // GET/READ onload
    $(document).ready(function() {
        $.ajax({
            url: apiUrl + '/products',
            contentType: 'application/json',
            success: function(response) {
                var tbodyEl = $('#list');

                tbodyEl.html('');

                response.products.forEach(function(product) {
                    tbodyEl.append('\
                        <tr>\
                            <td class="id">' + product.productid + '</td>\
                            <td><input type="text" class="name" value="' + product.name + '"></td>\
                            <td>\
                                <button class="update-button">UPDATE/PUT</button>\
                                <button class="delete-button">DELETE</button>\
                            </td>\
                        </tr>\
                    ');
                    //console.log(product.productid);
                });
            }
        })
    })

    // GET/READ onclick
    $('#get-button').on('click', function() {
        $.ajax({
            url: apiUrl + '/products',
            contentType: 'application/json',
            success: function(response) {
                var tbodyEl = $('tbody');

                tbodyEl.html('');

                response.products.forEach(function(product) {
                    tbodyEl.append('\
                        <tr>\
                            <td class="id">' + product.productid + '</td>\
                            <td><input type="text" class="name" value="' + product.name + '"></td>\
                            <td>\
                                <button class="update-button">UPDATE/PUT</button>\
                                <button class="delete-button">DELETE</button>\
                            </td>\
                        </tr>\
                    ');
                });
            }
        })
    });

    // CREATE/POST
    $('#create-form').on('submit', function(event) {
        event.preventDefault();
        
        var createName = $('#create-name');
        var createId = $('#create-id');

        $.ajax({
            url: apiUrl + '/product',
            method: 'POST',
            contentType: 'application/json',
            data: JSON.stringify({
                                    productid: createId.val(),
                                    name: createName.val()
                                }),
            success: function(response) {
                console.log(response);  
                createName.val('');
                createId.val('');
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
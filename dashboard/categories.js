$(function() {
    const loadData = function() {
        $.ajax({
            url: 'http://localhost:3000/categories',
            contentType: 'application/json',
            success: function(response) {
                var tbodyEl = $('tbody');
 
                tbodyEl.html('');
 
                response.forEach(function(el) {
                    tbodyEl.append('\
                        <tr>\
                            <td class="id">' + el.id + '</td>\
                            <td><input type="text" class="name" value="' + el.name + '"></td>\
                            <td align="center">\
                            <button class="btn btn-success form-control">Edit</button>\
                        </td>\
                        <td align="center">\
                            <button class="btn btn-danger form-control">Delete</button>\
                        </td>\
                        </tr>\
                    ');
                });
            }
        });
    };
 
    // CREATE/POST
    $('.form-inline').on('submit', function(event) {
        event.preventDefault();
 
        let nameInput = $('#name');
 
        $.ajax({
            url: 'http://localhost:3000/categories',
            method: 'POST',
            contentType: 'application/json',
            data: JSON.stringify({
            name: nameInput.val(),
            success: function(response) {
                console.log(response);
 
                nameInput.val('');
                loadData();
            }
        })
    });
 
      // UPDATE/PUT
      $('table').on('click', '.btn-success', function() {
        var rowEl = $(this).closest('tr');
        var id = rowEl.find('.id').text();
        var newTitle = rowEl.find('.name').val();
        console.log(newTitle);
 
        $.ajax({
            url:   'http://localhost:3000/categories/'+ id,
            method: 'PUT',
            contentType: 'application/json',
            data: JSON.stringify({ name: newTitle }),
            success: function(response) {
                loadData();
                // $('#sub-button').click();
            }
        });
    });
 
     // DELETE
    $('table').on('click', '.btn-danger', function() {
        var rowEl = $(this).closest('tr');
        var id = rowEl.find('.id').text();
        console.log(rowEl.html);
        $.ajax({
            url: 'http://localhost:3000/categories/'+ id,
            method: 'DELETE',
            contentType: 'application/json',
            success: function(response) {
                console.log(response[0]);
                loadData();
            }
        });
    });
   loadData();
 })
 $('.btn-expand-collapse').click(function(e) {
    $('.navbar-primary').toggleClass('collapsed');
});

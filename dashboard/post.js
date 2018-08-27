$(function() {
    const loadData = function() {
        $.ajax({
            url: 'http://localhost:3000/posts',
            contentType: 'application/json',
            success: function(response) {
                var tbodyEl = $('tbody');
 
                tbodyEl.html('');
 
                response.forEach(function(el) {
                    tbodyEl.append('\
                        <tr>\
                            <td class="id">' + el.id + '</td>\
                            <td><input type="text" class="title" value="' + el.title + '"></td>\
                            <td><input type="text" class="post" value="' + el.body + '"></td>\
                            <td><input type="text" class="userid" value="' + el.userId + '"></td>\
                            <td><input type="text" class="categoryid" value="' + el.categoryId + '"></td>\
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
 
        let titleInput = $('#title');
        let postInput = $('#post');
        let useridInput = $('#userid');
        let categoryidInput = $('#categoryid');
 
        $.ajax({
            url: 'http://localhost:3000/posts',
            method: 'POST',
            contentType: 'application/json',
            data: JSON.stringify({
            title: titleInput.val(),
            post: postInput.val(),
            userid: useridInput.val(),
            categoryid: categoryidInput.val()
        }),
            success: function(response) {
                console.log(response);
 
                titleInput.val('');
                postInput.val('');
                useridInput.val('');
                categoryidInput.val('');
                loadData();
            }
        });
    });
 
      // UPDATE/PUT
      $('table').on('click', '.btn-success', function() {
        var rowEl = $(this).closest('tr');
        var id = rowEl.find('.id').text();
        var newTitle = rowEl.find('.title').val();
        var newPost = rowEl.find('.post').val();
        var newUserid = rowEl.find('.userid').val();
        var newCategoryid = rowEl.find('.categoryid').val();
        console.log(newTitle);
        console.log(newPost);
        console.log(newUserid);
        console.log(newCategoryid);
 
        $.ajax({
            url:   'http://localhost:3000/posts/'+ id,
            method: 'PUT',
            contentType: 'application/json',
            data: JSON.stringify({ title: newTitle, post: newPost, userid: newUserid, categoryid: newCategoryid }),
            success: function(response) {
                loadData();
            }
        });
    });
 
     // DELETE
    $('table').on('click', '.btn-danger', function() {
        var rowEl = $(this).closest('tr');
        var id = rowEl.find('.id').text();
        console.log(rowEl.html);
        $.ajax({
            url: 'http://localhost:3000/posts/'+ id,
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
$(function() {
    const loadData = function() {
        $.ajax({
            url: 'http://localhost:3000/comments',
            contentType: 'application/json',
            success: function(response) {
                var tbodyEl = $('tbody');
 
                tbodyEl.html('');
 
                response.forEach(function(el) {
                    tbodyEl.append('\
                        <tr>\
                            <td class="id">' + el.id + '</td>\
                            <td><input type="text" class="name" value="' + el.name + '"></td>\
                            <td><input type="text" class="body" value="' + el.body + '"></td>\
                            <td><input type="text" class="postid" value="' + el.postId + '"></td>\
                            <td><input type="text" class="userid" value="' + el.userId + '"></td>\
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
 
        let userInput = $('#username');
        let commentInput = $('#comment');
        let postidInput = $('#postid');
        let useridInput = $('#userid');
 
        $.ajax({
            url: 'http://localhost:3000/comments',
            method: 'POST',
            contentType: 'application/json',
            data: JSON.stringify({
            name: userInput.val(),
            comment: commentInput.val(),
            postId: postidInput.val(),
            userId: useridInput.val()
        }),
            success: function(response) {
                console.log(response);
 
                userInput.val('');
                commentInput.val('');
                postidInput.val('');
                useridInput.val('');
                loadData();
            }
        });
    });
 
      // UPDATE/PUT
      $('table').on('click', '.btn-success', function() {
        var rowEl = $(this).closest('tr');
        var id = rowEl.find('.id').text();
        var newTitle = rowEl.find('.name').val();
        var newBody = rowEl.find('.body').val();
        var newPost = rowEl.find('.postid').val();
        var newUser = rowEl.find('.userid').val();
        console.log(newTitle);
        console.log(newBody);
        console.log(newPost);
        console.log(newUser);
 
        $.ajax({
            url:   'http://localhost:3000/comments/'+ id,
            method: 'PUT',
            contentType: 'application/json',
            data: JSON.stringify({ name: newTitle, body: newBody, postid: newPost, userid: newUser }),
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
            url: 'http://localhost:3000/comments/'+ id,
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
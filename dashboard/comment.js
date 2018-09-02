(function(){
    const url='http://localhost:3000/comments';
       
            axios({
                method:'get',
                url:url,
              })
                .then(response=>{
                  const tbody = $('table tbody');
                  response.data.forEach((el, i) => {
                      const tr = $('<tr>')
                          .html(`<td>${el.id}</td>
                          <td>${el.body}</td>
                          <td>${el.postId}</td>
                          <td>${el.userId}</td>
                          <td>
                          <button class="btn btn-warning inline-block">Edit</button>
                          <button onClick="del()" class="btn btn-danger inline-block">Delete</button>
                          </td>
                          `);
                  tbody.append(tr);
                });
            })
            $('.btn-success').on('click', () => {
            axios({
                method: 'post',
                url: url,
                data: {
                    name: $('#comment').val(),
                    email: $('#postid').val(),
                    email: $('#userid').val()
                }
              })
              .then(response =>{
                console.log('saved successfully')
            });
        });
    
        del= () => {
          
            let newrow = $(this).closest('tr');
            let id = newrow.find('.id').text();
            console.log(id);
                  axios.delete('http://localhost:3000/comments/'+id)
                  .then(response=> {
                    console.log(response)})
                   
              };
    
       
    })();

    $('.btn-expand-collapse').click(function(e) {
        $('.navbar-primary').toggleClass('collapsed');
    });
    
    
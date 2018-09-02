(function(){
    const url='http://localhost:3000/posts';
       
            axios({
                method:'get',
                url:url,
              })
                .then(response=>{
                  const tbody = $('table tbody');
                  response.data.forEach((el, i) => {
                      const tr = $('<tr>')
                          .html(`<td>${el.id}</td>
                          <td>${el.title}</td>
                          <td>${el.body}</td>
                          <td>${el.userId}</td>
                          <td>${el.categoryId}</td>
                          <td>
                          <button class="btn btn-warning inline-block">Edit</button>
                          <button onClass="del()"class="btn btn-danger inline-block">Delete</button>
                          </td>
                          `);
                  tbody.append(tr);
                });
            })
            $('#btn-success').on('click', () => {
            axios({
                method: 'post',
                url: url,
                data: {
                    name: $('#title').val(),
                    email: $('#body').val(),
                    name: $('#userid').val(),
                    email: $('#categoryid').val(),
                }
              })
              .then(response =>{
                console.log('saved successfully')
            });
        });
    
        $('.btn-warning').on('click', () => {
        axios.put('http://localhost:3000/posts/'+ id, body)
        .then(response => { 
        
        console.log(response.data);
        })
        .catch(err => { 
        
        console.log(err);
        });
    });
    del= () => {
          
        let newrow = $(this).closest('tr');
        let id = newrow.find('.id').text();
        console.log(id);
              axios.delete('http://localhost:3000/posts/'+id)
              .then(response=> {
                console.log(response)})
               
          };
    
       
    })();
    
 $('.btn-expand-collapse').click(function(e) {
    $('.navbar-primary').toggleClass('collapsed');
});
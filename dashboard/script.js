(function(){

    axios({
        method:'get',
        url:'http://localhost:3000/posts',
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
                  <td row>
                  <button class="btn btn-warning inline-block">Edit</button>
                  <button onclick="del()" class="btn btn-danger inline-block">Delete</button>
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
                title: $('#title').val(),
                body: $('#body').val(),
                userId: $('#userid').val(),
                categoryId: $('#categoryid').val(),
            }
          })
          .then(response =>{
            console.log('saved successfully')
        });
    });
})();
$('.btn-expand-collapse').click(function(e) {
    $('.navbar-primary').toggleClass('collapsed');
});





// (function () {
//     const url = 'http://localhost:3000/users';
//     axios.get(url, {})
//         .then(res => {
//             const tbody = $('table tbody');
//             res.data.forEach((el, i) => {
//                 const tr = $('<tr>')
//                     .html(`<td>${el.id}</td>
//                     <td>${el.name}</td>
//                     <td>${el.email}</td>
//                     `);

//                 tbody.append(tr);
//             })
//         })
//     $('#sub-button').on('click', () => {
  
//         axios.post(url, {
//             userId: $('#name').val(),
//             title: $('#Email').val(),
//         }).then(res => {
//             console.log(res.data)

//             return axios.get(url, {})
//         }).then(res => console.log(res.data))
//     });

    
// }())
$('.btn-expand-collapse').click(function(e) {
    $('.navbar-primary').toggleClass('collapsed');
});



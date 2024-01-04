const stars = document.querySelectorAll('.stars i');

stars.forEach((el, index) => {
    el.addEventListener('click', () =>{
        stars.forEach((el, index1) => {
            index >= index1 ? el.classList.add('active') : el.classList.remove('active');
        })
    })
})





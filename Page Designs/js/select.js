let select = document.getElementById('category');

select.addEventListener('click', () => {
    select.classList.toggle('select-control-selected');
});

select.addEventListener('blur', () => {
    select.classList.remove('select-control-selected');
});
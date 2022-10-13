const listNav = document.querySelector('.nav');
const listBar = document.querySelector('.bar');

listBar.addEventListener('click', function(){
    listNav.classList.toggle('active');
});
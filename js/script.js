const navbar = document.querySelector('.navbar');
const menuBtn = document.querySelector('.menu-btn');

menuBtn.addEventListener('click', () => {
  navbar.classList.toggle('navbar-active');
  menuBtn.firstElementChild.classList.toggle('none');
  menuBtn.lastElementChild.classList.toggle('none');
});

document.addEventListener('click', (e) => {
  if (!e.target.matches('.navbar a')) return false;
  navbar.classList.remove('navbar-active');
  menuBtn.firstElementChild.classList.remove('none');
  menuBtn.lastElementChild.classList.add('none');
  return true;
});
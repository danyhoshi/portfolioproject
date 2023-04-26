const navbar = document.querySelector('.navbar');
const menuBtn = document.querySelector('.menu-btn');
const works = document.querySelector('.works');
const template = document.querySelector('template').content;
const fragment = document.createDocumentFragment();
const form = document.querySelector('form');
const inputs = document.querySelectorAll('form [required]');

inputs.forEach((input) => {
  const p = document.createElement('p');
  const span = document.createElement('span');
  span.textContent = 'cancel';
  span.classList.add('validation-state__form');
  span.classList.add('material-symbols-outlined');
  span.id = `${input.name}s`;
  p.id = `${input.name}p`;
  p.textContent = input.title;
  p.classList.add('input-error__form');
  input.insertAdjacentElement('afterend', span);
  input.nextElementSibling.insertAdjacentElement('afterend', p);
});

document.addEventListener('keyup', (e) => {
  if (e.target.matches('form [required]')) {
    const input = e.target;
    const pattern = input.pattern || input.dataset.pattern;

    const regex = new RegExp(pattern);
    if (!regex.exec(input.value)) {
      input.parentElement.parentElement.classList.add('group__form-incorrect');
      document.getElementById(`${input.name}p`).classList.add('input-error__form-active');
      document.getElementById(`${input.name}s`).textContent = 'cancel';
      input.parentElement.parentElement.classList.remove('group__form-correct');
    } else {
      input.parentElement.parentElement.classList.remove('group__form-incorrect');
      document.getElementById(`${input.name}p`).classList.remove('input-error__form-active');
      input.parentElement.parentElement.classList.add('group__form-correct');
      document.getElementById(`${input.name}s`).textContent = 'check_circle';
    }
  }
});

const workCard = [{
  id: 'proj-1',
  src: './img/project.webp',
  dim: '640',
  title: 'News Blog',
  subTitle: 'HTML, CSS, JS',
  desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit nesciunt voluptate expedita impedit itaque mollitia, qui hic cupiditate magni quaerat.',
  url: 'https://github.com/danyhoshi/portfolioproject',
},
{
  id: 'proj-2',
  src: './img/project.webp',
  dim: '640',
  title: 'News Blog',
  subTitle: 'HTML, CSS, JS',
  desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit nesciunt voluptate expedita impedit itaque mollitia, qui hic cupiditate magni quaerat.',
  url: 'https://github.com/danyhoshi/portfolioproject',
},
{
  id: 'proj-3',
  src: './img/project.webp',
  dim: '640',
  title: 'News Blog',
  subTitle: 'HTML, CSS, JS',
  desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit nesciunt voluptate expedita impedit itaque mollitia, qui hic cupiditate magni quaerat.',
  url: 'https://github.com/danyhoshi/portfolioproject',
}];

workCard.forEach((el) => {
  template.querySelector('.container-project img').setAttribute('src', el.src);
  template.querySelector('.container-project img').setAttribute('alt', el.title);
  template.querySelector('.container-project img').setAttribute('width', el.dim);
  template.querySelector('.container-project img').setAttribute('height', el.dim);
  template.querySelector('.modal-container img').setAttribute('src', el.src);
  template.querySelector('.modal-container img').setAttribute('alt', el.title);
  template.querySelector('.modal-container img').setAttribute('width', el.dim);
  template.querySelector('.modal-container img').setAttribute('height', el.dim);
  template.querySelector('.work-card h4').textContent = el.title;
  template.querySelector('.work-card h5').textContent = el.subTitle;
  template.querySelector('.modal-container h4').textContent = el.title;
  template.querySelector('.modal-container h5').textContent = el.subTitle;
  template.querySelector('.work-card .text').textContent = el.desc;
  template.querySelector('.modal-container p').textContent = el.desc;
  template.querySelector('.work-card button').setAttribute('id', el.id);
  template.querySelector('.modal-container a').textContent = 'Take a look';
  template.querySelector('.modal-container a').setAttribute('href', el.url);
  template.querySelector('.modal-container a').setAttribute('target', 'blank');
  template.querySelector('.modal-container a').setAttribute('rel', 'noopener');

  const clone = document.importNode(template, true);
  fragment.appendChild(clone);
});

works.appendChild(fragment);

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

document.addEventListener('click', (e) => {
  const clicked = e.target.matches('.works button');
  const clickedT = e.target;
  if (!clicked) return false;

  const idPr = parseInt(clickedT.id.slice(5), 10);
  works.children[idPr * 2].classList.add('modal-active');
  return true;
});

document.addEventListener('click', (e) => {
  const clicked = e.target.matches('.modal svg');
  const clickedT = e.target;
  if (!clicked) return false;

  clickedT.parentElement.parentElement.classList.remove('modal-active');
  return true;
});

document.addEventListener('click', (e) => {
  const clicked = e.target.matches('.modal svg path');
  const clickedT = e.target;
  if (!clicked) return false;

  clickedT.parentElement.parentElement.parentElement.classList.remove('modal-active');
  return true;
});

form.addEventListener('submit', () => {
  const message = document.querySelector('.group__form-btn-form p');
  const loader = document.querySelector('.group__form-btn-form div');
  message.classList.add('input-error__form-active');
  message.classList.remove('submit-success__form');
  loader.classList.add('input-error__form-active');
  loader.classList.remove('submit-success__form');
  setTimeout(() => {
    message.classList.remove('input-error__form-active');
  }, 3000);
  document.querySelectorAll('.group__form-correct').forEach((icon) => {
    icon.classList.remove('group__form-correct');
  });
  document.querySelector('.message__form').classList.remove('message__form-active');
});
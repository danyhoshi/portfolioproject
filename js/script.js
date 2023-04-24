const navbar = document.querySelector('.navbar');
const menuBtn = document.querySelector('.menu-btn');
const works = document.querySelector('.works');
const template = document.querySelector('template').content;
const fragment = document.createDocumentFragment();

const workCard = [{
  id: 'proj-1',
  src: './img/project.webp',
  dim: '640',
  title: 'News Blog',
  subTitle: 'HTML, CSS, JS',
  desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit nesciunt voluptate expedita impedit itaque mollitia, qui hic cupiditate magni quaerat.',
  btn: 'See more →',
  url: 'https://github.com/danyhoshi/portfolioproject',
},
{
  id: 'proj-2',
  src: './img/project.webp',
  dim: '640',
  title: 'News Blog',
  subTitle: 'HTML, CSS, JS',
  desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit nesciunt voluptate expedita impedit itaque mollitia, qui hic cupiditate magni quaerat.',
  btn: 'See more →',
  url: 'https://github.com/danyhoshi/portfolioproject',
},
{
  id: 'proj-3',
  src: './img/project.webp',
  dim: '640',
  title: 'News Blog',
  subTitle: 'HTML, CSS, JS',
  desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit nesciunt voluptate expedita impedit itaque mollitia, qui hic cupiditate magni quaerat.',
  btn: 'See more →',
  url: 'https://github.com/danyhoshi/portfolioproject',
},
];

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
  template.querySelector('.work-card button').textContent = el.btn;
  template.querySelector('.work-card button').setAttribute('aria-label', el.btn);
  template.querySelector('.work-card button').setAttribute('type', 'button');
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

const navBtn = document.querySelector('.nav-icon-btn');
const navIcon = document.querySelector('.nav-icon');
const nav = document.querySelector('.header_down-content');

navBtn.onclick = function () {
  navIcon.classList.toggle('nav-icon--active');
  nav.classList.toggle('header_down-content--mobile');
  document.body.classList.toggle('no-scroll');
};

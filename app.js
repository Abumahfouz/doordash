const nav_bar = document.querySelector('#nav-components');
const empty = document.querySelector('.empty');
const title = document.querySelector('#logo-title');
const logo_icon = document.querySelector('#logo-icon');

var scrollval = 0;
window.addEventListener('scroll', () => {
    console.log(scrollval);
    console.log(`Window Frame: ${window.scrollY}`);
  if(scrollval < window.scrollY) {
    if(scrollval > 125) {
        empty.classList.add('hide');
        nav_bar.classList.add('nav-change');
        title.style.color = "#EB1700";
        logo_icon.style.fill = "#EB1700";
    }
    if(scrollval > window.screenY) {
        if(scrollval < 125 && scrollval > 4) {
            empty.classList.remove('hide');
            nav_bar.classList.remove('nav-change');
            title.style.color = "#fff";
            logo_icon.style.fill = "#fff";
        }
    }
  } 
  scrollval = window.scrollY;
});
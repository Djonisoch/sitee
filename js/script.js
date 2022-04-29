const header = document.querySelector(".header");
window.addEventListener("scroll", checkScroll);
document.addEventListener("DOMContentLoaded", checkScroll);

function checkScroll() {
  let scrollPos = window.scrollY;

  if(scrollPos > 10) {
    header.classList.add("header__filled"); 
  }
 else{
  header.classList.remove("header__filled");
    }      
}


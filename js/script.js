let goTopBtn = document.querySelector(".scroll__button");
goTopBtn.addEventListener("click", goTop);
window.addEventListener("scroll", trackScroll);

function trackScroll() {
  let offset = window.pageYOffset;
  // let coords = document.documentElement.clientHeight;

  if (offset > 500) {
    goTopBtn.classList.add("scroll__button_show");
  } else {
    goTopBtn.classList.remove("scroll__button_show");
  }

}

function goTop() {

  if (window.pageYOffset > 0) {
    window.scrollBy(0, -75); 
    setTimeout(goTop, 0); 
  }

}

let popUp = document.querySelector(".popup");
popUp.addEventListener("click", function() {

  popUp.classList.add("popup_none");

});
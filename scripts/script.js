let docum = document;
let burger_m = docum.querySelector(".burger_menu");
let menu = docum.querySelector('.MENU');
let burger1 = docum.querySelector("#burger1");
let burger2 = docum.querySelector("#burger2");
let burger3 = docum.querySelector("#burger3");

burger_m.addEventListener('click', function () {
  burger1.classList.toggle("rotate");
  burger2.classList.toggle("hide");
  burger3.classList.toggle("rotate");
  menu.classList.toggle("active");
});
const navSlide = () => {
const button = document.querySelector(".more");
const menu = document.querySelector(".side-menu");
const cardHolder = document.querySelector(".card-holder");
const cards = document.querySelectorAll(".card");
const adminsBox = document.querySelector(".admins-box");
button.addEventListener("click", () => {
  menu.classList.toggle("active");
  cardHolder.classList.toggle("margin");
  adminsBox.classList.toggle("admin-margin");
  button.classList.toggle("more-margin");
  cards.forEach( (card) =>{
    card.classList.add(".cards-width");
  });
});
};
navSlide();

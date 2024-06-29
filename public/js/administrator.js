const home = document.querySelector(".home")
const users = document.querySelector(".users")
const exam = document.querySelector(".exam")
const inv = document.querySelector(".inv")
const notification = document.querySelector(".notification");
const profile = document.querySelector(".profile")

const homeBtn = document.querySelector("#home")
const usersBtn = document.querySelector("#users")
const examBtn = document.querySelector("#exam")
const invBtn = document.querySelector("#inv")
const notificationBtn = document.querySelector("#notification");
const profileBtn = document.querySelector("#profile")

users.classList.add("none");
exam.classList.add("none");
inv.classList.add("none");
notification.classList.add("none");
profile.classList.add("none");


usersBtn.addEventListener("click", () => {
  users.classList.remove("none");
  exam.classList.add("none");
  inv.classList.add("none");
  notification.classList.add("none");
  home.classList.add("none");
  profile.classList.add("none");

});
examBtn.addEventListener("click", () => {
  users.classList.add("none");
  exam.classList.remove("none");
  inv.classList.add("none");
  notification.classList.add("none");
  home.classList.add("none");
  profile.classList.add("none");


});
invBtn.addEventListener("click", () => {
  users.classList.add("none");
  exam.classList.add("none");
  inv.classList.remove("none");
  home.classList.add("none");
  profile.classList.add("none");

  notification.classList.add("none");
});
notificationBtn.addEventListener("click", () => {
  users.classList.add("none");
  exam.classList.add("none");
  inv.classList.add("none");
  notification.classList.remove("none");
  home.classList.add("none");
  profile.classList.add("none");


});
homeBtn.addEventListener("click", () => {
  users.classList.add("none");
  exam.classList.add("none");
  inv.classList.add("none");
  notification.classList.remove("none");
  home.classList.remove("none");
  profile.classList.add("none");
});
profileBtn.addEventListener("click", () => {
  users.classList.add("none");
  exam.classList.add("none");
  inv.classList.add("none");
  notification.classList.add("none");
  home.classList.remove("none");
  profile.classList.remove("none")
});




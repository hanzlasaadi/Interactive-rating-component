const button = document.querySelector("button");

const first = document.querySelectorAll(".first");

const thanks = document.querySelectorAll(".thanks");

button.addEventListener("click", function () {
  first.forEach((el) => {
    el.classList.add("hidden");
  });
  thanks.forEach((el) => {
    el.classList.remove("hidden");
    el.classList.add("center");
  });
});

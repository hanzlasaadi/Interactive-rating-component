const button = document.querySelector("button");

const first = document.querySelectorAll(".first");

const thanks = document.querySelectorAll(".thanks");

const bigDot = document.querySelector(".big-dot");

const radioButtons = document.querySelectorAll("#radio");

button.addEventListener("click", function () {
  first.forEach((el) => {
    el.classList.add("hidden");
  });
  thanks.forEach((el) => {
    el.classList.remove("hidden");
    el.classList.add("center");
  });

  radioButtons.forEach((el) => {
    if (el.checked) {
      bigDot.textContent = `You selected ${el.value} out of 5`;
    }
  });
});

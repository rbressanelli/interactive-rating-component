const rateButtons = document.querySelectorAll(".rating-value");
const submitButton = document.getElementById("submit-button");
const mainSelectedSection = document.querySelectorAll(".box")[0];
const secondSelectedSection = document.querySelectorAll(".box")[1];
const rateValueSpam = document.getElementById("rateValue");
let result = {};

const rateButtonsChoose = () => {
  rateButtons.forEach((button) => {
    button.addEventListener("click", function (e) {
      rateButtons.forEach((but) => {
        but.classList.remove("selected");
      });
      let data = e.target.innerText;
      let { id } = e.target;
      result = { value: data };
      const selectedButton = document.getElementById(`${id}`);
      selectedButton.classList.add("selected");
    });
  });
};

const rated = (e) => {
  if (!result.value) {
    rateButtons.forEach((value) => {
      value.classList.add("blinking");
      setInterval(() => {
        value.classList.remove("blinking");
      }, 200);
    });
    return;
  }
  mainSelectedSection.classList.add("hidden");
  secondSelectedSection.classList.remove("hidden");
  rateValueSpam.innerText = `${result.value}`;
};

const mainFunction = () => {
  rateButtonsChoose();
  submitButton.addEventListener("click", rated);
};

mainFunction();

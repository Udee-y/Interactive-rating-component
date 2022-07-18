const evals = document.getElementById("evaluation");
const btn = document.querySelectorAll(".button-text");
const submitButton = document.querySelector(".submit");
const thankYou = document.getElementById("sect2");
const selected = document.querySelector(".value");

var val;

btn.forEach((button) => {
  button.addEventListener("click", function () {
    // return the value of the button clicked
    val = button.innerHTML;
    console.log(val);

    //loops through each button and checks for the 'select-btn' class
    btn.forEach((button) => {
      button.classList.contains("select-btn");
      button.classList.remove("select-btn");
    });

    //Adds the class to change the background color
    button.classList.add("select-btn");
  });
});

submitButton.addEventListener("click", function () {
  changeDisplay();
  selectedValue();
});

//Function to display thank you page
function changeDisplay() {
  evals.style.display = "none";
  thankYou.style.display = "block";
}

//Function to display value of selected button
function selectedValue() {
  selected.innerHTML = val;
}

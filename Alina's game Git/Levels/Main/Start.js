function addStart() {
  const inputNameField = document.getElementById("InputNameField");
  const startButton = document.getElementById("buttonStart");

  startButton.addEventListener("click", () => {
    localStorage.setItem("userName", inputNameField.value);
    localStorage.setItem("userScore", "0");
    location.href = "../Lvl_1/lvl1.html";
  });
  console.log(inputNameField);
  console.log(startButton);
}

export { addStart };

/*button event*/
const femaleBtn = document.getElementById("femalebtn");
femaleBtn.addEventListener("click", (e) => {
  e.preventDefault();
  document.querySelector("#femalebtn i").classList.add("filledA");
  document.querySelector("#malebtn i").classList.remove("filledB");
});

const maleBtn = document.getElementById("malebtn");
maleBtn.addEventListener("click", (e) => {
  e.preventDefault();
  document.querySelector("#malebtn i").classList.add("filledB");
  document.querySelector("#femalebtn i").classList.remove("filledA");
});

/*logon & login event*/
const userInput = document.querySelector(".userInput");
const formElement = document.querySelector("form");

console.log(formElement);

formElement.addEventListener("submit", (e) => {
  e.preventDefault();
  // const userName = userInput.value;
  // console.log(userName);
  alert(`${document.querySelector(".userInput").value}님! 아직 준비중입니다!`);
  document.querySelector(".userInput").value = "";
  document.querySelector(".PasswordInput").value = "";
});

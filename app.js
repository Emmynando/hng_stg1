document.querySelector("#date").textContent = new Date().toLocaleDateString(
  undefined,
  { weekday: "long" }
);

document.querySelector("#time").textContent = new Date().getTime();

document.querySelector("#copyright").textContent = new Date().getFullYear();

const mailButton = document.querySelector("#mail-button");

mailButton.addEventListener("click", function (e) {
  alert("email sent");
});

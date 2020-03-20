const checkbox = document.getElementById("checkbox");

checkbox.addEventListener("change", () => {
  //we want to change the theme of the website
  document.body.classList.toggle("dark");
});

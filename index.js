document.getElementById("dt-btn").addEventListener("click", () => {
  document.getElementsByClassName("body")[0].classList.remove("white");
  document.getElementsByClassName("body")[0].classList.add("dark");
});

document.getElementById("lt-btn").addEventListener("click", () => {
  document.getElementsByClassName("body")[0].classList.add("white");
  document.getElementsByClassName("body")[0].classList.remove("dark");
});
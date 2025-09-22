document.getElementById("btn").addEventListener("click", () => {
  document.getElementById("output").textContent = "Klikol si na tlačidlo! 🎉";
});
const body = document.body;
const toggle = document.createElement("button");
toggle.textContent = "Prepni tému";
document.body.appendChild(toggle);

toggle.addEventListener("click", () => {
  body.classList.toggle("dark");
});



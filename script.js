function like(btn) {
  btn.innerText = "❤️ Liked";
}

function copyText(btn) {
  const text = btn.parentElement.previousElementSibling.innerText;
  navigator.clipboard.writeText(text);
  alert("Shayari copied ❤️");
}

function submitShayari() {
  const text = document.getElementById("userText").value;

  if (text.trim() === "") {
    alert("Dil se kuch likho ❤️");
    return;
  }

  const box = document.getElementById("shayari-box");

  const div = document.createElement("div");
  div.className = "card";
  div.innerHTML = `<p>${text}</p>`;

  box.prepend(div);

  document.getElementById("userText").value = "";

  alert("Shayari submit ho gayi ❤️");
}

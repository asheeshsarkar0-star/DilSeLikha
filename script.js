const shayariList = [
 "Uski yaadon ne hume raat bhar sone nahi diya.",
 "Mohabbat adhuri reh jaye to dard ban jaati hai.",
 "Khaamoshi bhi ek jawab hoti hai.",
 "Hum toot gaye par shikayat nahi ki.",
 "Dil ne kaha sabr rakh, waqt bolega."
];

const box = document.getElementById("shayari-box");

shayariList.forEach(text => {
  const div = document.createElement("div");
  div.className = "card";
  div.innerHTML = `<p>${text}</p>`;
  box.appendChild(div);
});

function submitShayari() {
  const txt = document.getElementById("userText").value;
  if (txt.trim() === "") return alert("Kuch likho ❤️");

  const div = document.createElement("div");
  div.className = "card";
  div.innerHTML = `<p>${txt}</p>`;
  box.prepend(div);

  document.getElementById("userText").value = "";
}

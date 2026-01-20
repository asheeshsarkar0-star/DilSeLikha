import { db, ref, push, onValue } from "./firebase.js";

const box = document.getElementById("shayari-box");

onValue(ref(db, "approved"), snapshot => {
  box.innerHTML = "";
  snapshot.forEach(data => {
    const div = document.createElement("div");
    div.className = "card";
    div.innerHTML = `<p>${data.val().text}</p>`;
    box.prepend(div);
  });
});

function submitShayari() {
  const text = document.getElementById("userText").value;
  if(text.trim()=="") return alert("Dil se likho ❤️");

  push(ref(db, "pending"), {
    text: text,
    time: Date.now()
  });

  alert("Shayari review ke liye bhej di ❤️");
}

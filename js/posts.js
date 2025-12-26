import { auth, db } from "./firebase.js";
import {
  addDoc, collection
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

submit.onclick = async () => {
  if (!auth.currentUser) return;

  await addDoc(collection(db, "posts"), {
    title: title.value,
    body: body.value,
    location: location.value,
    authorName: "Anonymous",
    createdAt: Date.now(),
    published: true
  });

  msg.innerText = "Published successfully.";
};

import {
  getDocs, query, orderBy
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const container = document.getElementById("posts");
if (container) {
  const q = query(collection(db, "posts"), orderBy("createdAt", "desc"));
  const snap = await getDocs(q);

  snap.forEach(doc => {
    const p = doc.data();
    container.innerHTML += `<h3>${p.title}</h3><p>${p.body.slice(0,120)}...</p>`;
  });
}

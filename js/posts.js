import { auth, db } from "./firebase.js";
import {
  doc, getDoc, addDoc, collection
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

auth.onAuthStateChanged(async user => {
  if (!user) return;

  const userSnap = await getDoc(doc(db, "users", user.uid));
  const u = userSnap.data();

  if (!u.approved) {
    document.body.innerHTML = "<p>You are not yet approved to write.</p>";
    return;
  }
});

submit.onclick = async () => {
  await addDoc(collection(db, "posts"), {
    title: title.value,
    body: body.value,
    authorName: "Anonymous",
    location: location.value,
    createdAt: Date.now(),
    published: true
  });

  msg.innerText = "Your story is live.";
};

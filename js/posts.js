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


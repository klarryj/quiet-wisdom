import { auth, db } from "./firebase.js";
import {
  collection, getDocs, doc, updateDoc, deleteDoc
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

auth.onAuthStateChanged(async user => {
  const uSnap = await getDoc(doc(db, "users", user.uid));
  if (uSnap.data().role !== "admin") return;

  const users = await getDocs(collection(db, "users"));
  users.forEach(d => {
    const u = d.data();
    writers.innerHTML += `
      <p>${u.name}
      <button onclick="approve('${d.id}')">Approve</button></p>`;
  });

  const posts = await getDocs(collection(db, "posts"));
  posts.forEach(d => {
    postsDiv.innerHTML += `
      <p>${d.data().title}
      <button onclick="remove('${d.id}')">Delete</button></p>`;
  });
});

window.approve = async (id) =>
  updateDoc(doc(db, "users", id), { approved: true, role: "writer" });

window.remove = async (id) =>
  deleteDoc(doc(db, "posts", id));

import { auth, db } from "./firebase.js";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendEmailVerification
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

import {
  doc, setDoc
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

document.getElementById("signup").onclick = async () => {
  const email = email.value;
  const password = password.value;
  const name = displayName.value;

  const userCred = await createUserWithEmailAndPassword(auth, email, password);
  await sendEmailVerification(userCred.user);

  await setDoc(doc(db, "users", userCred.user.uid), {
    name,
    role: "reader",
    approved: false,
    banned: false,
    createdAt: Date.now()
  });

  msg.innerText = "Verify your email to continue.";
};

document.getElementById("login").onclick = async () => {
  await signInWithEmailAndPassword(auth, email.value, password.value);
  location.href = "index.html";
};


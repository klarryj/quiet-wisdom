import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyCG32pjVQX60RwKvbLZiSK0P9mr3bGa_Jo",
  authDomain: "quiet-wisdom.firebaseapp.com",
  projectId: "quiet-wisdom",
  storageBucket: "quiet-wisdom.firebasestorage.app",
  messagingSenderId: "793350811214",
  appId: "1:793350811214:web:40b672ea449beb10fe9d1f"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);


import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword  } from "firebase/auth";
import toast from "react-hot-toast";

const firebaseConfig = {
  apiKey: "AIzaSyAJIvWO4XpLQBF3_s5gOiXIyRv7Zj-_jZs",
  authDomain: "ex-22-fa1a9.firebaseapp.com",
  projectId: "ex-22-fa1a9",
  storageBucket: "ex-22-fa1a9.appspot.com",
  messagingSenderId: "363173341020",
  appId: "1:363173341020:web:c7785c146a718aafb64399",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export function register(userInfo) {
    const {email, password} = userInfo
    // console.log(email, password);
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed up
      const user = userCredential.user;
      toast.success("User Created")
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      toast.error(errorMessage)
      
    });
}
export function login(userInfo) {
    const {email, password} = userInfo
    // console.log(email, password);
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      toast.success("User Logged In")

      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      toast.error(errorMessage)
    });
}

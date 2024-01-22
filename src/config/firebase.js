import { initializeApp } from "firebase/app";
import { collection, addDoc } from "firebase/firestore";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

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
const db = getFirestore(app);
const storage = getStorage(app);

export async function register(userInfo) {
  const { email, password, fullName, age } = userInfo;
  try {
    console.log(email, age, fullName);
    await createUserWithEmailAndPassword(auth, email, password);
    await addDoc(collection(db, "users"), {
      email,
      fullName,
      age,
    });
    toast.success("User Created");
    return true;
  } catch (error) {
    toast.error(error.message);
  }
}

export async function login(userInfo) {
  const { email, password, age } = userInfo;
  // console.log(email, password);
  try {
    await signInWithEmailAndPassword(auth, email, password);
    toast.success("successfully login");
    return true;
  } catch (error) {
    toast.error(error.message);
  }
}

export async function addItem(productInfo) {
  const { brand, title, description, category, price, image } = productInfo;
  console.log(brand, title, description, category, price, image);
  
  try {
    const storageRef = ref(storage, `ads/${image.name}`);
    await uploadBytes(storageRef, image);
    const url = await getDownloadURL(storageRef);
    await addDoc(collection(db, "products"), {
      brand,
      title,
      description,
      category,
      price,
      imageURL: url,
    });
    toast.success("Product successfully added");
    return true
    // console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    toast.success(e.message);
    return true
  }
}

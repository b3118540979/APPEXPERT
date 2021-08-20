import firebase from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyA8EIRTDFqnkeNPzsVQshhwxzk4EOJbuc0",
  authDomain: "whatscommerce-2d055.firebaseapp.com",
  projectId: "whatscommerce-2d055",
  storageBucket: "whatscommerce-2d055.appspot.com",
  messagingSenderId: "478145436320",
  appId: "1:478145436320:web:e0c9a9943c5889e85b47c5",
};

export const firebaseapp = firebase.initializeApp(firebaseConfig);

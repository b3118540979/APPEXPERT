import { firebaseapp } from "./Firebase";
import * as firebase from "firebase";

export const validarsesion = () => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      console.log("usuario logueado");
    } else {
      console.log("No ha iniciado sesion");
    }
  });
};

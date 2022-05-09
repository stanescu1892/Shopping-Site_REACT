import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const firestore = firebase.firestore();

firestore
  .collection("users")
  .doc("7fuz5ocnbAKkXp8lPq6S")
  .collection("cartItems")
  .doc("Zsd8hxHN2yiyHFyA0xME");

firestore.doc("/users/7fuz5ocnbAKkXp8lPq6S/cartItems/Zsd8hxHN2yiyHFyA0xME");
firestore.collection("/users/7fuz5ocnbAKkXp8lPq6S/cartItems");


// 7.13
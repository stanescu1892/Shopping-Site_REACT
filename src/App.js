import React, { useEffect } from "react";
import Homepage from "./pages/Homepage/Homepage";
import CheckoutPage from "./pages/checkout/checkout";
import ContactPage from "./pages/contact/ContactPage";
import SignInAndSignUp from "./pages/sign-in-and-sign-up/SignInAndSignUp";
import Shop from "./pages/shop/shop";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";

import "./App.css";

const App = () => {
  const storedAuth = localStorage.getItem("AUTH");
  const authObj = storedAuth ? JSON.parse(storedAuth) : undefined;

  useEffect(() => {
    const unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        console.log({ userAuth });
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot((snapShot) => {
          const user = snapShot.data();
          localStorage.setItem("AUTH", JSON.stringify(user));
        });
      }
    });
    return () => unsubscribeFromAuth();
  }, []);

  return (
    <Router>
      <Header />
      <div>
        <Routes>
          <Route index path="/" element={<Homepage />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route exact path="/checkout" element={<CheckoutPage />} />
          <Route exact path="/signin" element={<SignInAndSignUp />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

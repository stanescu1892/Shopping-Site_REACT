import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Shop from "./pages/shop/shop";
import SignInAndSignUp from "./pages/sign-in-and-sign-up/SignInAndSignUp";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import Homepage from "./pages/Homepage/Homepage";
import { Navigate } from "react-router-dom";

const App = () => {
  useEffect(() => {
    const unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapShot) => {
          console.log({
            id: snapShot.id,
            ...snapShot.data(),
          });
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
          <Route
            exact
            path="/signin"
            render={() =>
              this.props.currentUser ? <Navigate to="/" /> : <SignInAndSignUp />
            }
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

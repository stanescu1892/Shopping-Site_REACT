import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import CartIcon from "../cart-icon/CartIcon";
import CartDropDown from "../cart-dropdown/CartDropdown";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import { auth } from "../../firebase/firebase.utils";
import { StoreContext } from "../../context/store";
import "./Header.scss";

function Header({ currentUser, hidden }) {
  const [showCart, setShowCart] = React.useState(false);

  const storedAuth = localStorage.getItem("AUTH");
  const authObj = storedAuth ? JSON.parse(storedAuth) : undefined;

  const navigate = useNavigate();
  const context = useContext(StoreContext);

  const handleShowCartDropDown = () => {
    setShowCart(!showCart);
  };

  const handleLogout = () => {
    auth.signOut();
    localStorage.removeItem("AUTH");
    context.dispatch({
      type: "SET_USER",
      payload: {},
    });
    navigate("/");
  };

  return (
    <div className="header">
      <Link className="logo-container" to="/">
        <Logo className="logo" />
      </Link>
      <div className="options">
        <Link className="option" to="/shop">
          SHOP
        </Link>
        <Link className="option" to="/contact">
          CONTACT
        </Link>
        {authObj?.email ? (
          <div className="option" onClick={handleLogout}>
            {" "}
            SIGN OUT{" "}
          </div>
        ) : (
          <Link className="option" to="/signin">
            SIGN IN
          </Link>
        )}
        <CartIcon toggleCartHidden={handleShowCartDropDown} />
      </div>

      {showCart ? <CartDropDown /> : null}
    </div>
  );
}

export default Header;

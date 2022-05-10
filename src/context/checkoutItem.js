import React from "react";

const CheckoutItemContext = React.createContext();

const initState = {};

const CheckoutItemProvider = (props) => {
  const [state, dispatch] = React.useReducer((state, action) => {
    switch (action.type) {
      case "SET_CHECKOUT":
        //
        return { ...state, auth: action.payload };
      case "SET_CART":
        return { ...state, cart: action.payload };
      default:
        return state;
    }
  }, initState);

  return (
    <CheckoutItemContext.Provider value={{ state, dispatch }}>
      {props.children}
    </CheckoutItemContext.Provider>
  );
};

export { CheckoutItemContext, CheckoutItemProvider };

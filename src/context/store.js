import React from "react";

const StoreContext = React.createContext();

const initState = {
  auth: {},
  cart: [],
};

const StoreProvider = (props) => {
  const [state, dispatch] = React.useReducer((state, action) => {
    switch (action.type) {
      case "SET_USER":
        localStorage.setItem("AUTH", JSON.stringify(action.payload));
        return { ...state, auth: action.payload };
      case "SET_CART":
        return { ...state, cart: action.payload };
      default:
        return state;
    }
  }, initState);

  return (
    <StoreContext.Provider value={{ state, dispatch }}>
      {props.children}
    </StoreContext.Provider>
  );
};

export { StoreContext, StoreProvider };

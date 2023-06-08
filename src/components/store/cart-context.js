//import React, { createContext, useContext } from "react";
import React from "react";

const CartContext =  React.createContext({
  items: [],
  totalAMount: 0,
  addToItems: (item) => {},
  removeItems: (id) => {},
  productDetails:'',
  //addproductObj:'',
  token:'',
  email:'',
  isLoggedIn : true,
  login : (token) => {},
  logout : () => {},
});

export default CartContext
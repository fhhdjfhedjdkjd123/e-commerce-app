import { useEffect, useState } from "react";
import CartContext from "./cart-context";

const CartProvider = (props) => {
  const [items, setItems] = useState([]);
 const [productObj, setProductObj] = useState({});
  const userLoginDetails = localStorage.getItem("logIn");
  const [token, setToken] = useState(userLoginDetails);
  const userEmail = localStorage.getItem("email");
  const [email, setEmail] = useState(userEmail);
  console.log(items);

  useEffect(() => {
    const asyncFun = async () => {
      let response = await fetch(
        `https://crudcrud.com/api/9130541401a44a5ab8882593d895487d/cart${cartContext.email}`
      );
      let data = await response.json();
      console.log(data);
      setItems([...data]);
    };
    asyncFun();
  }, []);

  const addItemToCartHandler = async (item) => {
    const existingItem = items.findIndex(
      //This will return index of the existing item if found.
      (itm) => itm.title === item.title
    );

    if (existingItem === -1) {
      // If there is no existing item it will return -1
      let response = await fetch(
        `https://crudcrud.com/api/9130541401a44a5ab8882593d895487d/cart${cartContext.email}`,
        {
          method: "POST",
          body: JSON.stringify(item),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = await response.json();
      setItems((prevValue) => {
        return [...prevValue, data];
      });
    } else {
      const allItems = [...items];
      allItems[existingItem].quantity = +allItems[existingItem].quantity + 1;
      console.log(allItems);
      const updatedItem = allItems[existingItem];
      console.log(updatedItem);

      let response = await fetch(
        `https://crudcrud.com/api/9130541401a44a5ab8882593d895487d/cart${cartContext.email}/${allItems[existingItem]._id}`,

        {
          method: "PUT",
          body: JSON.stringify({
            id: updatedItem.id,
            title: updatedItem.title,
            price: updatedItem.price,
            quantity: updatedItem.quantity,
            imageUrl: updatedItem.imageUrl,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      setItems(() => {
        return [...allItems];
      });
    }
  };
  const removeItemFromCartHandler = async (item) => {
    console.log(item._id);
    if (item.quantity <= 1) {
      const response = await fetch(
        `https://crudcrud.com/api/9130541401a44a5ab8882593d895487d/cart${cartContext.email}/${item._id}`,
        { method: "DELETE" }
      );
      const updatedItems = items.filter((itm) => {
        return itm.id !== item.id;
      });

      setItems(() => updatedItems);
    } else {
      item.quantity = item.quantity - 1;
      let response = await fetch(
        `https://crudcrud.com/api/9130541401a44a5ab8882593d895487d/cart${cartContext.email}/${item._id}`,
        {
          method: "PUT",
          body: JSON.stringify({
            id: item.id,
            title: item.title,
            price: item.price,
            quantity: item.quantity,
            imageUrl: item.imageUrl,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      setItems(() => {
        return [...allItems];
      });
    }
    const allItems = [...items];
  };

//   const addtoproductObj = (item) => {
//     console.log(item.imageUrl);
//     setProductObj(() => item);
//   };
  const userLoggedIndetails = !!token;

  const loginHandler = (token, email) => {
    console.log(email);
    setToken(() => token);
    const userEmailId = email.replace(/[^a-zA-Z0-9 ]/g, "");

    console.log(userEmailId);
    setEmail(() => userEmailId);
    localStorage.setItem("logIn", token);
    localStorage.setItem("email", userEmailId);
  };

  const logoutHandler = () => {
    setToken(null);
    localStorage.removeItem("logIn");
    setEmail(null);
    localStorage.removeItem("email");
  };

  const cartContext = {
    items: items,
    addToItems: addItemToCartHandler,
    removeItems: removeItemFromCartHandler,
    productDetails: productObj,
    //addproductObj: addtoproductObj,
    
    token: "",
    email: email,
    isLoggedIn: userLoggedIndetails,
    login: loginHandler,
    logout: logoutHandler,
  };

  console.log(cartContext.email);

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};
export default CartProvider;
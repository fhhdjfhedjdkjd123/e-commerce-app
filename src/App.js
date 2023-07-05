import './App.css';
import React,{useContext} from 'react';
import { Switch,Route,Redirect} from "react-router-dom";
import RootLayout from './components/RootLayout/RootLayout';
import HomePage from './components/HomePage/HomePage';
import ListItems from './components/Items/ListItems';
import ProductPage from './components/Items/ProductPage';
import AboutPage from './components/AboutPage/AboutPage';
import ContactUs from './components/ContactUs/Contactus';
import Auth from './Authentication/Auth';
import CartContext from './components/store/cart-context';
import ErrorPage from './components/ErrorPage/ErrorPage';


const App=()=>{
  const ctx=useContext(CartContext);
  return (
      <RootLayout>
       <Switch>
          <Route path="/" exact>
            <Redirect to="/home"/>
          </Route>
          <Route path="/home" exact>
             <HomePage/>
          </Route>
          <Route path="/store" exact>
             {ctx.isLoggedIn && <ListItems/>}
             {!ctx.isLoggedIn && <Redirect to="/auth" />}
          </Route>  
          <Route path="/store/:productId">
             <ProductPage/>
          </Route>
          <Route path="/about">
            <AboutPage/>
          </Route>
          <Route path="/contactus">
            <ContactUs/>
          </Route>
          <Route path="/auth">
            <Auth/>
          </Route>
          <Route path="*">
            <ErrorPage/>
          </Route>
       </Switch>
      </RootLayout>


  );
}

export default App;

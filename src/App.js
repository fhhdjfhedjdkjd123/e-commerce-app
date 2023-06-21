import './App.css';
import React from 'react';
import { Routes,Route} from "react-router-dom";
import RootLayout from './components/RootLayout/RootLayout';
import HomePage from './components/HomePage/HomePage';
import ListItems from './components/Items/ListItems';
import ProductPage from './components/Items/ProductPage';
import AboutPage from './components/AboutPage/AboutPage';
import ContactUs from './components/ContactUs/Contactus';


const App=()=>{
  return (
      <RootLayout>
       <Routes>
          <Route path="/" exact element={<HomePage/>} />
          <Route path="/home" exact element={<HomePage/>}/>
          <Route path="/store" exact element={<ListItems/>}/>
          <Route path="/store/:productId" element={<ProductPage/>}/>
          <Route path="/about" element={<AboutPage/>}/>
          <Route path="/contactus" element={<ContactUs/>}/>
       </Routes>
      </RootLayout>


  );
}

export default App;

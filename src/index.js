import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
//import reportWebVitals from './reportWebVitals';
import ShopContextProvider from './context/ShopContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ShopContextProvider> 
    <App />
  </ShopContextProvider>


// <ShopContextProvider>   <App />  </ShopContextProvider> using this we can provide the shopcontext data to all pages
// <ShopContextProvider>   <App />  </ShopContextProvider> this data is provides all pages
  //<React.StrictMode> isko maine likha h <ShopContextProvider>   <App />  </ShopContextProvider>
   // <App />
 // </React.StrictMode>
);


//reportWebVitals();

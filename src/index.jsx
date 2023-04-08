import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalContextProvider from './Components/utils/global.context.jsx';
import Contact from './Routes/Contact.jsx';
import Detail from './Routes/Detail.jsx';
import Favs from './Routes/Favs.jsx';
import Home from './Routes/Home.jsx';
import './index.css';
import App from './App';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <BrowserRouter>
   <GlobalContextProvider>
   <Routes>
      <Route path="/" element={<App />}>
      <Route path="/home" element={<Home/>} />
      <Route path="/dentista/:id" element={<Detail/>} />
      <Route path="/contact" element={<Contact/>} />
      <Route path="/favs" element={<Favs/>} />
      </Route>
    </Routes>
   </GlobalContextProvider>
   </BrowserRouter>
  </React.StrictMode>
);


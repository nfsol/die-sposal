import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import './index.css';
import App from './App';
import Header from './components/Header'
import Reviews from './components/Reviews'
import Services from './components/Services'
import Cleanse from './components/Cleanse'

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
      <Route
        index
        element={<Header />
        }
      />
      <Route path="reviews" element={<Reviews />} />
      <Route path="services" element={<Services/>}/>
        <Route path="cleanse" element={<Cleanse />} />
        </Route>
       
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);


   
import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyB8Nnad9ZV3M0Gtnc4wTYGGaS7YPeWdl0s",
  authDomain: "web-companion-info340.firebaseapp.com",
  databaseURL: "https://computer-companion-default-rtdb.firebaseio.com/",
  projectId: "web-companion-info340",
  storageBucket: "web-companion-info340.appspot.com",
  messagingSenderId: "23925s4969766",
  appId: "1:239254969766:web:4332f01f9347b7123cc367"
};

const app = initializeApp(firebaseConfig);


ReactDOM.render(<BrowserRouter><App /></BrowserRouter>,  document.getElementById('root'));
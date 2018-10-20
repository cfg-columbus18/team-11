import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from "react-router-dom";
// import test from "express";


ReactDOM.render(
    <Router>
        <App />
    </Router>,
    document.getElementById("root")
);

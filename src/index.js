import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './utilities/routes.js';
import * as firebase from 'firebase';
import { browserHistory } from 'react-router';
import ReactGA from 'react-ga';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-grid.css';
import 'font-awesome/css/font-awesome.min.css';
import './index.css';

const env = process.env.REACT_APP_ENV || process.env.NODE_ENV;
let config = {};
if (env === 'development') {
    console.log('process dev',env);
    ReactGA.initialize('UA-110165661-1'); //Unique Google Analytics tracking number
    //this configuration is use for development purposes, change if needed
    config = {
        apiKey: "AIzaSyCBA9wQxpgPpfIZWbjOg-qhx_p2JALA440",
        authDomain: "era-website-dev.firebaseapp.com",
        databaseURL: "https://era-website-dev.firebaseio.com",
        projectId: "era-website-dev",
        storageBucket: "era-website-dev.appspot.com",
        messagingSenderId: "871423224038"
    };
} else {
    console.log('process prod',env);
    ReactGA.initialize('UA-75649962-1');
    config = {
        apiKey: "AIzaSyBe3AwuChHFr-UVZH_M-gPBih5VWDG1va4",
        authDomain: "era-website-a5d17.firebaseapp.com",
        databaseURL: "https://era-website-a5d17.firebaseio.com",
        projectId: "era-website-a5d17",
        storageBucket: "era-website-a5d17.appspot.com",
        messagingSenderId: "992968725700"
    };
}

firebase.initializeApp(config);

ReactDOM.render(
  <Routes history={browserHistory} />,
  document.getElementById('root')
);

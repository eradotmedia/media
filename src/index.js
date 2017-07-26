import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './utilities/routes.js';
import * as firebase from 'firebase';
import { browserHistory } from 'react-router';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-grid.css';
import 'font-awesome/css/font-awesome.min.css';

const config = {
    apiKey: "AIzaSyBe3AwuChHFr-UVZH_M-gPBih5VWDG1va4",
    authDomain: "era-website-a5d17.firebaseapp.com",
    databaseURL: "https://era-website-a5d17.firebaseio.com",
    projectId: "era-website-a5d17",
    storageBucket: "era-website-a5d17.appspot.com",
    messagingSenderId: "992968725700"
};
firebase.initializeApp(config);

ReactDOM.render(
  <Routes history={browserHistory} />,
  document.getElementById('root')
);

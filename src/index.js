import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './utilities/routes.js';
import { browserHistory } from 'react-router';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-grid.css';

ReactDOM.render(
  <Routes history={browserHistory} />,
  document.getElementById('root')
);

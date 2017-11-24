import React from 'react';
import { Router, Route, browserHistory } from 'react-router';
import ReactGA from 'react-ga';

import App from '../App';
import Home from '../pages/home.js';
import Work from '../pages/work.js';
import About from '../pages/about.js';
import Contact from '../pages/contact.js';
import Koc from '../pages/project/koc.js';
import Boe from '../pages/project/boe.js';
import Ikea from '../pages/project/ikea.js';
import Equate from '../pages/project/equate.js';
import Alroumi from '../pages/project/alroumi.js';
import Shrimpy from '../pages/project/shrimpy.js';
import Almarkaz from '../pages/project/almarkaz.js';
import Capabilities from '../pages/capabilities.js';
import CircuitPlus from '../pages/project/circuitplus.js';
import AstonMartin from '../pages/project/astonmartin.js';

let updateView = () => {
    window.scrollTo(0, 0);
    ReactGA.set({ page: window.location.pathname + window.location.search });
    ReactGA.pageview(window.location.pathname + window.location.search);
};

const Routes = (props) => (
   <Router onUpdate={updateView} {...props} history={browserHistory}>
      <Route component={App}>
         <Route path="/" component={Home} />
         <Route path="work" component={Work} />
         <Route path="capabilities" component={Capabilities} />
         <Route path="about-us" component={About} />
         <Route path="contact-us" component={Contact} />
         <Route path="markaz" component={Almarkaz} />
         <Route path="boe" component={Boe} />
         <Route path="ikea" component={Ikea} />
         <Route path="deraya" component={Koc} />
         <Route path="alroumi" component={Alroumi} />
         <Route path="shrimpy" component={Shrimpy} />
         <Route path="equate" component={Equate} />
         <Route path="circuitplus" component={CircuitPlus} />
         <Route path="astonmartin" component={AstonMartin} />
      </Route>
   </Router>
);

export default Routes;

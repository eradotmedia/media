import React, { Component } from 'react';
import OneColumn from '../components/home/oneColumn.js';
import TwoColumn from '../components/home/twoColumn.js';
import ThreeColumn from '../components/home/threeColumn.js';
import Portfolio from '../data/portfolio';
import Social from '../data/social';
import Qoute from '../data/qoute';

class Home extends Component {
    render() {
        const container = {
            margin: '0',
            padding: '0',
        }

        return (
            <div className="container-fluid" style={container}>
                <OneColumn data={Portfolio.ALMARKAZ}/>
                <ThreeColumn data={Social}/>
                <OneColumn data={Portfolio.KOC}/>
                <TwoColumn qoute={Qoute.CEO} project={Portfolio.BOE} />
                <OneColumn data={Portfolio.IKEA}/>
            </div>
        );
    }
};

export default Home;

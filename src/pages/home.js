import React, { Component } from 'react';
import OneColumn from '../components/home/oneColumn.js';
import TwoColumn from '../components/home/twoColumn.js';
import ThreeColumn from '../components/home/threeColumn.js';
import Portfolio from '../data/portfolio';
import Social from '../data/social';
import Quote from '../data/quote';

class Home extends Component {
    render() {
        const container = {
            margin: '0',
            padding: '0',
        };

        return (
            <div className="container-fluid" style={container}>
                <OneColumn data={Portfolio.MARKAZ}/>
                <ThreeColumn data={Social}/>
                <OneColumn data={Portfolio.DERAYA}/>
                <TwoColumn quote={Quote.CEO} project={Portfolio.BOE} />
                <OneColumn data={Portfolio.IKEA}/>
            </div>
        );
    }
}

export default Home;

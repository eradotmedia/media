import React, { Component } from 'react';
import OneColumn from '../components/work/oneColumn.js';
import TwoColumn from '../components/work/twoColumn.js';
import Portfolio from '../data/portfolio';

class Work extends Component {
    render() {
        const container = {
            margin: '0',
            padding: '0',
        }

        return (
            <div className="container-fluid" style={container}>
                <OneColumn data={Portfolio.ALMARKAZ}/>
                <TwoColumn dataOne={Portfolio.IKEA} dataTwo={Portfolio.BOE} />
                <OneColumn data={Portfolio.KOC}/>
                <TwoColumn dataOne={Portfolio.ALROUMI} dataTwo={Portfolio.AM} />
            </div>
        );
    }
};

export default Work;

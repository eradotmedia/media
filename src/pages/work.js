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
                <OneColumn data={Portfolio.DERAYA}/>
                <TwoColumn dataOne={Portfolio.IKEA} dataTwo={Portfolio.BOE} />
                <OneColumn data={Portfolio.MARKAZ}/>
                <TwoColumn dataOne={Portfolio.ALROUMI} dataTwo={Portfolio.ASTONMARTIN} />
                <OneColumn data={Portfolio.CIRCUITPLUS}/>
                <TwoColumn dataOne={Portfolio.SHRIMPY} dataTwo={Portfolio.EQUATE} />
            </div>
        );
    }
};

export default Work;

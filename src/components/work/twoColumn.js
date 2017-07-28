import React, { Component } from 'react';
import Project from './project';

class TwoColumn extends Component {
    constructor(props) {
        super(props);

        let dataOne = props.dataOne;
        let dataTwo = props.dataTwo;
        this.state = {
            dataOne: dataOne,
            dataTwo: dataTwo,
        };
    }

    render() {
        const container = {
            background: '#fff',
            margin: '0',
            width: '100%',
        };

        const col = {
            backgroundColor: '#ED1C7F',
            color: '#fff',
            height: '550px',
            padding: '0px',
        };

        return (
            <div className="container" style={container}>
                <div className="row" >
                    <div className="col-xs-12 col-md-6" style={col}>
                        <Project data={this.state.dataOne} />
                    </div>
                    <div className="col-xs-12 col-md-6" style={col}>
                        <Project data={this.state.dataTwo} />
                    </div>
                </div>
            </div>
        );
    }
}

export default TwoColumn;

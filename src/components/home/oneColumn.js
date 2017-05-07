import React, { Component } from 'react';
import ProjectColumn from './projectColumn';

class OneColumn extends Component {
    constructor(props) {
        super(props);

        let data = props.data;
        this.state = {
            data: data,
        };
    }

    render() {
        const container = {
            padding: '0',
            margin: '0',
            width: '100%',
            height: '550px',
        }

        const row = {
            margin: 'inherit',
            padding: 'inherit',
            width: 'inherit',
            height: 'inherit',
        }

        const col = {
            margin: 'inherit',
            padding: 'inherit',
            width: 'inherit',
            height: 'inherit',
        }

        return (
            <div className="container" style={container}>
                <div className="row" style={row}>
                    <div className="col" style={col}>
                        <ProjectColumn data={this.state.data} />
                    </div>
                </div>
            </div>
        );
    }
};

export default OneColumn;

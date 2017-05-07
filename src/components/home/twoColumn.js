import React, { Component } from 'react';
import ProjectColumn from './projectColumn';
import QouteColumn from './qouteColumn';

class TwoColumn extends Component {
    constructor(props) {
        super(props);

        let qoute = props.qoute;
        let project = props.project;
        this.state = {
            qoute: qoute,
            project: project,
        };
    }

    render() {
        const container = {
            background: '#fff',
            margin: '0',
            width: '100%',
        }

        const col = {
            backgroundColor: '#ED1C7F',
            color: '#fff',
            height: '400px',
            padding: '0px',
        }

        return (
            <div className="container" style={container}>
                <div className="row" >
                    <div className="col-xs-12 col-md-5 col-lg-4" style={col}>
                        <QouteColumn />
                    </div>
                    <div className="col-xs-12 col-md-7 col-lg-8" style={col}>
                        <ProjectColumn data={this.state.project} />
                    </div>
                </div>
            </div>
        );
    }
};

export default TwoColumn;

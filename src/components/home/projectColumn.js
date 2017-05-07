import React, { Component } from 'react';
import { Link } from 'react-router';

class ProjectColumn extends Component {
    constructor(props) {
        super(props);

        let data = props.data;
        this.state = {
            data: data,
            client: data.client,
            project: data.project,
            path: data.path,
            background: data.background,
        };
    }

    render() {
        const container = {
            background: `#fff url(${this.state.background}) no-repeat center center / cover`,
            margin: '0',
            width: 'inherit',
            height: 'inherit',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'flex-end',
            alignContent: 'flex-end',
        }

        const row = {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'flex-end',
            alignContent: 'flex-end',
        }

        const col = {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-end',
            alignContent: 'flex-end',
            margin: '20px',
            padding: '20px',
            color: '#fff',
            textAlign: 'right',
        }

        const heading = {
            backgroundColor: "#ED1C7F",
            fontFamily: 'Texta Heavy',
            fontSize: '0.9em',
            fontStyle: 'Italic',
            padding: '5px 16px',
            margin: '2px',
            letterSpacing: '1px',
        }

        const link = {
            color: "#FFF",
            fontFamily: 'Agaramond Regular',
            fontSize: '1.1em',
            textDecoration: 'none',
            letterSpacing: '1px',
        }

        const arrow = {
            color: '#ED1C7F',
            fontSize: '28px',
            lineHeight: '26px',
            verticalAlign: 'text-top',
        }

        const url = `/${this.state.path}`

        return (
            <div className="container" style={container}>
                <div className="row" style={row}>
                    <div className="col" style={col}>
                        <h3><span style={heading}>{this.state.client}</span></h3>
                        <h3><span style={heading}>{this.state.project}</span></h3>
                        <Link to={url} style={link} >read more <span style={arrow}>→</span></Link>
                    </div>
                </div>
            </div>
        );
    }
};

export default ProjectColumn;

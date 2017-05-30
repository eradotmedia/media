import React, { Component } from 'react';
import { Link } from 'react-router';
import Capability from './capability-icon';

class Project extends Component {
    constructor(props) {
        super(props);

        let data = props.data;
        this.state = {
            data: data,
            client: data.client,
            project: data.project,
            background: data.background,
            capability: data.capability,
            path: data.path,
            isOpen: false,
        };

        this.handleMouse = this.handleMouse.bind(this);
    }

    render() {
        const capability = this.state.capability;
        const container = {
            background: `#fff url(${this.state.background}) no-repeat center center / cover`,
            margin: '0',
            width: 'inherit',
            height: 'inherit',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'flex-end',
        }

        const row = {
            display: 'flex',
            alignContent: 'flex-end',
            width: 'inherit',
            margin: '0',
        }

        const col = {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-end',
            alignContent: 'flex-end',
            margin: '15px',
            padding: '15px',
            color: '#fff',
            textAlign: 'right',
        }

        const heading = {
            backgroundColor: "#ED1C7F",
            fontFamily: 'Texta Heavy',
            fontStyle: 'Italic',
            fontSize: '0.8em',
            padding: '4px 10px',
            margin: '2px',
            letterSpacing: '1px',
        }

        const link = {
            fontFamily: 'Agaramond Regular',
            fontSize: '1.0em',
            textDecoration: 'none',
            letterSpacing: '1px',
        }

        const arrow = {
            color: '#ED1C7F',
            fontSize: '28px',
            lineHeight: '26px',
            verticalAlign: 'text-top',
        }

        const list = {
            backgroundColor: '#ED1C7F',
            listStyle: 'none',
            display: 'flex',
            flexDirection: 'column',
            padding: '30px',
            width: '190px',
            textAlign: 'left',
            margin: '0',
        }

        const icon = {
            listStyle: 'none',
            display: 'flex',
            flexDirection: 'row',
            margin: '0',
        }

        const url = `/${this.state.path}`

        return (
            <div className="container" style={container}>
                <div className="row work-row" style={row}>
                    <div className="col-xs-12 desktop-only" style={col}>
                        {
                            this.state.isOpen ? (
                                <ul className="desktop-only" style={list} onMouseLeave={this.handleMouse}>
                                    {this.renderCapabilityList(capability)}
                                </ul>
                            ) : (
                                <ul className="desktop-only" style={icon} onMouseOver={this.handleMouse}>
                                    {this.renderCapabilityIcons(capability)}
                                </ul>
                            )
                        }
                    </div>
                    <div className="col-xs-12" style={col}>
                        <h3><span style={heading}>{this.state.client}</span></h3>
                        <h3><span style={heading}>{this.state.project}</span></h3>
                        <Link to={url} style={link} className="a-link">read more <span style={arrow}>→</span></Link>
                    </div>
                </div>
            </div>
        );
    }

    handleMouse() {
        this.setState(prevState => ({
            isOpen: !prevState.isOpen,
        }));

        console.log(this.state.isOpen);
    }

    renderCapabilityList(capability) {
        let keys = Object.values(capability);
        const text = {
            fontFamily: 'Texta Heavy',
            fontStyle: 'italic',
            fontSize: '1.5em',
            lineHeight: '1.2em',
        };

        return (
            keys.map(function(element, index) {
                return (
                    <h3 style={text}>{element.title}</h3>
                );
            })
        );
    };

    renderCapabilityIcons(capability) {
        let keys = Object.values(capability);
        return (
            keys.map(function(element, index) {
                return (
                    <Capability key={index} data={element}/>
                );
            })
        );
    };
};

export default Project;

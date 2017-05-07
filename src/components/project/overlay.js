import React, { Component } from 'react';

class Overlay extends Component {
    render() {
        const capability = this.props.data.capability;
        const main = {
            position: 'fixed',
            top: '0',
            left: '0',
            right: '0',
            bottom: '0',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            pointerEvents: 'none',
        }
        const container = {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            width: '94%',
        }

        const row = {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: '100%',
        }

        const textCol = {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            justifyContent: 'center',
        }

        const iconCol = {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-end',
            justifyContent: 'center',
        }

        const paragraph = {
            writingMode:'tb-rl',
            transform: 'rotate(180deg)',
            textTransform: 'lowercase',
            fontFamily: 'Agaramond Bold',
            color: '#0A2037',
        }

        const icon = {
            listStyle: 'none',
            display: 'flex',
            flexDirection: 'column',
            margin: '0',
            color: 'black',
        }

        return (
            <div className="container-fluid" style={main}>
                <div className="container" style={container}>
                    <div className="row" style={row}>
                        <div className="col" style={textCol}>
                            <div className="row">
                                <p style={paragraph}>{this.props.data.project}</p>
                            </div>
                            <div className="row">
                                <p style={paragraph}>|</p>
                            </div>
                            <div className="row">
                                <p style={paragraph}>{this.props.data.client}</p>
                            </div>
                            <div className="row">
                                <p style={paragraph}>|</p>
                            </div>
                            <div className="row">
                                <p style={paragraph}>era.media</p>
                            </div>
                        </div>
                        <div className="col" style={iconCol}>
                            <div className="row">
                                <ul style={icon} >
                                    {this.renderCapabilityIcons(capability)}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    renderCapabilityIcons(capability) {
        let keys = Object.values(capability);
        const list = {
            margin: '5px auto',
        }

        const img = {
            width: '15px',
            height: '15px',
        }
        return (
            keys.map(function(element, index) {
                return (
                    <li key={index} style={list}>
                        <img src={element.icon.blue} alt="icon" style={img}/>
                    </li>
                );
            })
        );
    };
};

export default Overlay;

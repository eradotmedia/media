import React, { Component } from 'react';

class About extends Component {
    render() {
        const container = {
            margin: '0',
            padding: '0',
            backgroundColor: '#0A2037',
            color: '#FFFFFF',
            height: '93vh',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
        }

        return (
            <div className="container-fluid" style={container}>
                <h2>THIS IS THE ABOUT PAGE</h2>
            </div>
        );
    }
};

export default About;

import React, { Component } from 'react';

class About extends Component {
    render() {
        const container = {
            margin: '0',
            padding: '0',
        }

        return (
            <div className="container-fluid" style={container}>
                <h2>THIS IS THE ABOUT PAGE</h2>
            </div>
        );
    }
};

export default About;

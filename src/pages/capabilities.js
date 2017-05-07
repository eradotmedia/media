import React, { Component } from 'react';
import Capability from '../components/capabilities/capability';
import CapabilityData from '../data/capability.js';

class Capabilities extends Component {
    render() {
        const mainContainer = {
            margin: '0',
            padding: '0',
            backgroundColor: 'RGBA(10, 32, 55, 1.00)',
        }

        const container = {
            padding: '100px 20px',
        }

        const row = {
            padding: '50px',
        }

        return (
            <div className="container-fluid" style={mainContainer}>
                <div className="container" style={container}>
                    <div className="row" style={row}>
                        <Capability data={CapabilityData.strategy} />
                        <Capability data={CapabilityData.digital} />
                        <Capability data={CapabilityData.content} />
                        <Capability data={CapabilityData.creative} />
                        <Capability data={CapabilityData.reach} />
                        <Capability data={CapabilityData.technology} />
                    </div>
                </div>
            </div>
        );
    }
};

export default Capabilities;

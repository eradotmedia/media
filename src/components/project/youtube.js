import React, { Component } from 'react';

class Youtube extends Component {
    render() {
        const container = {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            padding: '20px 0',
        }

        const row = {
            margin: '0px',
            padding: '20px 0',
            width: '80%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
        }
        
        return (
            <div className="container" style={container}>
                <div className="row" style={row}>
                    <div className="embed-responsive embed-responsive-16by9">
                        <iframe className="embed-responsive-item" src={this.props.data} />
                    </div>
                </div>
            </div>
        );
    }
};

export default Youtube;

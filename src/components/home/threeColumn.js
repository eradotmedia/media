import React, { Component } from 'react';
import SocialColumn from './socialColumn';
import ListingColumn from './listingColumn';

class ThreeColumn extends Component {
    constructor(props) {
        super(props);

        let instagram = props.data.INSTAGRAM;
        let twitter = props.data.TWITTER;

        this.state = {
            instagram: instagram,
            twitter: twitter,
        };
    }

    render() {
        const container = {
            background: '#fff',
            margin: '0',
            padding: '0',
            width: '100%',
        }

        const row = {
            margin: 'inherit',
            width: 'inherit',
        }

        const col = {
            height: '400px',
            margin: 'inherit',
            padding: 'inherit',
        }

        return (
            <div className="container" style={container}>
                <div className="row" style={row}>
                    <div className="col-xs-12 col-md-4" style={col}>
                        <SocialColumn data={this.state.instagram} />
                    </div>
                    <div className="col-xs-12 col-md-4" style={col} >
                        <SocialColumn data={this.state.twitter} />
                    </div>
                    <div className="col-xs-12 col-md-4" style={col} >
                        <ListingColumn />
                    </div>
                </div>
            </div>
        );
    }
};

export default ThreeColumn;

import React, { Component } from 'react';
import SocialColumn from './socialColumn';
import ListingColumn from './listingColumn';

class ThreeColumn extends Component {
    constructor(props) {
        super(props);

        let camera = props.data.camera;
        let ikea = props.data.ikea;

        this.state = {
            camera: camera,
            ikea: ikea,
        };
    }

    render() {
        const container = {
            background: '#fff',
            margin: '0',
            padding: '0',
            width: '100%',
        };

        const row = {
            margin: 'inherit',
            width: 'inherit',
        };

        const col1 = {
            height: '400px',
            margin: 'inherit',
            padding: 'inherit',
            paddingLeft: '0',
            paddingRight: '0',
        };

        const col2 = {
            margin: 'inherit',
            padding: 'inherit',
        };

        return (
            <div className="container" style={container}>
                <div className="row" style={row}>
                    <div className="col-xs-12 col-md-4" style={col1}>
                        <SocialColumn data={this.state.camera} />
                    </div>
                    <div className="col-xs-12 col-md-4" style={col1} >
                        <SocialColumn data={this.state.ikea} />
                    </div>
                    <div className="col-xs-12 col-md-4 three-col" style={col2} >
                        <ListingColumn />
                    </div>
                </div>
            </div>
        );
    }
}

export default ThreeColumn;

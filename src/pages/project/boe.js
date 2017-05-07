import React, { Component } from 'react';
import Overlay from '../../components/project/overlay.js';
import Text from '../../components/project/text.js';
import Video from '../../components/project/video.js';
import FullWidthImage from '../../components/project/fullwidthImage.js';
import Image from '../../components/project/image.js';
import Data from '../../data/portfolio';

class Boe extends Component {
    constructor() {
        super();
        const data = Data.BOE;
        this.state = {
            data: data,
            image: data.image,
            video: data.video
        }
    }
    render() {
        const mainContainer = {
            margin: '0',
            padding: '0',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
        }

        const container = {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
        }

        const row = {
            margin: '0px',
            padding: '50px 0',
            width: '90%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
        }

        const img = {
            display: 'block',
            height: '788px'
        }

        return (
            <div className="container-fluid" style={mainContainer}>
                <Video data={this.state.video.main}/>
                <Text data={this.state.data}/>
                <Image data={this.state.image.stationary} />
                <FullWidthImage data={this.state.image.focus} />
                <div className="container" style={container}>
                    <div className="row" style={row}>
                        <div className="carousel" data-flickity='{ "cellAlign": "center", "imagesLoaded": true }'>
                            <img className="img-fluid" src={this.state.image.sketch} alt="battle-ground-sketch"/>
                            <img className="img-fluid" src={this.state.image.mockup} alt="battle-ground-mockup"/>
                        </div>
                    </div>
                </div>
                <Image data={this.state.image.technology} />
                <div className="container" style={container}>
                    <div className="row" style={row}>
                        <div className="carousel" data-flickity='{ "cellAlign": "center", "imagesLoaded": true }'>
                            <img className="img-fluid" src={this.state.image.clothing[1]} alt="boe clothing"/>
                            <img className="img-fluid" src={this.state.image.clothing[2]} alt="boe clothing"/>
                            <img className="img-fluid" src={this.state.image.clothing[3]} alt="boe clothing"/>
                            <img className="img-fluid" src={this.state.image.clothing[4]} alt="boe clothing"/>
                            <img className="img-fluid" src={this.state.image.clothing[5]} alt="boe clothing"/>
                            <img className="img-fluid" src={this.state.image.clothing[6]} alt="boe clothing"/>
                            <img className="img-fluid" src={this.state.image.clothing[7]} alt="boe clothing"/>
                            <img className="img-fluid" src={this.state.image.clothing[8]} alt="boe clothing"/>
                        </div>
                    </div>
                </div>
                <Overlay data={this.state.data}/>
            </div>
        );
    }
};

export default Boe;

import React, { Component } from 'react';
import Overlay from '../../components/project/overlay.js';
import Text from '../../components/project/text.js';
import Video from '../../components/project/video.js';
import Image from '../../components/project/image.js';
import Data from '../../data/portfolio/circuitplus';

class CircuitPlus extends Component {
    constructor() {
        super();
        const data = Data;
        this.state = {
            data: data,
            image: data.image,
            video: data.video,
            socialmedia: data.socialmedia,
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

        return (
            <div className="container-fluid" style={mainContainer}>
                <Video video={this.state.video.main} image={this.state.data.background}/>
                <Text data={this.state.data}/>
                <Overlay data={this.state.data}/>
                <Image data={this.state.image.websiteScreenShotOne} />
                <Image data={this.state.image.websiteScreenShotTwo} />
                <Image data={this.state.image.websiteScreenShotThree} />
                <Image data={this.state.image.websiteScreenShotFour} />
                <Image data={this.state.image.websiteScreenShotFive} />
            </div>
        );
    }
};

export default CircuitPlus;

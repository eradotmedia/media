import React, { Component } from 'react';
import Overlay from '../../components/project/overlay.js';
import Text from '../../components/project/text.js';
import Video from '../../components/project/video.js';
import Youtube from '../../components/project/youtube.js';
import FullWidthImage from '../../components/project/fullwidthImage.js';
import Image from '../../components/project/image.js';
import Carousel from '../../components/project/carousel.js';
import Data from '../../data/portfolio/boe';

class Boe extends Component {
    constructor() {
        super();
        const data = Data;
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
            display: '-webkit-flex',
            WebkitFlexDirection: 'column',
            WebkitAlignItems: 'center',
        };

        return (
            <div className="container-fluid" style={mainContainer}>
                <Video video={this.state.video.main} image={this.state.data.background}/>
                <Text data={this.state.data}/>
                <Image data={this.state.image.stationary} />
                <Youtube data={this.state.video.intro}/>
                <Carousel data={this.state.image.stage}/>
                <FullWidthImage data={this.state.image.focus} />
                <Image data={this.state.image.technology} />
                <Youtube data={this.state.video.slomo}/>
                <Carousel data={this.state.image.clothing}/>
                <Youtube data={this.state.video.ceremony}/>
                <Overlay data={this.state.data}/>
            </div>
        );
    }
}

export default Boe;

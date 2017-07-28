import React, { Component } from 'react';
import Overlay from '../../components/project/overlay.js';
import Text from '../../components/project/text.js';
import Video from '../../components/project/video.js';
import Carousel from '../../components/project/carousel.js';
import Data from '../../data/portfolio';

class Equate extends Component {
    constructor() {
        super();
        const data = Data.EQUATE;
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
            display: '-webkit-flex',
            WebkitFlexDirection: 'column',
            WebkitAlignItems: 'center',
        };

        return (
            <div className="container-fluid" style={mainContainer}>
                <Video video={this.state.video.main} image={this.state.data.background}/>
                <Text data={this.state.data}/>
                <Carousel data={this.state.image.presentation}/>
                <Overlay data={this.state.data}/>
            </div>
        );
    }
}

export default Equate;

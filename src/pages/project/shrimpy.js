import React, { Component } from 'react';
import Overlay from '../../components/project/overlay.js';
import Text from '../../components/project/text.js';
import Video from '../../components/project/video.js';
import Youtube from '../../components/project/youtube.js';
import Image from '../../components/project/image.js';
import Data from '../../data/portfolio';

class Shrimpy extends Component {
    constructor() {
        super();
        const data = Data.SHRIMPY;
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
                <Image data={this.state.image.storyboard} />
                <Youtube data={this.state.video.space}/>
                <Youtube data={this.state.video.ny}/>
                <Overlay data={this.state.data}/>
            </div>
        );
    }
};

export default Shrimpy;

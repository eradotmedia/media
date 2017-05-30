import React, { Component } from 'react';
import Overlay from '../../components/project/overlay.js';
import Video from '../../components/project/video.js';
import Youtube from '../../components/project/youtube.js';
import Text from '../../components/project/text.js';
import Image from '../../components/project/image.js';
import Quote from '../../components/project/quote.js';
import Data from '../../data/portfolio/deraya';

class Koc extends Component {
    constructor() {
        super();
        const data = Data;
        this.state = {
            data: data,
            image: data.image,
            video: data.video,
            quote: data.quote,
        }
    }
    render() {
        const container = {
            margin: '0',
            padding: '0',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
        }

        return (
            <div className="container-fluid" style={container}>
                <Video video={this.state.video.main} image={this.state.data.background}/>
                <Text data={this.state.data}/>
                <Youtube data={this.state.video.deraya}/>
                <Image data={this.state.image.print} />
                <Youtube data={this.state.video.future}/>
                <Youtube data={this.state.video.environment}/>
                <Youtube data={this.state.video.song}/>
                <Quote data={this.state.quote.traffic}/>
                <Overlay data={this.state.data}/>
            </div>
        );
    }
};

export default Koc;

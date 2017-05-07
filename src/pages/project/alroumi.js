import React, { Component } from 'react';
import Overlay from '../../components/project/overlay.js';
import Video from '../../components/project/video.js';
import Text from '../../components/project/text.js';
import FullWidthImage from '../../components/project/fullwidthImage.js';
import Image from '../../components/project/image.js';
import Data from '../../data/portfolio';

class Alroumi extends Component {
    constructor() {
        super();
        const data = Data.ALROUMI;
        this.state = {
            data: data,
            image: data.image,
            video: data.video,
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
            padding: '0px',
            width: '90%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
        }

        return (
            <div className="container-fluid" style={mainContainer}>
                <Overlay data={this.state.data}/>
                <Video data={this.state.video.main}/>
                <Text data={this.state.data}/>
                <div className="container" style={container}>
                    <div className="row" style={row}>
                        <Image data={this.state.image.billboard} />
                    </div>
                </div>
                <FullWidthImage data={this.state.image.focus} />
                <div className="container" style={container}>
                    <div className="row" style={row}>
                        <Image data={this.state.image.identity} />
                    </div>
                </div>
            </div>
        );
    }
};

export default Alroumi;

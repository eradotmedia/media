import React, { Component } from 'react';
import Overlay from '../../components/project/overlay.js';
import Text from '../../components/project/text.js';
import Video from '../../components/project/video.js';
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

        const container = {
            margin: '20px auto',
            padding: '20px 0',
        }

        const row = {
            margin: 'auto',
            padding: '0px',
            width: '90%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
        }

        return (
            <div className="container-fluid" style={mainContainer}>
                <Overlay data={this.state.data}/>
                <Video data={this.state.video.main}/>
                <Text data={this.state.data}/>
                <div className="container" style={container}>
                    <div className="row" style={row}>
                        <div className="col-xs-12 col-md-12">
                            <Image data={this.state.image.storyboard} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};

export default Shrimpy;

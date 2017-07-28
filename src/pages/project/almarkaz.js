import React, { Component } from 'react';
import Text from '../../components/project/text.js';
import FullWidthImage from '../../components/project/fullwidthImage.js';
import Video from '../../components/project/video.js';
import ImageGrid from '../../components/project/image-grid.js';
import SocialMedia from '../../components/project/social-media.js';
import Overlay from '../../components/project/overlay.js';
import Data from '../../data/portfolio/markaz';

class Almarkaz extends Component {
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
            display: '-webkit-flex',
            WebkitFlexDirection: 'column',
            WebkitAlignItems: 'center',
        };

        const socialContainer = {
            margin: '20px auto',
            padding: '20px 0',
        };

        const row = {
            margin: 'auto',
            padding: '0px',
            width: '80%',
        };

        const col = {
            padding: '10px',
        };

        return (
            <div className="container-fluid" style={mainContainer}>
                <Video video={this.state.video.main} image={this.state.data.background}/>
                <Text data={this.state.data}/>
                <FullWidthImage data={this.state.image.child} />
                <ImageGrid data={this.state.image.storyboard} padding="10px"/>
                <FullWidthImage data={this.state.image.man} />
                <div className="container" style={socialContainer}>
                    <div className="row" style={row}>
                        <div className="col-xs-12 col-md-6" style={col}>
                            <SocialMedia data={this.state.socialmedia.arh}/>
                        </div>
                        <div className="col-xs-12 col-md-6" style={col}>
                            <SocialMedia data={this.state.socialmedia.markaz}/>
                        </div>
                    </div>
                    <div className="row" style={row}>
                        <div className="col-xs-12 col-md-7" style={col}>
                            <SocialMedia data={this.state.socialmedia.fatemah}/>
                        </div>
                        <div className="col-xs-12 col-md-5" style={col}>
                            <SocialMedia data={this.state.socialmedia.ceo}/>
                        </div>
                    </div>
                </div>
                <Overlay data={this.state.data}/>
            </div>
        );
    }
}

export default Almarkaz;

import React, { Component } from 'react';
import Overlay from '../../components/project/overlay.js';
import Text from '../../components/project/text.js';
import Video from '../../components/project/video.js';
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

        return (
            <div className="container-fluid" style={mainContainer}>
                <Overlay data={this.state.data}/>
                <Video data={this.state.video.main}/>
                <Text data={this.state.data}/>
                <div className="container" style={container}>
                    <div className="row" style={row}>
                        <div className="carousel" data-flickity='{ "cellAlign": "center", "imagesLoaded": true }'>
                            <img className="img-fluid" src={this.state.image.presentation[1]} alt="equate presentation"/>
                            <img className="img-fluid" src={this.state.image.presentation[2]} alt="equate presentation"/>
                            <img className="img-fluid" src={this.state.image.presentation[3]} alt="equate presentation"/>
                            <img className="img-fluid" src={this.state.image.presentation[4]} alt="equate presentation"/>
                            <img className="img-fluid" src={this.state.image.presentation[5]} alt="equate presentation"/>
                            <img className="img-fluid" src={this.state.image.presentation[6]} alt="equate presentation"/>
                            <img className="img-fluid" src={this.state.image.presentation[7]} alt="equate presentation"/>
                            <img className="img-fluid" src={this.state.image.presentation[8]} alt="equate presentation"/>
                            <img className="img-fluid" src={this.state.image.presentation[9]} alt="equate presentation"/>
                            <img className="img-fluid" src={this.state.image.presentation[10]} alt="equate presentation"/>
                            <img className="img-fluid" src={this.state.image.presentation[11]} alt="equate presentation"/>
                            <img className="img-fluid" src={this.state.image.presentation[12]} alt="equate presentation"/>
                            <img className="img-fluid" src={this.state.image.presentation[13]} alt="equate presentation"/>
                            <img className="img-fluid" src={this.state.image.presentation[14]} alt="equate presentation"/>
                            <img className="img-fluid" src={this.state.image.presentation[15]} alt="equate presentation"/>
                            <img className="img-fluid" src={this.state.image.presentation[16]} alt="equate presentation"/>
                            <img className="img-fluid" src={this.state.image.presentation[17]} alt="equate presentation"/>
                            <img className="img-fluid" src={this.state.image.presentation[18]} alt="equate presentation"/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};

export default Equate;

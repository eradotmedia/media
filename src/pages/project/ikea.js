import React, { Component } from 'react';
import Overlay from '../../components/project/overlay.js';
import Video from '../../components/project/video.js';
import Youtube from '../../components/project/youtube.js';
import Text from '../../components/project/text.js';
import Quote from '../../components/project/quote.js';
import FullWidthImage from '../../components/project/fullwidthImage.js';
import Data from '../../data/portfolio';

class Ikea extends Component {
    constructor() {
        super();
        const data = Data.IKEA;
        this.state = {
            data: data,
            image: data.image,
            quote: data.quote,
            video: data.video,
        }
    }
    render() {
        const fullwidthContainer = {
            margin: '0',
            padding: '0',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
        }

        const container = {
            padding: '30px 0',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
        }

        const row = {
            margin: '0',
            padding: '0',
            width: '90%',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
        }

        const col = {
            padding: '30px',
        }

        const text = {
            fontFamily: 'Texta Book',
            fontSize: '2.0em',
            padding: '30px 0',
            textTransform: 'uppercase',
        }

        return (
            <div className="container-fluid" style={fullwidthContainer}>
                <Video video={this.state.video.main} image={this.state.data.background}/>
                <Text data={this.state.data}/>
                <div className="container" style={container}>
                    <div className="row" style={row}>
                        <div className="col-xs-12 col-md-5" style={col}>
                            <h3 style={text}>Views<br />on youtube</h3>
                            <img className="img-fluid" src={this.state.image.viewership} alt="portfolio"/>
                        </div>
                        <div className="col-xs-12 col-md-5" style={col}>
                            <h3 style={text}>In-store<br />ad awareness</h3>
                            <img className="img-fluid" src={this.state.image.awareness} alt="portfolio"/>
                        </div>
                    </div>
                </div>
                <Quote data={this.state.quote.morning}/>
                <FullWidthImage data={this.state.image.wide} />
                <div className="container" style={container}>
                    <div className="row" style={row}>
                        <div className="col-xs-12 col-md-5" style={col}>
                            <h3 style={text}>Store<br />Traffic</h3>
                        </div>
                    </div>
                    <div className="row" style={row}>
                        <div className="col-xs-12 col-md-5" style={col}>
                            <img className="img-fluid" src={this.state.image.morning} alt="portfolio"/>
                        </div>
                        <div className="col-xs-12 col-md-5" style={col}>
                            <img className="img-fluid" src={this.state.image.evening} alt="portfolio"/>
                        </div>
                    </div>
                </div>
                <Quote data={this.state.quote.evening}/>
                <Youtube data={this.state.video.ad} />
                <Overlay data={this.state.data}/>
            </div>
        );
    }
};

export default Ikea;

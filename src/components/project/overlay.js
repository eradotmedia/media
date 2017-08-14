import React, { Component } from 'react';

class Overlay extends Component {
    render() {
        const capability = this.props.data.capability;
        const socialList = this.props.data.social;

        const textCol = {
            position: 'fixed',
            display: 'flex',
            display: '-webkit-flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            justifyContent: 'center',
            WebkitFlexDirection: 'column',
            WebkitAlignItems: 'flex-start',
            WebkitJustifyContent: 'center',
        };

        const iconCol = {
            position: 'fixed',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-end',
            justifyContent: 'center',
            display: '-webkit-flex',
            WebkitFlexDirection: 'column',
            WebkitAlignItems: 'flex-end',
            WebkitJustifyContent: 'center'
        };

        const paragraphRow = {
            display: '-webkit-flex',
        };

        const paragraph = {
            writingMode: 'vertical-rl',
            MozWritingMode: 'vertical-rl',
            WebkitTransform: 'rotate(180deg)',
            WebkitWritingMode: 'vertical-rl',
            transform: 'rotate(180deg)',
            textTransform: 'lowercase',
            fontFamily: 'Agaramond Bold',
            color: '#0A2037',
        };

        const icon = {
            listStyle: 'none',
            display: 'flex',
            flexDirection: 'column',
            display: '-webkit-flex',
            WebkitFlexDirection: 'column',
            margin: '0',
            color: 'black',
        };

        const socialRow = {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            display: '-webkit-flex',
            WebkitFlexDirection: 'column',
            WebkitAlignItems: 'center',
            WebkitJustifyContent: 'center',
            paddingBottom: '25px',
        };

        return (
            <div>
                <div className="col-md-1 project-overlay-left" style={textCol}>
                    <div className="row" style={socialRow} >
                        <ul style={icon}>
                            {this.renderSocialIcons(socialList)}
                        </ul>
                    </div>
                    <div className="row" style={paragraphRow}>
                        <p style={paragraph}>{this.props.data.project}</p>
                    </div>
                    <div className="row" style={paragraphRow}>
                        <p style={paragraph}>|</p>
                    </div>
                    <div className="row" style={paragraphRow}>
                        <p style={paragraph}>{this.props.data.client}</p>
                    </div>
                    <div className="row" style={paragraphRow}>
                        <p style={paragraph}>|</p>
                    </div>
                    <div className="row" style={paragraphRow}>
                        <p style={paragraph}>era.media</p>
                    </div>
                </div>
                <div className="col-md-1 project-overlay-right" style={iconCol}>
                    <div className="row" style={paragraphRow}>
                        <ul style={icon}>
                            {this.renderCapabilityIcons(capability)}
                        </ul>
                    </div>
                </div>
            </div>
        );
    };

    renderSocialIcons(socialList) {
        if(typeof socialList !== 'undefined') {
            let keys = Object.keys(socialList).map(item => socialList[item]);

            const list = {
                margin: '8px auto',
            };

            const icon = {
                padding: '20px 5px',
                color: '#0A2037',
            };

            return (
                keys.map(function(element, index) {
                    return (
                        <li key={index} style={list}>
                            <a href={element.link} target="_blank" style={icon}><i className={element.className} aria-hidden="true"></i></a>
                        </li>
                    );
                })
            );
        }
    };

    renderCapabilityIcons(capability) {
        let keys = Object.keys(capability).map(item => capability[item]);
        const list = {
            margin: '5px auto',
        };

        const img = {
            width: '15px',
            height: '15px',
        };
        return (
            keys.map(function(element, index) {
                return (
                    <li key={index} style={list}>
                        <img src={element.icon.blue} alt="icon" style={img}/>
                    </li>
                );
            })
        );
    };
};

export default Overlay;

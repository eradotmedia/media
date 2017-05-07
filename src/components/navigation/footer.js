import React, { Component } from 'react';

class Footer extends Component {
    render() {
        const footer = {
            backgroundColor: '#0A2037',
            width: '100%',
            height: '60px',
            lineHeight: '60px',
            overflow: 'hidden',
        }
        const container = {
            overflow: 'hidden',
            width: '100%',
            color: '#FFFFFF'
        }

        const row = {
            color: '#FFFFFF',
            padding: '0 20px',
        }

        const paragraph = {
            margin: '0',
        }

        const social = {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'flex-end',
            color: '#FFFFFF'
        }

        const icon = {
            padding: '0 15px',
            color: '#FFFFFF'
        }

        var year = new Date().getFullYear();

        return (
            <div className="footer" style={footer}>
                <div className="container" style={container}>
                    <div className="row" style={row}>
                        <div className="col-xs-12 col-md-6">
                            <p style={paragraph}>{year} &copy; era.media</p>
                        </div>
                        <div className="col-xs-12 col-md-6" style={social}>
                            <a style={icon} href="https://www.youtube.com/channel/UCyxFoaz7sQaBi1paPgsrdpg" target="_blank"><i className="fa fa-youtube-play" aria-hidden="true"></i></a>
                            <a style={icon} href="https://www.instagram.com/era.media/" target="_blank"><i className="fa fa-instagram" aria-hidden="true"></i></a>
                            <a style={icon} href="https://twitter.com/eradotmedia/" target="_blank"><i className="fa fa-twitter" aria-hidden="true"></i></a>
                            <a style={icon} href="https://www.linkedin.com/company-beta/10414202/" target="_blank"><i className="fa fa-linkedin" aria-hidden="true"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};

export default Footer;

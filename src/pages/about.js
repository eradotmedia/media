import React, { Component } from 'react';

class About extends Component {
    render() {

        const mainContainer = {
            margin: '0',
            padding: '0',
            backgroundColor: 'RGBA(10, 32, 55, 1.00)',
            height: '100%',
            color: '#FFFFFF',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
        };

        const container = {
            padding: '100px 30px',
            paddingTop: '150px',
        };
        // const mainContainer = {
        //     margin: '0',
        //     padding: '0',
        //     backgroundColor: 'RGBA(10, 32, 55, 1.00)',
        //     height: '93vh',
        //     color: '#FFFFFF',
        //     display: 'flex',
        //     flexDirection: 'row',
        //     justifyContent: 'center',
        //     alignItems: 'center',
        // };

        // const container = {
        //     padding: '60px 190px',
        //     paddingTop: '100px',
        // };
        const h1 = {
            fontFamily: 'Texta Heavy',
            backgroundColor: 'transparent',
            border: 'none',
            color: '#ED1C7F',
            padding: '0',
            paddingTop: '20px',
            paddingBottom: '10px',
            fontSize: '60px',
        };
        const b = {
            fontWeight: 'bolder'
        };

        return (
            <div className="container-fluid" style={mainContainer}>
                <div className="container" style={container}>
                    <h1 style={h1}>vision</h1>
                    <p className="about-paragraph" style={b}>Change is inevitable. We aim to lead it.</p>
                    <p className="about-paragraph">
                        Technology is disrupting our world by the second, changing everything from the way we connect and
                        communicate, to the way we consume and interact. The future will be molded by the innovative
                        creations of others. Instead of planning for it, at era. media, we focus our vision on actively shaping it.
                    </p>
                    <h1 style={h1}>mission</h1>
                    <p className="about-paragraph">
                        In today’s digital era, brands need to tap into their identity to form narratives that break
                        through the noise and resonate with their audiences. They need to utilize technology and digital
                        media to reach consumers across a variety of channels. They need to form data-driven strategies
                        that allow them to adapt and rise in today’s fast paced digital era.
                    </p>
                    <p className="about-paragraph">
                        Our mission is to empower brands through meaningful narratives that utilize a combination of high
                        quality visuals, engaging content, and smart technology, all driven by insightful data.
                    </p>
                </div>
            </div>
        );
    }
}

export default About;

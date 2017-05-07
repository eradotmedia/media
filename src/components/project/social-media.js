import React, { Component } from 'react';

class SocialMedia extends Component {
    render() {
        return (
            <a href={this.props.data.link} target="_blank"><img className="img-fluid" src={this.props.data.image} alt="social media" /></a>
        );
    }

    handleClick() {
        console.log('Image Clicked');
    }
};

export default SocialMedia;

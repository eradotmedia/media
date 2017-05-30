import React, { Component } from 'react';

class Video extends Component {
    render() {
        return (
            <div className="embed-responsive embed-responsive-16by9">
                <video className="embed-responsive-item era-video" controls>
                    <source src={this.props.video} type="video/mp4" />
                    <img src={this.props.image} alt="project"/>
                </video>
            </div>
        );
    }
};

export default Video;

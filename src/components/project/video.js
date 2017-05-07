import React, { Component } from 'react';

class Video extends Component {
    render() {
        return (
            <div className="embed-responsive embed-responsive-16by9">
                <video className="embed-responsive-item era-video" src={this.props.data} type="video/mp4" controls />
            </div>
        );
    }
};

export default Video;

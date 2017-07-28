import React, { Component } from 'react';
import './video.css';

class Video extends Component {
    constructor() {
        super();
        this.state = {
            showPlay: true,
            stream: 'icon-play',
            paused: '',
            muted: 'icon-sound',
            volumeBar: 0 + 'px',
            bufferBar: '0%',
            timeBar:  '0%',
            timeDrag: false,
            currentTime: '0:00',
            duration: '0:00',
            transitionPlay: {
                opacity: 1,
                animationName: 'fadeOutOpacity'
            }
        }
    }

    execute() {
        this.setState({volumeBar: ((1 - this.refs.video.volume) * 100 + 'px')});
        this.refs.video.addEventListener('timeupdate', this.updateTimeProgress.bind(this));
        this.refs.video.addEventListener('ended', this.pauseStream.bind(this));
        this.refs.volume.addEventListener('mousedown', this.updateVolume.bind(this));
        this.refs.progress.addEventListener('mouseup', this.changeProgress.bind(this));
        this.setState({duration: this.formatTime(this.refs.video.duration)});
    }

    changeProgress() {
        let maxDuration = this.refs.video.duration;
        let position = event.pageX - this.refs.progress.offsetLeft;
        let percentage = 100 * position / this.refs.progress.offsetWidth;

        percentage = percentage > 100
            ? percentage = 100
            : percentage < 0
                ? 0
                : percentage;

        this.setState({timeBar: percentage + '%'});
        this.refs.video.currentTime = maxDuration * percentage / 100;

        if(this.refs.video.paused || this.refs.video.ended) {
            this.resumeStream();
        }
    }

    updateTimeProgress() {
        let position =  this.refs.video.currentTime;
        let maxDuration =  this.refs.video.duration;
        let percentage = 100 * position / maxDuration;
        this.setState({timeBar: percentage + '%'});
        this.setState({currentTime: this.formatTime(this.refs.video.currentTime)});
    }

    updateVolume() {
        let position = event.offsetY;

        position = position > 100
            ? position = 100
            : position < 0
                ? 0
                : position;

        this.setState({volumeBar: (position + 'px')});
        this.refs.video.volume = (100 - position) / 100;

        if(this.refs.video.volume === 0) {
            this.setState({muted: 'muted icon-sound-off'});
            this.refs.video.muted = true;
        } else if(this.refs.video.volume < 0.5) {
            this.setState({muted: 'icon-sound-down'});
            this.refs.video.muted = false;
        } else {
            this.setState({muted: 'icon-sound'});
            this.refs.video.muted = false;
        }
    }

    formatTime(seconds) {
        let m = Math.floor( seconds / 60 );
        let s = Math.floor( seconds - ( m * 60) ) < 10 ? '0' + Math.floor( seconds -( m * 60) ) : Math.floor( seconds - ( m * 60 ) );
        return m + ":" + s;
    }

    // if buffer bar needed
    // updateBuffer() {
    //     let currentBuffer = this.refs.video.buffered.end(0);
    //     let maxduration = this.refs.video.duration;
    //     let perc = 100 * currentBuffer / maxduration;
    //
    //     this.setState({bufferBar: perc + '%'});
    //
    //     if(currentBuffer < maxduration) {
    //         setTimeout(this.updateBuffer.bind(this), 500);
    //     }
    // }
    pauseStream() {
        this.setState({stream: 'icon-play', paused: '', showPlay: true});
        this.refs.video.pause();
    }

    resumeStream() {
        this.setState({
            stream: 'icon-pause',
            paused: 'paused',
            showPlay: false,
        });
        this.refs.video.play();
    }

    toggleStream() {
        if(this.refs.video.paused || this.refs.video.ended) {
            this.resumeStream();
        } else {
            this.pauseStream();
        }
    }

    toggleSound() {
        this.refs.video.muted = !this.refs.video.muted;
        if(this.refs.video.muted) {
            this.setState({muted: 'muted icon-sound-off', volumeBar: 100 +'px'});
        } else {
            this.setState({muted: 'icon-sound', volumeBar: ((1 - this.refs.video.volume) * 100 + 'px')});
        }
    }

    render() {
        const flexIt = {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            display: '-webkit-flex',
            WebkitJustifyContent: 'center',
            WebkitAlignItems: 'center',
            width: '100%',
        };
        return (
            <div id="video" className="embed-responsive embed-responsive-16by9">
                <button rel="playButton" className="play"
                        style={this.state.showPlay ? {opacity: 1} : {opacity: 0}}
                        onClick={this.toggleStream.bind(this)}></button>
                <video ref="video"
                       onLoadedMetadata={this.execute.bind(this)}
                       onClick={this.toggleStream.bind(this)}
                       className="embed-responsive-item era-video"
                >
                    <source src={this.props.video} type="video/mp4" />
                    <img src={this.props.image} alt="project"/>
                </video>
                <div ref="control" className="control" style={!this.state.showPlay ? {opacity: 1} : {opacity: 0}}>
                    <div className="btmControl">
                        <div style={flexIt}>
                            <div ref="play" onClick={this.toggleStream.bind(this)} className={`btnPlay btn ${this.state.paused}`} title="Play/Pause video">
                                <span className={this.state.stream}></span>
                            </div>
                            <div className="progress-bar">
                                <div ref="progress" className="progress">
                                    {/*<span className="bufferBar" style={{width: this.state.bufferBar}}></span>*/}
                                    <span className="timeBar" style={{width: this.state.timeBar}}></span>
                                </div>
                            </div>
                            <div className="time">
                                <span style={{paddingRight: '5px'}}>{this.state.currentTime}</span> / <span  style={{paddingLeft: '5px'}}>{this.state.duration}</span>
                            </div>
                        </div>
                        <div className="volume-control">
                            <div ref="volume" className="volume" title="Set volume">
                                <span ref="volumeBar" className="volumeBar" style={{height: this.state.volumeBar}}></span>
                            </div>
                            <div onClick={this.toggleSound.bind(this)} className="sound sound2 btn" title="Mute/Unmute sound">
                                <span className={this.state.muted}></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};

export default Video;

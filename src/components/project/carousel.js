import React, { Component } from 'react';

class Carousel extends Component {
    constructor(props) {
        super(props);

        const data = props.data

        this.state = {
            images: data.images,
            count: data.count,
            counter: 1,
        };

        this.nextPhoto = this.nextPhoto.bind(this);
        this.previousPhoto = this.previousPhoto.bind(this);
    }
    nextPhoto() {
        const count = this.state.count;
        const counter = this.state.counter;

        if (counter === Number(count)) {
            this.setState({
                counter: 1,
            })
        } else if (counter < count) {
            this.setState({
                counter: counter + 1,
            })
        }
    }

    previousPhoto() {
        const count = this.state.count;
        const counter = this.state.counter;

        if (counter === 1) {
            this.setState({
                counter: count,
            })
        } else {
            this.setState({
                counter: counter - 1,
            })
        }
    }

    render() {
        const container = {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            display: '-webkit-flex',
            WebkitFlexDirection: 'row',
            WebkitJustifyContent: 'center',
            padding: '20px',
            margin: '20px auto',
        };

        const row = {
            margin: '0px',
            padding: '20px 0',
            width: '80%',
        };

        const left = {
            position: 'absolute',
            top: '45%',
            left: '-5%',
        };

        const right = {
            position: 'absolute',
            top: '45%',
            right: '-5%',
        };

        return (
            <div className="container" style={container}>
                <div className="row" style={row}>
                    <div className="col">
                        <img src={this.state.images[this.state.counter]} className="img-fluid" alt="responsive" />
                        <i style={left} onClick={this.previousPhoto} className="fa fa-chevron-left fa-2x" aria-hidden="true" ></i>
                        <i style={right} onClick={this.nextPhoto} className="fa fa-chevron-right fa-2x" aria-hidden="true" ></i>
                    </div>
                </div>
            </div>
        )
    }
}

export default Carousel;

import React, { Component } from 'react';

class ImageGrid extends Component {
    render() {
        const row = {
            margin: '50px',
            display: '-webkit-flex',
            WebkitFlexDisplay: '-webkit-flex',
        };

        return (
            <div className="container">
                <div className="row" style={row}>
                    {this.renderImages()}
                </div>
            </div>
        );
    }

    renderImages() {
        let padding = this.props.padding;
        let values = Object.keys(this.props.data).map(item => this.props.data[item]);

        const col = {
            padding: padding,
        };

        return (
            values.map(function(element, index) {
                return (
                    <div className="col-xs-12 col-md-4" key={index} style={col}>
                        <img className="img-fluid" width="683px" height="385" src={element} alt="storyboard-artwork"/>
                    </div>
                );
            })
        );
    }
}

export default ImageGrid;

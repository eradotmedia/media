import React, { Component } from 'react';

const row = {
    margin: '50px',
}

const col = {
    padding: '0',
}

class ImageGrid extends Component {
    render() {
        return (
            <div className="container">
                <div className="row" style={row}>
                    {this.renderImages()}
                </div>
            </div>
        );
    }

    renderImages() {
        let values = Object.values(this.props.data);
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
};

export default ImageGrid;

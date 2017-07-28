import React, { Component } from 'react';
import { Link } from 'react-router';
import Listing from '../../data/listing.js';

class ListingColumn extends Component {

    render() {
        const container = {
            backgroundColor: '#ED1C7F',
            margin: '0',
            width: 'inherit',
            height: 'inherit',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
        };

        const row = {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            display: '-webkit-flex',
            WebkitFlexDirection: 'row',
            WebkitJustifyContent: 'center',
            width: '95%',
            padding: '5px',
        };

        const col = {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-around',
            alignContent: 'center',
            display: '-webkit-flex',
            WebkitFlexDirection: 'column',
            WebkitJustifyContent: 'space-around',
            WebkitAlignContent: 'center',
            margin: '10px auto',
            padding: '15px',
            color: '#fff',
            textAlign: 'left',
        };

        const paragraph = {
            fontFamily: 'Texta Heavy',
            letterSpacing: '1px',
            fontStyle: 'Italic',
            fontSize: '2.0em',
        };

        const link = {
            fontFamily: 'Agaramond Bold',
            letterSpacing: '1px',
            fontStyle: 'italic',
            color: 'white',
            fontSize: '1.8em',
            lineHeight: '1.0em',
        };

        return (
            <div className="container" style={container}>
                <div className="row" style={row}>
                    <div className="col" style={col}>
                        <h2 style={paragraph}>{Listing.text}</h2>
                        <br />
                        <Link to={Listing.link} style={link} >click here to <br />{Listing.button}</Link>
                    </div>
                </div>
            </div>
        );
    }
};

export default ListingColumn;

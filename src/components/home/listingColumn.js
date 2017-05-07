import React, { Component } from 'react';
import { Link } from 'react-router';

class ListingColumn extends Component {

    render() {
        const container = {
            backgroundColor: '#ED1C7F',
            margin: '0',
            width: 'inherit',
            height: 'inherit',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'flex-end',
            alignContent: 'flex-end',
        }

        const row = {
            padding: '25px',
        }

        const col = {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            alignContent: 'center',
            margin: '20px',
            padding: '30px',
            color: '#fff',
            textAlign: 'left',
        }

        const paragraph = {
            fontFamily: 'Texta Heavy',
            fontStyle: 'Italic',
            fontSize: '2.1em',
        }

        const link = {
            fontFamily: 'Agaramond Bold',
            fontStyle: 'italic',
            color: 'white',
            fontSize: '2.0em',
            lineHeight: '1.0em',
        }

        return (
            <div className="container" style={container}>
                <div className="row" style={row}>
                    <div className="col" style={col}>
                        <h2 style={paragraph}>This is the brief senetence that will really make you to want to work with us... and maybe also make you laugh...</h2>
                        <br />
                        <Link to="/work" style={link} >click here to <br />see our listings</Link>
                    </div>
                </div>
            </div>
        );
    }
};

export default ListingColumn;
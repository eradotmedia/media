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
            justifyContent: 'center',
        }

        const row = {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            width: '90%',
            padding: '10px',
        }

        const col = {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-around',
            alignContent: 'center',
            margin: '15px auto',
            padding: '20px',
            color: '#fff',
            textAlign: 'left',
        }

        const paragraph = {
            fontFamily: 'Texta Heavy',
            letterSpacing: '1px',
            fontStyle: 'Italic',
            fontSize: '2.0em',
        }

        const link = {
            fontFamily: 'Agaramond Bold',
            letterSpacing: '1px',
            fontStyle: 'italic',
            color: 'white',
            fontSize: '1.8em',
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

import React, { Component } from 'react';

class Contact extends Component {
    render() {
        const mainContainer = {
            margin: '0',
            padding: '0',
            backgroundColor: 'RGBA(10, 32, 55, 1.00)',
        }

        const container = {
            padding: '90px 20px',
        }

        const row = {
            padding: '20px 0px',
        }

        const col = {
            padding: '40px',
        }

        const formCol = {
            padding: '20px 18px',
        }

        const heading = {
            fontSize: '3.2em',
            fontFamily: 'Texta Heavy',
            color: '#FFFFFF',
            letterSpacing: '1px',
        }

        const input = {
            fontFamily: 'Texta Heavy',
            fontSize: '3.2em',
            backgroundColor: 'transparent',
            border: 'none',
            borderBottom: '2px solid RGBA(255, 255, 255, 0.65)',
            borderRadius: '0px',
            padding: '10px 0px',
            color: '#FFFFFF'
        }

        const button = {
            fontFamily: 'Texta Heavy',
            fontSize: '3.2em',
            backgroundColor: 'transparent',
            border: 'none',
            color: '#ED1C7F',
            padding: '0',
        }

        return (
            <div className="container-fluid" style={mainContainer}>
                <div className="container" style={container}>
                    <div className="row" style={row}>
                        <div className="col" style={col}>
                            <div className="row" style={row}>
                                <div className="col-xs-12 col-md-6 col-lg-6">
                                    <h1 style={heading}>you've gotten this far, you must want to work with us.</h1>
                                </div>
                            </div>
                            <div className="row" style={row}>
                                <div className="col">
                                    <form>
                                        <div className="form-group row" style={row}>
                                            <div className="col-xs-12 col-md-6" style={formCol}>
                                                <input style={input} type="text" className="form-control" id="formGroupExampleInput" placeholder="name"></input>
                                            </div>
                                            <div className="col-xs-12 col-md-6" style={formCol}>
                                                <input style={input} type="text" className="form-control" id="formGroupExampleInput" placeholder="subject"></input>
                                            </div>
                                            <div className="col-md-12" style={formCol}>
                                                <textarea style={input} type="text" className="form-control" id="formGroupExampleInput" placeholder="what's up?"></textarea>
                                            </div>
                                        </div>
                                        <div className="form-group row" style={row}>
                                            <div className="col">
                                                <button style={button} type="submit" className="btn btn-primary">submit.</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};

export default Contact;

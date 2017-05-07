import React from 'react';

const container = {
    margin: '70px auto',
    padding: '5px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
}

const row = {
    padding: '15px 0px',
    width: '90%',
}

const col = {
    padding: '15px',
}

const heading = {
    fontFamily: 'Texta Heavy',
    lineHeight: '1.1em',
    margin: '0',
}

const paragraph = {
    fontFamily: 'Texta',
    fontSize: '1.1em',
    lineHeight: '1.2em',
    margin: '0',
}

const Text = (props) => (
    <div className="container" style={container}>
        <div className="row" style={row}>
            <div className="col-xs-12 col-md-4" style={col}>
                <h1 style={heading}>{props.data.client} -</h1>
                <h1 style={heading}>{props.data.project}</h1>
            </div>
            <div className="col-xs-12 col-md-8" style={col}>
                <p style={paragraph}>{props.data.about}</p>
                <br/>
                <p style={paragraph}>{props.data.goal}</p>
                <br/>
                <p style={paragraph}>{props.data.approach}</p>
            </div>
        </div>
    </div>
);

export default Text;

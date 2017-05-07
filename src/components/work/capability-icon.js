import React from 'react';

const element = {
    margin: '5px',
}

const img = {
    width: '20px',
    height: '20px',
}

const CapabilityIcon = (props) => (
    <li style={element}>
        <img src={props.data.icon.white} alt="icon" style={img}/>
    </li>
);

export default CapabilityIcon

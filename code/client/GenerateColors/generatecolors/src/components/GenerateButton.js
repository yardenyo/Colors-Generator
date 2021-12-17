import React from 'react';
import './GenerateButton.css';

function GenerateButton(props) {
    return (
        <div className={'app'}>
            <div className={'color'} style={{backgroundColor: props.color}}/>
        </div>
    );
}

export default GenerateButton;
import React from 'react';
import './Title';

const Title=({text})=>{
    return (
        <div className="title-login">
            <label className="title-label">{text}</label>
        </div>
    )
}
export default Title;
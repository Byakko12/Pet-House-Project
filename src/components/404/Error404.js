import React from "react";
import Err404 from "./undraw_playful_cat_re_ac9g.svg";
import './style.css';

export default function Error404() {
    return (
        <div className="error-container">
            <img className ="img-404"src={Err404} alt="" />
            <h1 className="title-error">We know your pet is smart, and it would know that what you are looking for is not here.</h1>
            <div className="button-404">
                <button className="btn-back-404">Back</button>
            </div>
        </div>
    )

}
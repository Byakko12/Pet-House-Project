import React from 'react';
import photo from '../cards/img/71TwiBLLgFL._AC_SL1500_.jpg';
import "./style.css";
const Cards = () => {
    return(
        <div>
            <h1 className='product-title'>The best product</h1>
        <div className="card-container">
            <div className="card-product">
                <img className='card-image' src={photo} alt=""/>
                    <div className = "card-body">
                        <h3 >
                            Strap
                        </h3>
                        <p>
                            lorem ipsum dolor sit amet, consectetur adip
                        </p>
                        <div className="card-price">
                            $7.990
                        </div>
                    </div>
            </div>
            <div className="card-product">
                <img className='card-image' src={photo} alt=""/>
                    <div className = "card-body">
                        <h3 >
                            Strap
                        </h3>
                        <p>
                            lorem ipsum dolor sit amet, consectetur adip
                        </p>
                        <div className="card-price">
                            $7.990
                        </div>
                    </div>
            </div>
            <div className="card-product">
                <img className='card-image' src={photo} alt=""/>
                    <div className = "card-body">
                        <h3 >
                            Strap
                        </h3>
                        <p>
                            lorem ipsum dolor sit amet, consectetur adip
                        </p>
                        <div className="card-price">
                            $7.990
                        </div>
                    </div>
            </div>
            <div className="card-product">
                    <img className='card-image' src={photo} alt=""/>
                    <div className = "card-body">
                        
                        <h3 >
                            Strap
                        </h3>
                        <p>
                            lorem ipsum dolor sit amet, consectetur adip
                        </p>
                        <div className="card-price">
                            $7.990
                        </div>
                    </div>
            </div>


            <div className="card-product">
                <img className='card-image' src={photo} alt=""/>
                    <div className = "card-body">
                        <h3 >
                            Strap
                        </h3>
                        <p>
                            lorem ipsum dolor sit amet, consectetur adip
                        </p>
                        <div className="card-price">
                            $7.990
                        </div>
                    </div>
            </div>
            <div className="card-product">
                <img className='card-image' src={photo} alt=""/>
                    <div className = "card-body">
                        <h3 >
                            Strap
                        </h3>
                        <p>
                            lorem ipsum dolor sit amet, consectetur adip
                        </p>
                        <div className="card-price">
                            $7.990
                        </div>
                    </div>
            </div>
        </div>
        </div>
    )

}
export default Cards;
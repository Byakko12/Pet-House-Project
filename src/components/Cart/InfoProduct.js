import React from 'react'
import './info.css'

const InfoProduct = () => {
  return (
    <div className='Information-product'>
        <table className="card-info">
            <tr className="card-info-sub">
                <th className="column-left">Product</th> 
                <th className="column-center">Quantity</th> 
                <th className="column-right">Total</th>
            </tr>
            <tr>
                <td className="column">
                    <div className="info-item">
                        <div className="container-info">
                            <img className="img-responsive" href="/" alt=""></img>
                            <a className="info-product" href="/">Silla Gamer Giratoria 
                                De Escritorio Diseño Ergonómico para Hogar U Oficina | X6 - Negro 
                            </a>
                        </div>
                        <div className="info-price">
                            <span className="info-price-span">
                            $599.000
                            </span>
                            <span className="info-price-span">
                            $699.000
                            </span>
                        </div>
                    </div>

                </td> 
                <td className="column">1</td> 
                <td className="column">$599.000</td>
            </tr>
        </table>
    </div>
  )
}
export default InfoProduct;
import React from 'react';
import Image from '../cards/img/71TwiBLLgFL._AC_SL1500_.jpg';

const News = () => {
    return(
        <div className="news-container">
            <h1 className='news-container-title'>Things you can learn</h1>
            <div className='news-body'>
                <div className="news-image">
                <img className="news-image-image" src={Image} alt=""/>
                </div>
                <div className='news-info'>
                    <div className='news-news'>
                        <h3 className="news-title">Sobre alimentación</h3>
                        <p className="information">Los boletines de prensa ofrecen un modo fabuloso de informar a los clientes acerca de nuestros nuevos productos y servicios, eventos, premios y mucho más.</p>

                    </div>
                    <div className='news-news'>
                        <h3 className="news-title">Sobre cuidado</h3>
                        <p className="information">Los boletines de prensa ofrecen un modo fabuloso de informar a los clientes acerca de nuestros nuevos productos y servicios, eventos, premios y mucho más.</p>
                        
                    </div>
                    <div className='news-news'>
                        <h3 className="news-title">Promociones</h3>
                        <p className="information">Los boletines de prensa ofrecen un modo fabuloso de informar a los clientes acerca de nuestros nuevos productos y servicios, eventos, premios y mucho más.</p>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}
export default News;
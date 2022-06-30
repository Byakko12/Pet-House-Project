import React, {useRef, useEffect} from 'react';
import imgFirst from './img/1.png';
import imgSecond from './img/2.png';
import imgThird from './img/3.png';
import imgFourth from './img/4.png';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';


const Slide = () => {
    const slideshow = useRef(null);
    const next = () => {
        if(slideshow.current.children.length > 0){
            console.log('siguiente');
            
            const firstElement = slideshow.current.children[0];
            slideshow.current.style.transition = '300ms ease-out all';
            slideshow.current.style.transform = 'translateX(-1366px)';

            const transition = () => { 
                slideshow.current.style.transition = 'none';
                slideshow.current.style.transform = 'translateX(0)';

                slideshow.current.appendChild(firstElement);
                slideshow.current.removeEventListener('transitionend', transition)
            }
            
            slideshow.current.addEventListener('transitionend', transition);
        }
    }
    const previous = () => {
        console.log('Previous');
        if (slideshow.current.children.length > 0) {
            const index = slideshow.current.children.length - 1;
            const endElement = slideshow.current.children[index];
            slideshow.current.insertBefore(endElement, slideshow.current.firstChild);
            slideshow.current.style.transition = 'none';
            slideshow.current.style.transform = 'translateX(-1366px)';

            setTimeout(() => {
                slideshow.current.style.transition = '300ms ease-out all';
                slideshow.current.style.transform = 'translateX(0)';
            }, 30)
        }
    }
    
    useEffect(() =>{
        setInterval(() =>{
            next();
        }, 3000);
    }, [])


    return (
        <div className = "principal-container">
            <div className="container-slide" ref={slideshow}>
                <div className ="slide">
                    <a href="/">
                        <img src={imgFirst} alt=""/>
                    </a>
                    <div className ="description-slide">
                        <p className = "description-image">
                        Care
                        </p>
                        <div className = "buy-container">
                            <button className = "btn-buy">
                            Buy
                            </button>
                        </div>
                    </div>
                </div>
                <div className ="slide">
                    <a href="/">
                        <img src={imgSecond} alt=""/>
                    </a>
                    <div className ="description-slide">
                        <p className = "description-image">
                        Accesories
                        </p>
                        <button className = "btn-buy">
                        Buy
                        </button>
                    </div>
                </div>
                <div className ="slide">
                    <a href="/">
                        <img src={imgThird} alt=""/>
                    </a>
                    <div className ="description-slide">
                        <p className = "description-image">
                        Toys
                        </p>
                        <button className = "btn-buy">
                        Buy
                        </button>
                    </div>
                </div>
                <div className ="slide">
                    <a href="/">
                        <img src={imgFourth} alt=""/>
                    </a>
                    <div  className ="description-slide">
                        <p className = "description-image">
                        Food
                        </p>
                        <div className = "buy-container">
                            <button className = "btn-buy">
                            Buy
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="controls">
                    <button onClick={previous} className = "btn-left">
                        <ArrowBackIosNewIcon/>
                    </button>
                    <button onClick={next} className = "btn-right">
                        <ArrowForwardIosIcon/>
                    </button>
            </div>
        </div>
    )
}
export default Slide;
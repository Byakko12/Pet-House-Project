import React from 'react';
import Navbar from '../Navbar/Navbar';
import Slide from '../Slide/Slide';
import Card from '../cards/Cards';
import News from '../News/News';
import Footer from '../Footer/Footer';
const Home = () => {
    return(
            <main>
                <Navbar/>
                <Slide/>
                <Card/>
                <News/>
                <Footer/>    
            </main>

    )
}
export default Home;
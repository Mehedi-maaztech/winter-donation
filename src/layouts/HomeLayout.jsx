import React from 'react';
import Header from '../component/Header';
import Footer from '../component/Footer';
import Slider from '../component/Slider';
import About from '../component/About';
import Howitworks from '../component/Howitworks';

const HomeLayout = () => {
    return (
        <div className=''>
            <header className='max-w-7xl mx-auto'>
                <Header></Header>
            </header>
            <section>
                <Slider></Slider>
                <About></About>
                <Howitworks></Howitworks>
            </section>
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default HomeLayout;
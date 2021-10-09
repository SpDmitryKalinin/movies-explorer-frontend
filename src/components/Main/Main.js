import React from 'react';
import Hero from '../Hero/Hero'
import About from '../About/About'
import Technologies from '../Technologies/Technologies'
import Student from '../Student/Student';
import Portfolio from '../Portfolio/Portfolio';
import Footer from '../Footer/Footer';
import Preloader from '../Preloader/Preloader';

export default class Header extends React.Component{
    render(){
        return (
            <main>
                <Hero/>
                <About/>
                <Technologies/>
                <Student/>
                <Portfolio/>
                <Footer/>
                <Preloader/>
            </main>
        )
    }
}
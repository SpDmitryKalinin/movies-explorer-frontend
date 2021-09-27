import React from 'react';

//components
import Header from './Header'
import Hero from './Hero'
import About from './About'
import Technologies from './Technologies'
import Student from './Student';

export default class App extends React.Component{
    render(){
        return (
            <section className="page">
                <Header/>
                <Hero/>
                <About/>
                <Technologies/>
                <Student/>
            </section>
        )
    }
}
import React, { Component } from 'react';
import HeroBG from '../assets/heropic.png';
import Health from '../assets/health.png';

import OneQuote from '../components/OneQuote';
import Footer from './Footer';

class Hero extends Component {
    render() {
        return (
            <div>
                <img src={HeroBG} alt="background" style={{
                    width: '100%',
                    height: '50%',
                    position: 'relative',
                    top: 0,
                    zIndex: 1
                }} />

                <div className="section-two" style={{
                    display: 'flex',
                    flexDirection: 'row',
                    backgroundColor: '#19143d',
                    width: '100%', 
                    height: '400px'
                }}>
                    <img src={Health} alt="background" style={{margin: '50px 0 0 200px'}}></img>

                    <div style={{margin: '40px 0 0 15%', width: '35%'}}>
                        <h1 style={{fontWeight: '500', color: '#fff', fontSize: '50px'}}>Student Anon</h1>
                        <p style={{fontWeight: '500', color: '#fff', fontSize: '20px'}}>What are you waiting for? Release your stress and problems while reading motivational quotes, listening to a calming podcast, and anticipating some of your favorite moments!</p>
                    </div>
                </div>
                <OneQuote />
                <Footer />
            </div>
        );
    }
}

export default Hero;
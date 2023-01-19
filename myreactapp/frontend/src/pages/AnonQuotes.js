import React from 'react';
import Quotes from '../components/Quotes';
import Quote from '../assets/quote.png';
import Footer from './Footer';


function AnonQuotes() {
    return (
        <div style={{
            backgroundColor: '#ede2f1',
            width: '100vw',
            height: '110vh',
        }}>
            <div style={{
                        width: '100vw', 
                        height: '30%', 
                        backgroundColor: '#643874',
                        display: 'flex',
                        flexDirection: 'row',
                        gap: '30%',
                        overflowX: 'hidden'
                    }}> 
                <div>
                    <h1 style={{color: "#fff", padding: '50px 0 0 200px', fontSize: '70px'}}>Anon Quotes</h1>
                    <p style={{
                        textAlign: 'center',
                        color: '#fff',
                        opacity: '0.5'
                    }}>Reload page to get new quotes</p>
                </div>
                <img src={Quote} style={{width: '350px', height: '200px', padding: '50px 0 0 0'}} />
            </div>
            <Quotes />
            <Footer />
        </div>
    );
}

export default AnonQuotes;
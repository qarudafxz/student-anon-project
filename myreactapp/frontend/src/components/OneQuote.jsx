import React from 'react';
import QUOTES from '../data/quotes';

let chosenQuote = [];

const OneQuote = () => {
    const randomQuote = () => {
        let random = Math.floor(Math.random() * QUOTES.length);
        chosenQuote.push(QUOTES[random]);
    }
    return (
        <div>
            {chosenQuote.map(quote => {
                return (
                        <div style={{
                            width: '100vw', 
                            height: '30%', 
                            backgroundColor: '#643874',
                            display: 'flex',
                            flexDirection: 'row',
                            gap: '30%',
                            overflowX: 'hidden'
                        }}>
                            <p style={{
                                fontSize: '25px',
                                padding: '30px 0 0 0'
                            }}>{quote.quote}</p>
                            <h1 style={{
                                fontSize: '25px',
                            }}>{quote.author}</h1>
                        </div>
                )
            })}
        </div>
    );
}

export default OneQuote;
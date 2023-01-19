import React from 'react';
import QUOTES from '../data/quotes';

let chosenQuote = [];

const Quotes = () => {
    const getQuotes = () => {
        for(let i = 0; i < 3; i++) {
            let randomQuote = Math.floor(Math.random() * QUOTES.length);
            chosenQuote.push(QUOTES[randomQuote]);
        }
        console.log(chosenQuote);
    }

    getQuotes();

    return (
        <div className="quote" style={{
            textAlign: 'center',
            fontSize: '20px',
            padding: '70px'
        }}>
            <div>
                {
                    chosenQuote.map(QUOTE => {
                        return (
                            <div style={{
                                width: '50%', 
                                height: '200px',
                                backgroundColor: '#fff',
                                textAlign: 'center',
                                borderRadius: '10px',
                                padding: '0 20px',
                                justifyContent: 'center',
                                margin: '0 auto'
                            }}>
                                <p style={{
                                    fontSize: '25px',
                                    padding: '30px 0 0 0'
                                }}>{QUOTE.quote}</p>
                                <h1 style={{
                                    fontSize: '25px',
                                }}>- {QUOTE.author}</h1>
                            </div>
                        )
                    })
                }
                </div>
        </div>
    );
}

export default Quotes;
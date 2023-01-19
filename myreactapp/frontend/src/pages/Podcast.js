import React from 'react';
import Footer from './Footer';
import podcastImg from '../assets/podcast.png';
import Podcasts from '../components/Podcasts';

function Podcast() {
    return (
        <div style={{
            width: '98vw',
            height: '100vh',
            overflowX: "hidden",
        }}>
            <div style={{
                width: '100vw',
                height: '50vh',
                display: 'flex',
                flexDirection: 'row',
                gap: '15%',
                backgroundColor: '#2f0370',
            }}>
                <div style={{
                    color: '#fff',
                    margin: '0 0 0 20%',
                    padding: '5% 0 0 0'
                }}>
                    <h1 style={{
                        fontSize: '100px',
                        margin: 0,
                    }}>Podcasts</h1>
                    <h4 style={{
                        textAlign: 'center',
                        fontSize: '30px',
                    }}>Just listen and relax</h4>
                    <p style={{
                        textAlign: 'center',
                        opacity: '0.5'
                    }}>( Reload page for new podcasts )</p>
                </div>
                <img src={podcastImg} style={{width: '450px', height: '400px', paddingTop: '50px'}} />
            </div>
            <Podcasts />
            <Footer />
        </div>
    );
}

export default Podcast;
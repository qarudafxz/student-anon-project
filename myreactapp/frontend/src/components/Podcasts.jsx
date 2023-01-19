import React from 'react';
import URLS from '../data/podcastUrls';

let chosenPodcast = [];

const Podcasts = () => {
    const randomPodcast = () => {
        let maxPodcastRender = 3;
        for(let i = 0; i < maxPodcastRender; i++) {
            let random = Math.floor(Math.random() * URLS.length);
            chosenPodcast.push(URLS[random]);
        }
    }

    randomPodcast();

    return (
        <div>
             {
                    chosenPodcast.map(chosenCast => {
                        return (
                            <iframe src={chosenCast.url} style={{
                                margin: '0 auto',
                                width: '58%',
                                height: '352px',
                                frameborder: '0',
                                allowFullScreen: false,
                                allowAutoPlay: true,
                                allow: "autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture",
                                loading: "lazy",
                                position: "relative",
                                left: "20%",
                                marginTop: "50px",
                                boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
                                border: "none",
                                backgroundColor: "none"
                            }}>Hello</iframe>
                        )
                    })
                }
        </div>
    );
}

export default Podcasts;
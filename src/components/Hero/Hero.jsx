import React from 'react';
import MainVideo from "../../assets/video.mp4";
import "./Hero.css";

const Hero = () => {
    return (
        <div className="hero" id="platform">
            <video autoPlay loop muted id="video">
                <source src={MainVideo} type="video/mp4" />
            </video>
            <div className="hero-text">
                <h1>Decentralized</h1>
                <h1><span className="blue">Trading</span> Protocol</h1>
                <p>Guaranteed liquidity trading for millions of users and top Ethereum applications.</p>
                <div className="btn-group">
                    <button className="btn">
                        <a href="#developers">
                            Use Defi
                        </a>
                    </button>
                    <button className="btn btn-outline">
                        <a href="#community">
                            FAQ
                        </a>
                    </button>
                </div>
            </div>
            <div className="bottom-text">
                <h2>Total Volume Secured: $40B+</h2>
            </div>
        </div>
    )
};

export default Hero;
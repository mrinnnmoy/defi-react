import React from 'react';
import "./Footer.css";

const Footer = () => {
    return (
        <div className="footer" id="about">
            <div className="container">
                <div className="col">
                    <h4>Platform</h4>
                    <p>Home</p>
                    <p>Blog</p>
                    <p>Careers</p>
                    <p>Legal & Privacy</p>
                </div>
                <div className="col">
                    <h4>Developers</h4>
                    <p>API</p>
                    <p>Swap</p>
                    <p>Token</p>
                    <p>Staking</p>
                </div>
                <div className="col">
                    <h4>Governance</h4>
                    <p>App</p>
                    <p>Defi</p>
                    <p>Token</p>
                    <p>Analytics</p>
                </div>
                <div className="col">
                    <h4>Community</h4>
                    <p>Events</p>
                    <p>Protocol</p>
                    <p>Workshops</p>
                    <p>Hackathons</p>
                </div>
                <div className="col">
                    <h4>About</h4>
                    <p>Team</p>
                    <p>Founders</p>
                    <p>Investors</p>
                    <p>Economics</p>
                </div>
                <h2 className="last-text">Thanks for Visiting !!!</h2>
            </div>
        </div>
    )
};

export default Footer;
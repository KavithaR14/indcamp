import React from 'react';
import './Objectives.css'; // Import the CSS file for styling
import oneplanet from '../assets/oneplanet.png'; // Replace with your logo paths
import WNC from '../assets/WCN.png';
import EPS from '../assets/EPS.png';
import freforests from '../assets/freeforests.png';
import savannacompany from '../assets/savannacompany.png';

const Objectives = () => {
    return (
        <div className="objectives-container">
            <h2 className="objectives-title">Objectives</h2>
            <div className="objectives-list">
                <div className="objective-item">
                    <h3 className="objective-number" style={{ color: '#2E5031' }}>01</h3>
                    <p className="objective-text">
                        To Empower Women through formation of Self Help Group and promote
                        credit management and micro enterprises for the economic development
                        of rural women.
                    </p>
                </div>
                <div className="objective-item">
                    <h3 className="objective-number" style={{ color: '#93C572' }}>02</h3>
                    <p className="objective-text">
                        To create awareness among the community through trainings and seminars
                        and campaigns with the guidance of SIRD-PR-TN.
                    </p>
                </div>
                <div className="objective-item">
                    <h3 className="objective-number" style={{ color: '#4091FF' }}>03</h3>
                    <p className="objective-text">
                        To help and facilitate the rural community to get government-sponsored
                        development programme and help to lead sustainable livelihood.
                    </p>
                </div>
            </div>

            {/* Partners Section */}
            <div className="partners-section">
                <h3 className="partners-heading">PARTNERS</h3>
                <p className="partners-paragraph">
                    I'm a paragraph. Click here to add your own text and edit me. It’s easy. <br />
                    Just click “Edit Text” or double click me to add your own content and <br />
                    make changes to the font. Feel free to drag and drop me anywhere you <br />
                    like on your page. I’m a great place for you to tell a story and let your <br />
                    users know a little more about you.
                </p>

                {/* Logos Section */}
                <div className="partners-logos">
                    <img src={oneplanet} alt="oneplanet.png" className="partners-image" />
                    <img src={WNC} alt="WNC.png" className="partners-image" />
                    <img src={EPS} alt="EPS.png" className="partners-image" />
                    <img src={freforests} alt="freforests.png" className="partners-image" />
                    <img src={savannacompany} alt="savannacompany.png" className="partners-image" />
                </div>
            </div>
        </div>
    );
};

export default Objectives;

import React from 'react';
import './Footer.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faGooglePlus, faTwitter } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <footer className="d-flex justify-content-center align-items-center">
            <div className="container">
                <div className="row w-100">
                    <div className="col-md-3">
                        <h5>Emergency Dental Care</h5>
                        <h5>Check Up</h5>
                        <h5>Treatment of Personal Diseases</h5>
                        <h5>Tooth Extraction</h5>
                        <h5>Check Up</h5>
                    </div>
                    <div className="col-md-3">
                        <h4 className="color-primary mb-5">Services</h4>
                        <h5>Emergency Dental Care</h5>
                        <h5>Check Up</h5>
                        <h5>Treatment of Personal Diseases</h5>
                        <h5>Check Up</h5>
                        <h5>Treatment of Personal Diseases</h5>
                        <h5>Tooth Extraction</h5>
                    </div>
                    <div className="col-md-3">
                        <h4 className="color-primary mb-5">Oral Health</h4>
                        <h5>Emergency Dental Care</h5>
                        <h5>Check Up</h5>
                        <h5>Treatment of Personal Diseases</h5>
                        <h5>Check Up</h5>
                        <h5>Treatment of Personal Diseases</h5>
                        <h5>Tooth Extraction</h5>
                    </div>
                    <div className="col-md-3">
                        <h4 className="color-primary mb-5">Our Address</h4>
                        <h5>New York - 101010 Hudson</h5>
                        <h5>Yards</h5>
                        <div className="social-icon my-4">
                            <FontAwesomeIcon className="me-3" icon={faFacebook} />
                            <FontAwesomeIcon className="me-3" icon={faGooglePlus} />
                            <FontAwesomeIcon className="me-3" icon={faTwitter} />
                        </div>
                        <h5>Call Now</h5>
                        <button className="btn btn-primary">+425267896</button>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
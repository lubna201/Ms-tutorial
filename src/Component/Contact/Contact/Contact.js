import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faGooglePlusG } from '@fortawesome/free-brands-svg-icons';
import './Contact.css';
import contact from '../../../images/contact.jpg';
import ContactSend from '../ContactSend/ContactSend';

const Contact = () => {
    return (
        <div className="container mt-5 pt-5">
            <div class="row pt-5 d-flex align-items-center">
                <div class="col-md-5">
                    <h2 className="fw-bold mb-4">Address</h2>
                    <h3>Chittagong - 2047</h3>
                    <h3>Dhaka - 2042</h3>
                    <h3>Rajshahi - 2043</h3>
                    <div className="mt-5">
                        <h2 className="fw-bold pb-3">Call now</h2>
                        <button className="btn btn-info text-white fw-bold fs-5 p-2">+8801234567789</button>
                        <button className="btn btn-info text-white fw-bold ms-1 fs-5 p-2">+8801234567789</button>
                    </div>
                    <ul className="social-media list-inline mt-5">
                            <li className="list-inline-item"><a href="//facebook.com"><FontAwesomeIcon className="icon1 active-icon1" icon={faFacebookF} /></a></li>
                            <li className="list-inline-item"><a href="//google.com"><FontAwesomeIcon className="icon1" icon={faGooglePlusG} /></a></li>
                            <li className="list-inline-item"><a href="//instagram.com"><FontAwesomeIcon className="icon1" icon={faInstagram} /></a></li>
                        </ul>
                </div>
                <div class="col-md-7">
                    <img src={contact} alt="" srcSet="" style={{ width: "100%" }} />
                </div>
            </div>
            <ContactSend></ContactSend>
        </div>
    );
};

export default Contact;
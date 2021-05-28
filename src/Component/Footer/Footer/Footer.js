import React from 'react';
import './Footer.css';
import FooterCol from '../FooterCol/FooterCol';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faGooglePlusG } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    const noNamed = [
        {name: "Laravel" , link: "#"},
        {name: "Java" , link: "#"},
        {name: "Redux" , link: "#"},
        {name: "Artificial intelligence" , link: "#"},
        {name: "Machine learning" , link: "#"}
    ]
    const ourAddress = [
        {name: "Chittagong" , link: "//google.com/map"},
        {name: "Dhaka" , link: "//google.com/map"},
        {name: "Rajshahi" , link: "//google.com/map"},
    ]
    const courses = [
        {name: "React" , link: "#"},
        {name: "Php" , link: "#"},
        {name: "MySQL" , link: "#"},
        {name: "HTML CSS" , link: "#"},
        {name: "Data Structure" , link: "#"},
    ]
    return (
        <footer className="footer-area clear-both mt-5 pt-5">
            <div className="container pt-5">
                <div className="row py-5 d-flex justify-content-center">
                    <FooterCol key={1} menuTitle={"Paid Courses"} menuItems={noNamed}/>
                    <FooterCol key={2} menuTitle="Free Courses" menuItems={courses}/>
                    <FooterCol key={4} menuTitle="Our Address" menuItems={ourAddress}> 
                        <ul className="social-media list-inline">
                            <li className="list-inline-item"><a href="//facebook.com"><FontAwesomeIcon className="icon active-icon" icon={faFacebookF} /></a></li>
                            <li className="list-inline-item"><a href="//google.com"><FontAwesomeIcon className="icon" icon={faGooglePlusG} /></a></li>
                            <li className="list-inline-item"><a href="//instagram.com"><FontAwesomeIcon className="icon" icon={faInstagram} /></a></li>
                        </ul>
                    </FooterCol>
                    <h4 className="text-info pb-3 pt-3 d-flex justify-content-center">Call now</h4>
                    <div className="mt-2 d-flex justify-content-center">
                           
                            <button className="btn btn-light">+8801234567789</button>
                            <button className="btn btn-light ms-3">+8801234567789</button>
                        </div>
                </div>
                <div className="copyRight text-center text-info py-3">
                    <h5>Copyright @{(new Date()).getFullYear()} All Rights Reserved</h5>
                </div>
            </div>
        </footer>
        
    );
};

export default Footer;
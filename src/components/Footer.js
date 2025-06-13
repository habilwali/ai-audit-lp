import React from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaTwitter, FaLinkedinIn, FaGithub, FaArrowRight } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
    const handleNewsletterSubmit = (e) => {
        e.preventDefault();
        // Handle newsletter subscription
    };

    return (
        <footer className="footer">
            <div className="footer-pattern"></div>
            <div className="footer-container">
                <div className="footer-grid">
                    <div className="footer-section">
                        <div className="footer-logo">
                            <img src="/logo.png" alt="AI Audit Logo" />
                        </div>
                        <div className="contact-info">
                            <p>
                                <FaPhone />
                                +1 (555) 123-4567
                            </p>
                            <p>
                                <FaEnvelope />
                                contact@aiaudit.com
                            </p>
                            <p>
                                <FaMapMarkerAlt />
                                123 AI Street, Tech Valley, CA 94025
                            </p>
                        </div>
                        <div className="social-media">
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                                <FaTwitter />
                            </a>
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                                <FaLinkedinIn />
                            </a>
                            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                                <FaGithub />
                            </a>
                        </div>
                    </div>

                    <div className="footer-section">
                        <h3>Quick Links</h3>
                        <ul className="footer-links">
                            <li><a href="#home">Home</a></li>
                            <li><a href="#about">About Us</a></li>
                            <li><a href="#services">Services</a></li>
                            <li><a href="#case-studies">Case Studies</a></li>
                            <li><a href="#contact">Contact</a></li>
                        </ul>
                    </div>

                    <div className="footer-section">
                        <h3>Services</h3>
                        <ul className="footer-links">
                            <li><a href="#ai-audit">AI Readiness Audit</a></li>
                            <li><a href="#process-automation">Process Automation</a></li>
                            <li><a href="#data-analytics">Data Analytics</a></li>
                            <li><a href="#ml-solutions">ML Solutions</a></li>
                            <li><a href="#consulting">AI Consulting</a></li>
                        </ul>
                    </div>

                    <div className="footer-section">
                        <h3>Newsletter</h3>
                        <p>Subscribe to our newsletter for the latest AI insights and updates.</p>
                        <form className="newsletter-form" onSubmit={handleNewsletterSubmit}>
                            <input 
                                type="email" 
                                placeholder="Enter your email"
                                aria-label="Email for newsletter"
                            />
                            <button type="submit">
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} AI Audit. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer; 
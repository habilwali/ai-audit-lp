import React from 'react';
import './WhyUs.css';
import {
    FaUserTie,
    FaChartLine,
    FaCogs,
    FaRocket,
    FaCheckCircle,
    FaLightbulb,
    FaHandshake,
    FaShieldAlt,
    FaClock,
    FaChartBar,
    FaBrain,
    FaUsers
} from 'react-icons/fa';

const WhyUs = () => {
    return (
        <section id="why-us" className="why-us">
            <div className="container">
                <div className="why-us-header">
                    <h2>Why Choose Us?</h2>
                    <p>
                        We combine deep expertise, exceptional value, and actionable strategies 
                        to deliver comprehensive AI audits that drive real business transformation.
                    </p>
                </div>
                <div className="reasons">
                    <div className="reason">
                        <div className="reason-icon">
                            <FaUserTie />
                        </div>
                        <h3>Expert Team</h3>
                        <p>Our seasoned professionals bring decades of combined experience in AI, machine learning, and business strategy.</p>
                        <ul className="reason-features">
                            <li className="reason-feature">
                                <FaBrain />
                                AI/ML Specialists
                            </li>
                            <li className="reason-feature">
                                <FaUsers />
                                Business Analysts
                            </li>
                            <li className="reason-feature">
                                <FaChartBar />
                                Data Scientists
                            </li>
                        </ul>
                    </div>

                    <div className="reason">
                        <div className="reason-icon">
                            <FaRocket />
                        </div>
                        <h3>Proven Methodology</h3>
                        <p>Our structured approach ensures comprehensive analysis and actionable recommendations.</p>
                        <ul className="reason-features">
                            <li className="reason-feature">
                                <FaCheckCircle />
                                Systematic Evaluation
                            </li>
                            <li className="reason-feature">
                                <FaCogs />
                                Custom Framework
                            </li>
                            <li className="reason-feature">
                                <FaChartLine />
                                Data-Driven Insights
                            </li>
                        </ul>
                    </div>

                    <div className="reason">
                        <div className="reason-icon">
                            <FaHandshake />
                        </div>
                        <h3>Client-Focused</h3>
                        <p>We prioritize your success with personalized attention and ongoing support.</p>
                        <ul className="reason-features">
                            <li className="reason-feature">
                                <FaLightbulb />
                                Tailored Solutions
                            </li>
                            <li className="reason-feature">
                                <FaShieldAlt />
                                Confidential Process
                            </li>
                            <li className="reason-feature">
                                <FaClock />
                                Timely Delivery
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyUs; 
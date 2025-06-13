import React from 'react';
import './HowItWorks.css';
import {
    FaComments,
    FaChartBar,
    FaFileAlt,
    FaCalendarCheck,
    FaLaptopCode,
    FaChartLine,
    FaClipboardCheck,
    FaUserCog,
    FaRocket
} from 'react-icons/fa';

const HowItWorks = () => {
    return (
        <section id="how-it-works" className="how-it-works">
            <div className="container">
                <div className="how-it-works-header">
                    <h2>How It Works</h2>
                    <p>
                        Our streamlined three-step process delivers actionable AI insights without the complexity. 
                        We've optimized every step to maximize value while minimizing your time investment, 
                        ensuring you get a comprehensive analysis and clear implementation roadmap within days, not months.
                    </p>
                </div>
                <div className="steps">
                    <div className="step">
                        <div className="step-number">1</div>
                        <div className="timeline-dot"></div>
                        <div className="step-icon">
                            <FaComments />
                        </div>
                        <h3>Initial Consultation</h3>
                        <p>A focused discovery session to understand your business objectives and current processes.</p>
                        <ul className="step-features">
                            <li className="step-feature">
                                <FaCalendarCheck />
                                30-minute strategic call
                            </li>
                            <li className="step-feature">
                                <FaClipboardCheck />
                                Business goals assessment
                            </li>
                            <li className="step-feature">
                                <FaUserCog />
                                Process overview
                            </li>
                        </ul>
                    </div>

                    <div className="step">
                        <div className="step-number">2</div>
                        <div className="timeline-dot"></div>
                        <div className="step-icon">
                            <FaChartBar />
                        </div>
                        <h3>Deep Analysis</h3>
                        <p>Comprehensive evaluation of your systems, data, and processes to identify AI opportunities.</p>
                        <ul className="step-features">
                            <li className="step-feature">
                                <FaLaptopCode />
                                Technical assessment
                            </li>
                            <li className="step-feature">
                                <FaChartLine />
                                Opportunity mapping
                            </li>
                            <li className="step-feature">
                                <FaClipboardCheck />
                                ROI calculation
                            </li>
                        </ul>
                    </div>

                    <div className="step">
                        <div className="step-number">3</div>
                        <div className="timeline-dot"></div>
                        <div className="step-icon">
                            <FaFileAlt />
                        </div>
                        <h3>Strategic Report</h3>
                        <p>Detailed findings and recommendations delivered in a clear, actionable format.</p>
                        <ul className="step-features">
                            <li className="step-feature">
                                <FaRocket />
                                Implementation roadmap
                            </li>
                            <li className="step-feature">
                                <FaChartBar />
                                Priority recommendations
                            </li>
                            <li className="step-feature">
                                <FaUserCog />
                                Resource planning
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HowItWorks; 
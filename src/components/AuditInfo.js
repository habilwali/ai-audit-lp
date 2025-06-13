import React from 'react';
import './AuditInfo.css';
import { 
    FaChartLine, 
    FaCheckCircle, 
    FaProjectDiagram, 
    FaRobot, 
    FaDatabase, 
    FaCogs,
    FaChartBar,
    FaUserCog,
    FaLightbulb
} from 'react-icons/fa';

const AuditInfo = () => {
    return (
        <section id="audit-info" className="audit-info">
            <div className="container">
                <div className="section-header">
                    <h2>What is an AI Audit?</h2>
                    <p>
                        Our comprehensive AI audit evaluates your business processes, data infrastructure, 
                        and operational workflows to uncover transformative AI opportunities. We analyze your 
                        organization's readiness and provide actionable recommendations for implementing AI solutions 
                        that drive real business value.
                    </p>
                </div>
                <div className="row">
                    <div className="col">
                        <div className="card-icon"><FaChartLine /></div>
                        <h3>Discover Opportunities</h3>
                        <p>We conduct a deep analysis of your business operations to identify high-impact areas for AI implementation.</p>
                        <ul className="feature-list">
                            <li className="feature-item">
                                <FaLightbulb />
                                Process Automation Potential
                            </li>
                            <li className="feature-item">
                                <FaChartBar />
                                Efficiency Improvement Areas
                            </li>
                            <li className="feature-item">
                                <FaCogs />
                                Innovation Opportunities
                            </li>
                        </ul>
                    </div>
                    <div className="col">
                        <div className="card-icon"><FaCheckCircle /></div>
                        <h3>Assess Readiness</h3>
                        <p>We evaluate your technical infrastructure and organizational readiness for AI adoption.</p>
                        <ul className="feature-list">
                            <li className="feature-item">
                                <FaDatabase />
                                Data Infrastructure Review
                            </li>
                            <li className="feature-item">
                                <FaUserCog />
                                Team Capability Assessment
                            </li>
                            <li className="feature-item">
                                <FaRobot />
                                Technology Stack Analysis
                            </li>
                        </ul>
                    </div>
                    <div className="col">
                        <div className="card-icon"><FaProjectDiagram /></div>
                        <h3>Strategic Roadmap</h3>
                        <p>We deliver a comprehensive implementation plan tailored to your business objectives.</p>
                        <ul className="feature-list">
                            <li className="feature-item">
                                <FaChartLine />
                                Prioritized Recommendations
                            </li>
                            <li className="feature-item">
                                <FaCogs />
                                Implementation Timeline
                            </li>
                            <li className="feature-item">
                                <FaCheckCircle />
                                ROI Projections
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AuditInfo; 
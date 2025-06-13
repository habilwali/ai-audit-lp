import React from 'react';
import './Hero.css';
import { FaCheckCircle } from 'react-icons/fa';

const Hero = () => {
  const scrollToContact = (e) => {
    e.preventDefault();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero">
      <div className="container">
        <div className="hero-container">
          <div className="hero-content">
            <div className="hero-badges">
              <span className="tech-badge">AI Strategy</span>
              <span className="tech-badge">Process Optimization</span>
              <span className="tech-badge">Digital Transformation</span>
            </div>
            <h1 className="hero-title">Transform Your Business with AI</h1>
            <p className="hero-subtitle">
              Get a comprehensive AI audit to identify opportunities for automation, optimization, and innovation in your business operations.
            </p>
            <div className="hero-features">
              <div className="feature">
                <FaCheckCircle className="feature-icon" />
                <span>Custom AI Solutions</span>
              </div>
              <div className="feature">
                <FaCheckCircle className="feature-icon" />
                <span>Process Automation</span>
              </div>
              <div className="feature">
                <FaCheckCircle className="feature-icon" />
                <span>Data-Driven Insights</span>
              </div>
            </div>
            <div className="hero-cta">
              <a href="#contact" className="btn btn-primary" onClick={scrollToContact}>
                Get Your Free AI Audit
              </a>
              <p className="cta-note">No credit card required • Free consultation</p>
            </div>
          </div>
          <div className="hero-image">
            <div className="ai-visualization">
              <div className="glowing-orb">
                <div className="sparkles">
                  {[...Array(20)].map((_, i) => (
                    <div
                      key={i}
                      className="sparkle"
                      style={{
                        top: `${Math.random() * 100}%`,
                        left: `${Math.random() * 100}%`,
                        animationDelay: `${Math.random() * 2}s`
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 
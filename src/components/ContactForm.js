import React, { useState, useEffect } from 'react';
import { FaCheckCircle, FaExclamationCircle } from 'react-icons/fa';
import './ContactForm.css';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        email: '',
        phone: '',
        company: ''
    });

    const [errors, setErrors] = useState({});
    const [showSuccess, setShowSuccess] = useState(false);
    const [showError, setShowError] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    useEffect(() => {
        let successTimeout;
        let errorTimeout;

        if (showSuccess) {
            successTimeout = setTimeout(() => setShowSuccess(false), 5000);
        }
        if (showError) {
            errorTimeout = setTimeout(() => setShowError(false), 5000);
        }

        return () => {
            clearTimeout(successTimeout);
            clearTimeout(errorTimeout);
        };
    }, [showSuccess, showError]);

    const validateForm = () => {
        const newErrors = {};
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const phoneRegex = /^\+?[\d\s-()]{10,}$/;

        if (!formData.firstName.trim()) {
            newErrors.firstName = 'First name is required';
        }

        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!emailRegex.test(formData.email)) {
            newErrors.email = 'Please enter a valid email address';
        }

        if (formData.phone && !phoneRegex.test(formData.phone)) {
            newErrors.phone = 'Please enter a valid phone number';
        }

        if (!formData.company.trim()) {
            newErrors.company = 'Company name is required';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
        // Clear error when user starts typing
        if (errors[name]) {
            setErrors(prev => ({
                ...prev,
                [name]: ''
            }));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (validateForm()) {
            setIsSubmitting(true);
            try {
                // Simulate API call
                await new Promise(resolve => setTimeout(resolve, 1500));
                setShowSuccess(true);
                setFormData({
                    firstName: '',
                    email: '',
                    phone: '',
                    company: ''
                });
            } catch (error) {
                setShowError(true);
            } finally {
                setIsSubmitting(false);
            }
        }
    };

    return (
        <section id="contact" className="contact-form-section">
            <div className="container">
                <form className="contact-form" onSubmit={handleSubmit}>
                    <div className="form-header">
                        <h2 className="form-title">Get Your Free AI Audit</h2>
                        <p className="form-subtitle">
                            Fill out the form below and we'll analyze your business processes to identify AI opportunities tailored to your needs.
                        </p>
                    </div>
                    
                    <div className="form-grid">
                        <div className="form-group">
                            <label htmlFor="firstName">Name*</label>
                            <input
                                type="text"
                                id="firstName"
                                name="firstName"
                                value={formData.firstName}
                                onChange={handleChange}
                                placeholder="Enter your name"
                            />
                            {errors.firstName && <div className="error">{errors.firstName}</div>}
                        </div>

                        <div className="form-group">
                            <label htmlFor="email">Email Address*</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Enter your email address"
                            />
                            {errors.email && <div className="error">{errors.email}</div>}
                        </div>

                        <div className="form-group">
                            <label htmlFor="phone">Phone Number</label>
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                placeholder="Enter your phone number"
                            />
                            {errors.phone && <div className="error">{errors.phone}</div>}
                        </div>

                        <div className="form-group">
                            <label htmlFor="company">Company Name*</label>
                            <input
                                type="text"
                                id="company"
                                name="company"
                                value={formData.company}
                                onChange={handleChange}
                                placeholder="Enter your company name"
                            />
                            {errors.company && <div className="error">{errors.company}</div>}
                        </div>
                    </div>

                    <button 
                        type="submit" 
                        className="submit-button"
                        disabled={isSubmitting}
                    >
                        {isSubmitting ? 'Submitting...' : 'Get Your Free Audit'}
                    </button>
                </form>
            </div>

            <div className={`success-message ${showSuccess ? 'visible' : ''}`}>
                <FaCheckCircle />
                Thank you! We'll be in touch with your audit results soon.
            </div>

            <div className={`error-message ${showError ? 'visible' : ''}`}>
                <FaExclamationCircle />
                Oops! Something went wrong. Please try again.
            </div>
        </section>
    );
};

export default ContactForm; 
import React, { useState } from 'react';
import './FAQ.css';

const FAQItem = ({ faq, index, toggleFAQ, isOpen }) => {
    return (
        <div className={`faq ${isOpen ? 'open' : ''}`} onClick={() => toggleFAQ(index)}>
            <div className="faq-question">
                {faq.question}
            </div>
            <div className="faq-answer">
                <div className="faq-answer-content">
                    {faq.answer}
                </div>
            </div>
        </div>
    );
};

const FAQ = () => {
    const [faqs, setFaqs] = useState([
        {
            question: "What is included in the free AI audit?",
            answer: "Our comprehensive AI audit includes a thorough assessment of your current business processes, identification of AI implementation opportunities, potential efficiency gains, cost-saving analysis, and a detailed roadmap for AI integration. We evaluate your data infrastructure, workflow automation potential, and provide specific recommendations tailored to your industry and business size."
        },
        {
            question: "How long does the audit process take?",
            answer: "The typical audit process takes 2-3 weeks, depending on your business size and complexity. This includes initial assessment, data collection, analysis, and the preparation of a detailed report with actionable recommendations. We work efficiently to provide you with valuable insights while respecting your time."
        },
        {
            question: "Do we need technical expertise to implement the recommendations?",
            answer: "No, our recommendations are designed to be accessible regardless of your technical background. We provide clear, step-by-step implementation guidelines and can recommend trusted partners for technical execution if needed. Our goal is to make AI integration as smooth as possible for your business."
        },
        {
            question: "What makes your AI audit different from others?",
            answer: "Our audit stands out through its comprehensive approach, focusing not just on technical aspects but also on business impact and ROI. We combine industry expertise with cutting-edge AI knowledge to provide practical, actionable recommendations. Plus, our free audit offers the same depth and quality as paid services."
        },
        {
            question: "How do you ensure the security of our business data?",
            answer: "We take data security extremely seriously. All information shared during the audit process is protected by strict confidentiality agreements. We use enterprise-grade encryption for data transfer and storage, and our audit process complies with major data protection regulations including GDPR and CCPA."
        },
        {
            question: "What happens after the audit is complete?",
            answer: "After completing the audit, we provide you with a detailed report including specific recommendations, implementation roadmap, and expected ROI calculations. We schedule a comprehensive review session to walk through the findings and answer any questions. While there's no obligation, we can also discuss how we might help with implementing the recommendations."
        },
        {
            question: "Can you help with implementing the recommendations?",
            answer: "Yes, while the audit is free and comes with no obligations, we offer various implementation support packages if you'd like our assistance in executing the recommendations. Our team can provide end-to-end implementation services or work alongside your existing team to ensure successful deployment of AI solutions."
        }
    ]);

    const [openFAQs, setOpenFAQs] = useState(new Set());

    const toggleFAQ = (index) => {
        setOpenFAQs(prevOpenFAQs => {
            const newOpenFAQs = new Set(prevOpenFAQs);
            if (newOpenFAQs.has(index)) {
                newOpenFAQs.delete(index);
            } else {
                newOpenFAQs.add(index);
            }
            return newOpenFAQs;
        });
    };

    return (
        <section id="faq" className="faq-section">
            <div className="container">
                <div className="faq-header">
                    <h2>Frequently Asked Questions</h2>
                    <p>Get answers to common questions about our AI audit process and how it can benefit your business.</p>
                </div>
                <div className="faqs">
                    {faqs.map((faq, index) => (
                        <FAQItem 
                            key={index} 
                            faq={faq} 
                            index={index} 
                            toggleFAQ={toggleFAQ}
                            isOpen={openFAQs.has(index)}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ; 
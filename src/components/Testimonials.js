import React from 'react';
import './Testimonials.css';
import { FaStar } from 'react-icons/fa';

const testimonials = [
    {
        text: "The free AI audit was a game-changer for our business. We identified several key areas for improvement that we hadn't even considered. The team's expertise and thorough analysis provided invaluable insights for our digital transformation journey.",
        author: "John Doe",
        title: "CEO of ExampleCorp",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
        rating: 5
    },
    {
        text: "I was skeptical at first, but the audit provided incredible value. The team was professional and the report was detailed and actionable. Their recommendations have already led to a 30% improvement in our process efficiency.",
        author: "Jane Smith",
        title: "Founder of Startupify",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
        rating: 5
    },
    {
        text: "The depth of analysis and practical recommendations exceeded our expectations. Their expertise in AI integration helped us identify opportunities we would have missed. A truly transformative experience for our organization.",
        author: "Michael Chen",
        title: "CTO of TechVision",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
        rating: 5
    }
];

const Testimonials = () => {
    return (
        <section id="testimonials" className="testimonials">
            <div className="container">
                <div className="testimonials-header">
                    <h2>What Our Clients Say</h2>
                </div>
                <div className="testimonial-list">
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="testimonial">
                            <div className="testimonial-content">
                                <div className="testimonial-rating">
                                    {[...Array(testimonial.rating)].map((_, i) => (
                                        <FaStar key={i} className="star" />
                                    ))}
                                </div>
                                <p className="testimonial-text">{testimonial.text}</p>
                                <div className="testimonial-author">
                                    <div className="author-avatar">
                                        <img src={testimonial.image} alt={testimonial.author} />
                                    </div>
                                    <div className="author-info">
                                        <h4 className="author-name">{testimonial.author}</h4>
                                        <p className="author-title">{testimonial.title}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials; 
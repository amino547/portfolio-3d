import React, { useRef } from 'react';
import './client.css';
import { motion, useInView } from 'framer-motion';

const Client = () => {
  const ref = useRef();
  const isInView = useInView(ref, { margin: "-100px" });

  const testimonials = [
    {
      name: "Walid Ben Janat",
      comment: "Exceptional work on our web application! The attention to detail and creative solutions exceeded our expectations.",
      stars: 5,
      role: "Tech Lead",
      delay: 0.2
    },
    {
      name: "Yassin Saad",
      comment: "Outstanding development skills and great communication throughout the project. Delivered exactly what we needed.",
      stars: 5,
      role: "Project Manager",
      delay: 0.4
    },
    {
      name: "Hamdi Jouini",
      comment: "Innovative approach to problem-solving and excellent technical expertise. A pleasure to work with!",
      stars: 5,
      role: "Product Owner",
      delay: 0.6
    },
    {
      name: "Narimen Abidi",
      comment: "Remarkable talent in both design and development. Created a seamless user experience that our customers love.",
      stars: 5,
      role: "UX Director",
      delay: 0.8
    }
  ];

  return (
    <div className="client" ref={ref}>
      <motion.h1
        className="client-title"
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        Client Testimonials
      </motion.h1>
      
      <div className="testimonials-container">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            className="testimonial-card"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: testimonial.delay }}
            whileHover={{ scale: 1.05, rotateY: 10 }}
          >
            <div className="card-content">
              <div className="stars">
                {[...Array(testimonial.stars)].map((_, i) => (
                  <motion.span
                    key={i}
                    className="star"
                    initial={{ opacity: 0, rotate: -180 }}
                    animate={isInView ? { opacity: 1, rotate: 0 } : {}}
                    transition={{ duration: 0.5, delay: testimonial.delay + (i * 0.1) }}
                  >
                    ⭐
                  </motion.span>
                ))}
              </div>
              <p className="comment">{testimonial.comment}</p>
              <div className="client-info">
                <h3 className="client-name">{testimonial.name}</h3>
                <span className="client-role">{testimonial.role}</span>
              </div>
            </div>
            <div className="card-glow"></div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Client;

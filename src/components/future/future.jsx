import React, { useRef } from 'react';
import './future.css';
import { motion, useInView } from 'framer-motion';

const Future = () => {
  const ref = useRef();
  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <div className="future" ref={ref}>
      <div className="future-container">
        <motion.div 
          className="future-left"
          initial={{ opacity: 0, rotateY: -90 }}
          animate={isInView ? { opacity: 1, rotateY: 0 } : {}}
          transition={{ duration: 1 }}
        >
          <h2>2024-2027</h2>
          <div className="dream-list">
            <motion.div 
              className="dream-item"
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.3 }}
            >
              <span className="dream-year">2024</span>
              <p>Mastering Full Stack Development</p>
            </motion.div>
            <motion.div 
              className="dream-item"
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.5 }}
            >
              <span className="dream-year">2025</span>
              <p>Cyber Secuirty Prodection Data</p>
            </motion.div>
            <motion.div 
              className="dream-item"
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.7 }}
            >
              <span className="dream-year">2027</span>
              <p>Generative Ai With Js And Python</p>
            </motion.div>
          </div>
        </motion.div>

        <motion.div 
          className="future-right"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1 }}
        >
          <div className="achievement-sphere">
            <div className="achievement" style={{ '--i': 1 }}>Master AI/ML</div>
            <div className="achievement" style={{ '--i': 2 }}>Build Startups</div>
            <div className="achievement" style={{ '--i': 3 }}>Lead Projects</div>
            <div className="achievement" style={{ '--i': 4 }}>Create Impact</div>
            <div className="achievement" style={{ '--i': 5 }}>Innovate Tech</div>
            <div className="achievement" style={{ '--i': 6 }}>Shape Future</div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Future;

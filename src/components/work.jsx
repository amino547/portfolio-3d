import React, { useRef } from "react";
import "./work.css";
import { motion, useInView } from "framer-motion";

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Work = () => {
  const ref = useRef();
  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <motion.div
      className="work"
      variants={variants}
      initial="initial"
      ref={ref}
      animate={isInView && "animate"}
    >
      <motion.div className="textContainer" variants={variants}>
        <p>
          Turning creative ideas into 
          <br />
          real-life projects
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <img src="/coding.webp" alt="" />
          <h1>
            <motion.b whileHover={{ color: "pink" }}>Unique</motion.b> Projects
          </h1>
        </div>

        <div className="title">
          <h1>
            <motion.b whileHover={{ color: "gold" }}>My</motion.b> Works
          </h1>
          <button>VIEW ALL</button>
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        <motion.div 
          className="box" 
          whileHover={{background: "#3d2b4f", y: -5}}
        >
          <h2>Gourmet Haven Restaurant</h2>
          <p>
            Designed and developed a modern restaurant website with an immersive UI/UX.
            Features include an interactive menu with stunning food photography, real-time
            table reservations, and a custom-built ordering system with elegant animations
            and a sophisticated color palette.
          </p>
          <a href="https://amino547.github.io/resto/" target="_blank" rel="noopener noreferrer">
            <button>Explore</button>
          </a>
        </motion.div>

        <motion.div 
          className="box" 
          whileHover={{background: "#3d2b4f", y: -5}}
        >
          <h2>Humanizer AI Assistant</h2>
          <p>
            Integrated cutting-edge AI technologies including natural language processing
            and machine learning to create a more human-like AI assistant. Implemented
            advanced features like emotion recognition, context-aware responses, and
            personalized user interactions using TensorFlow and OpenAI's GPT models.
          </p>
          <a href="https://amino547.github.io/ai-humanizer/" target="_blank" rel="noopener noreferrer">
            <button>Explore</button>
          </a>
        </motion.div>

        <motion.div 
          className="box" 
          whileHover={{background: "#3d2b4f", y: -5}}
        >
          <h2>Coffee Shop</h2>
          <p>
          A coffee shop website built with HTML, CSS, and JavaScript 
          provides a stylish and interactive experience. HTML structures the content,
          CSS enhances the design, and JavaScript adds features like animations and online ordering. This creates an engaging platform for customers to explore the menu, location, and promotions easily.
          </p>
          <button onClick={() => window.open('https://amino547.github.io/cafe/', '_blank')}>Explore</button>
        </motion.div>

        <motion.div 
          className="box" 
          whileHover={{background: "#3d2b4f", y: -5}}
        >
          <h2>Todo-Workout With Ai</h2>
          <p>
           A workout to-do list powered by HTML, CSS, JavaScript,
            and AI enhances functionality by providing smart suggestions,
             tracking progress, and personalizing workout plans. 
             AI can analyze your preferences, goals, and performance to recommend exercises,
              making the app more interactive and tailored to your fitness journey.
          </p>
          <button onClick={() => window.open('https://amino547.github.io/todo-workout/', '_blank')}>Explore</button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Work;

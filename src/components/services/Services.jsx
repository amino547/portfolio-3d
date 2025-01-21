//import ComputerModelContainer from "./computer/ComputerModelContainer";
import Container from "./computer/Container";
import IphoneContainer from "./console/IphoneContainer";
import Counter from "./Counter";
import BookContainer from "./mug/BookContainer";
import "./services.css";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

const textVariants = {
  initial: {
    x: -100,
    y: -100,
    opacity: 0,
  },
  animate: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
    },
  },
};

const listVariants = {
  initial: {
    x: -100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.5,
    },
  },
};

const services = [
  {
    id: 1,
    img: "/service1.png",
    title: "Web Development",
    counter: 35,
  },
  {
    id: 2,
    img: "/service2.png",
    title: "Graphic Design",
    counter: 15,
  },
  {
    id: 3,
    img: "/service3.png",
    title: "Mobile Development",
    counter: 20,
  },
];

const Services = () => {
  const [currentServiceId, setCurrentServiceId] = useState(1);
  const ref = useRef();
  const isInView = useInView(ref, { margin: "-100px" });

  const renderModel = () => {
    switch (currentServiceId) {
      case 1:
        return <Container />;
      case 2:
        return <BookContainer />;
      case 3:
        return <IphoneContainer />;
      default:
        return <Container />;
    }
  };

  return (
    <div className="services" ref={ref}>
      <div className="sSection left">
        <motion.h1
          variants={textVariants}
          animate={isInView ? "animate" : "initial"}
          className="sTitle"
        >
          My Services
        </motion.h1>
        <motion.div
          variants={listVariants}
          animate={isInView ? "animate" : "initial"}
          className="serviceList"
        >
          {services.map((service) => (
            <motion.div
              variants={listVariants}
              className={`service ${currentServiceId === service.id ? "active" : ""}`}
              key={service.id}
              onClick={() => setCurrentServiceId(service.id)}
            >
              <div className="serviceIcon">
                <img src={service.img} alt={service.title} />
              </div>
              <div className="serviceInfo">
                <h2>{service.title}</h2>
                <h3>{service.counter} Projects</h3>
              </div>
            </motion.div>
          ))}
        </motion.div>
        <div className="counterList">
          <Counter from={0} to={60} text="Projects Completed" />
          <Counter from={0} to={70} text="Happy Clients" />
        </div>
      </div>
      <div className="sSection right">
        {renderModel()}
      </div>
    </div>
  );
};

export default Services;

import { useEffect, useRef, useState } from "react";
import "./portfolio.css";
import { motion, useInView, useScroll, useTransform } from "motion/react";

const items = [
  {
    id: 1,
    img: "/g1.jpg",
    title: "Full Stack Gym Application",
    desc: "A gym app built with React and AI offers personalized workout plans, progress tracking, and exercise recommendations. React ensures a smooth, responsive user experience, while AI tailors fitness routines based on individual goals and performance, helping users achieve their fitness targets more effectively.",
    link: "/",
  },
  {
    id: 2,
    img: "/p2.jpg",
    title: "School Management System",
    desc: "A school management system built with React provides an efficient way to manage student data, attendance, grades, and schedules. React's flexibility ensures a responsive and user-friendly interface, allowing teachers, students, and administrators to easily interact with the system. With features like real-time updates and seamless navigation, this system streamlines daily operations and improves overall communication within the school..",
    link: "/",
  },
  {
    id: 3,
    img: "/g2.jpg",
    title: "Music Application",
    desc: "A music app built with React offers a smooth and interactive experience for users to listen to their favorite songs, create playlists, and discover new music. React ensures fast loading times and responsive design, making it easy to navigate through the app on any device. With features like personalized recommendations and seamless audio playback, the app provides a modern and enjoyable music experience..",
    link: "/",
  },
  {
    id: 4,
    img: "/g3.jpg",
    title: "shop app",
    desc: "A shop app built with React offers a smooth and dynamic shopping experience, allowing users to browse products, add items to their cart, and complete purchases effortlessly. React's fast rendering and responsive design ensure that users can easily navigate the app across different devices. With features like product search, recommendations, and secure checkout, the app provides a seamless and enjoyable online shopping experience..",
    link: "/",
  },
  {
    id: 5,
    img: "/p5.jpg",
    title: "Animated Portfolio Website",
    desc: "An animated portfolio website built with React offers a visually engaging and interactive way to showcase personal projects, skills, and achievements. React's component-based architecture allows for smooth animations and dynamic content, creating a unique user experience. With features like scroll animations, transitions, and responsive design, the website captures attention while providing easy navigation and a professional presentation of the user's work.",
    link: "/",
  },
];

const imgVariants = {
  initial: {
    x: -500,
    y: 500,
    opacity: 0,
  },
  animate: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
};

const textVariants = {
  initial: {
    x: 500,
    y: 500,
    opacity: 0,
  },
  animate: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
      staggerChildren: 0.05,
    },
  },
};

const ListItem = ({ item }) => {
  const ref = useRef();

  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <div className="pItem" ref={ref}>
      <motion.div
        variants={imgVariants}
        animate={isInView ? "animate" : "initial"}
        className="pImg"
      >
        <img src={item.img} alt="" />
      </motion.div>
      <motion.div
        variants={textVariants}
        animate={isInView ? "animate" : "initial"}
        className="pText"
      >
        <motion.h1 variants={textVariants}>{item.title}</motion.h1>
        <motion.p variants={textVariants}>{item.desc}</motion.p>
        <motion.a variants={textVariants} href={item.link}>
          <button>Under Development</button>
        </motion.a>
      </motion.div>
    </div>
  );
};

const Portfolio = () => {
  const [containerDistance, setContainerDistance] = useState(0);
  const ref = useRef(null);

  // useEffect(() => {
  //   if (ref.current) {
  //     const rect = ref.current.getBoundingClientRect();
  //     setContainerDistance(rect.left);
  //   }
  // }, []);

  // FIX: Re-calculate when screen size changes
  useEffect(() => {
    const calculateDistance = () => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        setContainerDistance(rect.left);
      }
    };

    calculateDistance();

    window.addEventListener("resize", calculateDistance);

    return () => {
      window.removeEventListener("resize", calculateDistance);
    };
  }, []);

  const { scrollYProgress } = useScroll({ target: ref });

  const xTranslate = useTransform(
    scrollYProgress,
    [0, 1],
    [0, -window.innerWidth * items.length]
  );

  return (
    <div className="portfolio" ref={ref}>
      <motion.div className="pList" style={{ x: xTranslate }}>
        <div
          className="empty"
          style={{
            width: window.innerWidth - containerDistance,
            // backgroundColor: "pink",
          }}
        />
        {items.map((item) => (
          <ListItem item={item} key={item.id} />
        ))}
      </motion.div>
      <section />
      <section />
      <section />
      <section />
      <section />
      <div className="pProgress">
        <svg width="100%" height="100%" viewBox="0 0 160 160">
          <circle
            cx="80"
            cy="80"
            r="70"
            fill="none"
            stroke="#ddd"
            strokeWidth={20}
          />
          <motion.circle
            cx="80"
            cy="80"
            r="70"
            fill="none"
            stroke="#dd4c62"
            strokeWidth={20}
            style={{ pathLength: scrollYProgress }}
            transform="rotate(-90 80 80)"
          />
        </svg>
      </div>
    </div>
  );
};

export default Portfolio;

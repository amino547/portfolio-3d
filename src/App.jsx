// import Hero from "./components/hero/Hero";
// import Services from "./components/services/Services";
// import Portfolio from "./components/portfolio/Portfolio";
// import Contact from "./components/contact/Contact";

import { lazy, Suspense } from "react";
import LazyLoad from "react-lazyload";
import "./app.css"
const Hero = lazy(() => import("./components/hero/Hero"));
const Services = lazy(() => import("./components/services/Services"));
const Work = lazy(() => import("./components/work"));
const Future = lazy(() => import("./components/future/future"));
const Client = lazy(() => import("./components/client/client"));
const Portfolio = lazy(() => import("./components/portfolio/Portfolio"));
const Contact = lazy(() => import("./components/contact/Contact"));
const ChatAi = lazy(() => import("./components/chatai/ChatAi"));

const App = () => {
  return (
    <div className="container">
      <Suspense fallback={"loading..."}>
        <LazyLoad height={"100vh"} offset={-100}>
          <section id="#home">
            <Hero />
          </section>
        </LazyLoad>
      </Suspense>
      <Suspense fallback={"loading..."}>
        <LazyLoad height={"100vh"} offset={-100}>
          <section id="#services">
            <Services />
          </section>{" "}
        </LazyLoad>
      </Suspense>

      <Suspense fallback={"loading..."}>
        <LazyLoad height={"100vh"} offset={-100}>
          <section id="#future">
            <Future />
          </section>
        </LazyLoad>
      </Suspense>
      <Suspense fallback={"loading..."}>
        <LazyLoad height={"600vh"} offset={-100}>
          {/* <section id="#portfolio"> */}
          <Portfolio />
          {/* </section> */}{" "}
        </LazyLoad>
      </Suspense>


      <Suspense fallback={<div className="loading-fallback">Loading...</div>}>
        <LazyLoad height={"100vh"} offset={100} once>
          <section id="work">
            <Work />
          </section>
        </LazyLoad>
      </Suspense>


      <Suspense fallback={<div className="loading-fallback">Loading...</div>}>
        <LazyLoad height={"100vh"} offset={100} once>
          <section id="client">
            <Client />
          </section>
        </LazyLoad>
      </Suspense>

      <Suspense fallback={<div className="loading-fallback">Loading...</div>}>
        <LazyLoad height={"100vh"} offset={100} once>
          <section id="contact">
            <Contact />
          </section>
        </LazyLoad>
      </Suspense>
      <Suspense fallback={<div className="loading-fallback">Loading...</div>}>
        <ChatAi />
      </Suspense>
    </div>
  );
};

export default App;

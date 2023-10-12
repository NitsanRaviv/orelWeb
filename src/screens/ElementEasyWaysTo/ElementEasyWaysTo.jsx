import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "./style.css";

export const ElementEasyWaysTo = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  useEffect(() => {
    // Update the window width when it changes
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    // Remove the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [window.innerWidth]);

  return (
    <>
      {windowWidth >= 1010 ? (
        <motion.div className="element-easy-ways-to">
          <div className="div">
            <div className="overlap">
              <img
                className="backgroundhero"
                alt="Backgroundhero"
                src="/img/backgroundhero-gradienttop.svg"
              />
              <div className="mobile-native">Writer</div>
              <div className="frame">
                <div className="simulador-de-cr-dito-wrapper">
                  <p className="simulador-de-cr-dito">
                    3 easy ways to improve your designer-developer collaboration
                  </p>
                </div>
                <a
                  className="text-wrapper"
                  href="https://micarro.ccu.cl/login"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  🔗 micarro.ccu.cl
                </a>
              </div>
              <Link to="/">
                <img
                  className="btn-sign"
                  alt="Btn sign"
                  src="/img/btn-sign.png"
                />
              </Link>
              <div className="frame-2">
                <p className="propuesta-de-concept">
                  Why is working together challenging for designers and
                  developers?
                  <br />
                  Don Norman (the writer of The Design of Everyday Things)
                  claims that designers and developers have different
                  perceptions of how people think and act. These differences
                  affect the types of solutions we offer our users (aka people).
                  We also have different roles in the product planning and
                  building cycle. Engineers need to think about being efficient,
                  while designers need to create a better experience for users.
                  But are we really
                  <br />
                  that different?
                </p>
                <p className="p">
                  Norman himself was an engineer and then became a designer. Tim
                  Brown (the writer of “Design Thinking”) claimed that Isambard
                  Kingdom Brunel (an engineer) is the first design thinker. Both
                  designers and engineers are needed to create better products.
                  So, how to overcome our communication challenges?
                </p>
                <p className="p">
                  At Authomize, we’ve managed to find 3 things that improved our
                  collaboration greatly.
                  <br />
                  Those 3 easy to follow steps, can help you create an organized
                  and inclusive framework. I’m a designer, so some of the steps
                  are up to the designers in your organization to follow. But if
                  you’re a developer and you find it interesting, I invite you
                  to share it with the designers at your company.
                </p>
              </div>
            </div>
            <footer className="footer">
              <div className="overlap-group">
                <div className="group">
                  <div className="galarchenko">
                    Orel Shmueli
                    <br />
                    Product Designer
                    <br />
                    Orelshmueli20@gmail.com
                  </div>
                  <div className="group-2">
                    <a
                      className="logo-linkedin"
                      href="https://www.linkedin.com/in/orel-shmueli/"
                      rel="noopener noreferrer"
                      target="_blank"
                    />
                    <a
                      href="/CV/cv.pdf"
                      target="_blank"
                      className="text-wrapper-2"
                    >
                      cv
                    </a>
                  </div>
                </div>
              </div>
            </footer>
            <div className="group-3">
              <img className="image" alt="Image" src="/img/image-17.png" />
              <div className="propuesta-de-concept-2">
                Design vs implementation meme
              </div>
            </div>
            <div className="group-4">
              <div className="div-wrapper">
                <div className="simulador-de-cr-dito-2">
                  Our &#34;working together&#34; framework
                </div>
              </div>
              <div className="frame-3">
                <div className="frame-4">
                  <p className="propuesta-de-concept">
                    One of the most important things when working with others is
                    to be organized. Figma (or any other system you’re using) is
                    not our private room, so we can&#39;t leave a bunch of
                    clothes on the chair and a messy closet behind us.
                    Developers can relate to that because they need to keep
                    their code neat for others to review or work on. As
                    designers, we are familiar with our design files, but for
                    anyone else, it might be overwhelming to go over all those
                    screens and pages. This cool method will help developers
                    find what they need easily.
                  </p>
                  <p className="p">
                    {" "}
                    Open a new project in Figma for designs hand-offs, and call
                    it “sprints” <br /> In this project, each sprint should get
                    a file (sprint 1, sprint 2, and so on). <br /> Use the first
                    page of each file as a cover to keep everything organized.
                    (I like to write on the cover the name and time range of
                    each sprint).
                  </p>
                </div>
                <div className="group-5">
                  <img className="img" alt="Image" src="/img/image-18.png" />
                  <p className="propuesta-de-concept-3">
                    Using the first page as a cover helps keeping your Figma
                    organized
                  </p>
                </div>
                <div className="frame-4">
                  <p className="propuesta-de-concept">
                    {" "}
                    On the sprint file, each page is a task, and the page name
                    must match the task&#39;s name as it&#39;s written on Jira.
                    You should make sure to put only the required screens for
                    each task on its file. <br />
                    Update the design link on the task story. By doing so you’re
                    connecting between the two platforms, making it easy for
                    developers to find the design they need. <br />
                    For the final touch, you can use the new Jira widget that
                    Figma released (it’s brilliant). This one is more for you
                    (designers). It helps keep you in the loop, by showing you
                    how&#39;s going to work on this design and the feature
                    implementation status without leaving Figma.
                  </p>
                </div>
                <div className="group-wrapper">
                  <div className="group-6">
                    <img
                      className="image-2"
                      alt="Image"
                      src="/img/image-19.png"
                    />
                    <p className="propuesta-de-concept-4">
                      Each page is named like the Jira ticket &amp; the cool new
                      Jira widget on Figma
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="group-7">
              <div className="div-wrapper">
                <div className="simulador-de-cr-dito-2">
                  Build a Design system
                </div>
              </div>
              <div className="frame-3">
                <div className="frame-4">
                  <p className="propuesta-de-concept">
                    Ok, I’ll admit that this one is not that easy to create, but
                    I promise you it’s worth your time. Having a design system
                    has tons of advantages. A design system is a collection of
                    UI components and design guidelines that are being used in
                    your organization. It’s an amazing tool to keep the design
                    consistent and leaves no room for improvisation. It saves
                    time and helps with onboarding new members to both teams.
                  </p>
                  <p className="p">
                    It’s also something you can build together, designers and
                    developers. Make sure both are agreeing on the complexity of
                    new components, how to organize it, and make it accessible
                    to both teams. At Authomize, the lead front-end developer
                    and I had weekly design system meetings. During those
                    meetings, we planned each section of the design system.
                    After the meetings, I designed it as we planned together.
                    Keeping him in the flow helped a lot with the implementation
                    process. He felt that this is his project as much as it is
                    mine and it made him motivated to implement it faster.
                  </p>
                </div>
                <div className="group-8">
                  <img
                    className="image-3"
                    alt="Image"
                    src="/img/image-20.png"
                  />
                  <p className="propuesta-de-concept-5">
                    Our design system built on Figma
                  </p>
                </div>
                <div className="group-9">
                  <img
                    className="image-4"
                    alt="Image"
                    src="/img/image-21.png"
                  />
                  <p className="propuesta-de-concept-6">
                    An example to one of our DS section (tables)
                  </p>
                </div>
              </div>
            </div>
            <div className="group-10">
              <div className="div-wrapper">
                <div className="simulador-de-cr-dito-2">
                  Becoming best friends
                </div>
              </div>
              <div className="frame-3">
                <div className="frame-4">
                  <p className="propuesta-de-concept">
                    Ok, so you don’t have to become best friends, but continuous
                    communication is important. To maintain it you should do two
                    things:
                  </p>
                  <p className="propuesta-de-concept-7">
                    <span className="span">
                      1. Include each other in your daily meetings. <br />
                    </span>
                    <span className="text-wrapper-3">
                      In Authomize, the front-end developers are having daily
                      stand-ups. Including me in those meetings, created an
                      opportunity for us to update each other on a daily basis.
                      It’s also a good opportunity to give each other feedback
                      and ask questions. <br />
                      <br />
                    </span>
                    <span className="span">
                      2. Move your seats next to each other <br />
                    </span>
                    <span className="text-wrapper-3">
                      Sitting close allows you to use those free times between
                      meetings to catch up. If you’re working from home, you can
                      set a weekly meeting for mutual updates.
                    </span>
                  </p>
                </div>
              </div>
            </div>
            <div className="group-11">
              <div className="div-wrapper">
                <div className="simulador-de-cr-dito-2">The bottom line</div>
              </div>
              <div className="frame-3">
                <div className="frame-4">
                  <p className="propuesta-de-concept">
                    We might be different but we have one thing in common, we
                    both want to feel included. Those tips can help you create
                    an organized framework. But you should keep in mind that
                    it&#39;s important to hear each other&#39;s thoughts and
                    comments. Working on our communication is an ongoing
                    process, and I&#39;m still working on it every day. If you
                    have useful tips I&#39;d love to hear them.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      ) : (
        <motion.div className="footer-outer-div">
          <div className="ElementWays-outer-div">
            <div className="first-inner-div">
              <Link to="/">
                <img
                  className="back-sign-btn"
                  alt="Btn Sign"
                  src="/img/btn-sign.png"
                />
              </Link>
            </div>
            <div className="ElementWays-query-builder-2">
              <div className="ElementWays-over-query-builder">
                <div className="ElementWays-first-divison ElementWays-first-part">
                  <div className="ElementWays-prod-p">
                    <p>Writer</p>
                  </div>
                  <div className="ElementWays-heading-query">
                    <h1>
                      3 easy ways to improve your designer-developer
                      collaboration
                    </h1>
                  </div>
                  <div className="ElementWays-prod-p-2">
                    <p>🔗 micarro.ccu.cl</p>
                  </div>
                  <div className="ElementWays-big-para">
                    Why is working together challenging for designers and
                    developers?
                    <br />
                    Don Norman (the writer of The Design of Everyday Things)
                    claims that designers and developers have different
                    perceptions of how people think and act. These differences
                    affect the types of solutions we offer our users (aka
                    people). We also have different roles in the product
                    planning and building cycle. Engineers need to think about
                    being efficient, while designers need to create a better
                    experience for users. But are we really
                    <br />
                    that different?
                  </div>
                  <div className="ElementWays-big-para">
                    Norman himself was an engineer and then became a designer.
                    Tim Brown (the writer of “Design Thinking”) claimed that
                    Isambard Kingdom Brunel (an engineer) is the first design
                    thinker. Both designers and engineers are needed to create
                    better products. So, how to overcome our communication
                    challenges?
                  </div>
                  <div className="ElementWays-big-para">
                    At Authomize, we’ve managed to find 3 things that improved
                    our collaboration greatly.
                    <br />
                    Those 3 easy to follow steps, can help you create an
                    organized and inclusive framework. I’m a designer, so some
                    of the steps are up to the designers in your organization to
                    follow. But if you’re a developer and you find it
                    interesting, I invite you to share it with the designers at
                    your company.
                  </div>
                </div>
              </div>
              <div className="ElementWays-first-divison ElementWays-second-part">
                <div className="image-container">
                  <img
                    className="ElementWays-inven"
                    src="/img/image-17.png"
                    alt="#"
                  />
                </div>
                <p className="tempText">Design vs implementation meme</p>
              </div>

              <div className="ElementWays-col-content">
                <div className="ElementWays-overview-h">
                  <h1>Our "working together" framework</h1>
                </div>
                <div className="ElementWays-big-para">
                  One of the most important things when working with others is
                  to be organized. Figma (or any other system you’re using) is
                  not our private room, so we can't leave a bunch of clothes on
                  the chair and a messy closet behind us. Developers can relate
                  to that because they need to keep their code neat for others
                  to review or work on. As designers, we are familiar with our
                  design files, but for anyone else, it might be overwhelming to
                  go over all those screens and pages. This cool method will
                  help developers find what they need easily.
                </div>
                <div className="ElementWays-big-para">
                  Open a new project in Figma for designs hand-offs, and call it
                  “sprints” <br /> In this project, each sprint should get a
                  file (sprint 1, sprint 2, and so on). <br /> Use the first
                  page of each file as a cover to keep everything organized. (I
                  like to write on the cover the name and time range of each
                  sprint).
                </div>
              </div>

              <div className="ElementWays-first-divison ElementWays-second-part">
                <div>
                  <img
                    className="ElementWays-inven-2"
                    src="/img/image-18.png"
                    alt="#"
                  />
                </div>
                <p className="tempText">
                  Using the first page as a cover helps keeping your Figma
                  organized
                </p>
              </div>

              <div className="ElementWays-big-para">
                On the sprint file, each page is a task, and the page name must
                match the task&#39;s name as it&#39;s written on Jira. You
                should make sure to put only the required screens for each task
                on its file. <br />
                Update the design link on the task story. By doing so you’re
                connecting between the two platforms, making it easy for
                developers to find the design they need. <br />
                For the final touch, you can use the new Jira widget that Figma
                released (it’s brilliant). This one is more for you (designers).
                It helps keep you in the loop, by showing you how&#39;s going to
                work on this design and the feature implementation status
                without leaving Figma.
              </div>
              <div className="ElementWays-first-divison ElementWays-second-part">
                <div>
                  <img
                    className="ElementWays-inven-2"
                    src="/img/image-19.png"
                    alt="#"
                  />
                </div>
                <p className="tempText">
                  Each page is named like the Jira ticket & the cool new Jira
                  widget on Figma
                </p>
              </div>

              <div className="ElementWays-col-content">
                <div className="ElementWays-overview-h">
                  <h1>Becoming best friends</h1>
                </div>
                <div className="ElementWays-big-para">
                  Ok, so you don’t have to become best friends, but continuous
                  communication is important. To maintain it you should do two
                  things:
                </div>
                <div className="ElementWays-blue-h">
                  1. Include each other in your daily meetings.
                </div>
                <div className="ElementWays-big-para">
                  In Authomize, the front-end developers are having daily
                  stand-ups. Including me in those meetings, created an
                  opportunity for us to update each other on a daily basis. It’s
                  also a good opportunity to give each other feedback and ask
                  questions.
                </div>
                <div className="ElementWays-blue-h">
                  2. Move your seats next to each other
                </div>
                <div className="ElementWays-big-para">
                  Sitting close allows you to use those free times between
                  meetings to catch up. If you’re working from home, you can set
                  a weekly meeting for mutual updates.
                </div>
              </div>

              <div className="ElementWays-col-content">
                <div className="ElementWays-overview-h">
                  <h1>Build a Design system</h1>
                </div>
                <div className="ElementWays-big-para">
                  Ok, I’ll admit that this one is not that easy to create, but I
                  promise you it’s worth your time. Having a design system has
                  tons of advantages. A design system is a collection of UI
                  components and design guidelines that are being used in your
                  organization. It’s an amazing tool to keep the design
                  consistent and leaves no room for improvisation. It saves time
                  and helps with onboarding new members to both teams.
                </div>
                <div className="ElementWays-big-para">
                  It’s also something you can build together, designers and
                  developers. Make sure both are agreeing on the complexity of
                  new components, how to organize it, and make it accessible to
                  both teams. At Authomize, the lead front-end developer and I
                  had weekly design system meetings. During those meetings, we
                  planned each section of the design system. After the meetings,
                  I designed it as we planned together. Keeping him in the flow
                  helped a lot with the implementation process. He felt that
                  this is his project as much as it is mine and it made him
                  motivated to implement it faster.
                </div>
              </div>
              <div className="ElementWays-first-divison ElementWays-second-part">
                <div>
                  <img
                    className="ElementWays-inven-2"
                    src="/img/image-20.png"
                    alt="#"
                  />
                </div>
                <p className="tempText">Our design system built on Figma</p>
              </div>

              <div className="ElementWays-first-divison ElementWays-second-part">
                <div>
                  <img
                    className="ElementWays-inven-2"
                    src="/img/image-21.png"
                    alt="#"
                  />
                </div>
                <p className="tempText">
                  An example to one of our DS section (tables)
                </p>
              </div>
              <div className="ElementWays-col-content">
                <div className="ElementWays-overview-h">
                  <h1>The bottom line</h1>
                </div>
                <div className="ElementWays-big-para">
                  We might be different but we have one thing in common, we both
                  want to feel included. Those tips can help you create an
                  organized framework. But you should keep in mind that it's
                  important to hear each other's thoughts and comments. Working
                  on our communication is an ongoing process, and I'm still
                  working on it every day. If you have useful tips I'd love to
                  hear them.
                </div>
              </div>
            </div>
          </div>
          <div className="ElementWays-footerr">
            <div className="ElementWays-foot-center">
              Orel Shmueli
              <br />
              Product Designer
              <br />
              Orelshmueli20@gmail.com
            </div>
            <div className="ElementWays-links">
              <a
                href="/CV/cv.pdf"
                target="_blank"
                className="ElementWays-cv-class"
              >
                cv
              </a>
              <a
                className="ElementWays-din-logo"
                href="https://www.linkedin.com/in/orel-shmueli/"
                rel="noopener noreferrer"
                target="_blank"
              />
            </div>
          </div>
        </motion.div>
      )}
    </>
  );
};

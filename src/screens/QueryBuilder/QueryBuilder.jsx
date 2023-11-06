import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "./style.css";
import img1 from "../../../docs/img/tempp.png";
export const QueryBuilder = () => {
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
      {windowWidth >= 1090 ? (
        <motion.div className="query-builder">
          <div className="div">
            <div className="overlap">
              <img
                className="backgroundhero"
                alt="Backgroundhero"
                src="/img/backgroundhero-gradienttop.svg"
              />
              <p className="propuesta-de-concept">
                Complex systems typically involve large amounts of data and
                complex relationships between the data. As a result, querying
                this data can be a challenging and time-consuming task. Query
                builders provide a way to simplify this process for our users.
              </p>
              <div className="simulador-de-cr-dito">Query Builder</div>
              <div className="mobile-native">Product Designer</div>
              <img
                className="inventory"
                alt="Inventory"
                src="/img/inventory-1.png"
              />
              <img className="list" alt="List" src="/img/list-2.png" />
              <Link to="/">
                <img
                  className="btn-sign"
                  alt="Btn sign"
                  src="/img/btn-sign.png"
                />
              </Link>
              <div className="group">
                <p className="text-wrapper">
                  One of my favorite projects as a product designer was the
                  design of a query builder for Authomize. As a complex system
                  designer, I was faced with the challenge of creating a tool
                  for filtering and organizing large sets of data in an
                  intuitive and user-friendly way. The query builder needed to
                  be able to handle a variety of data types, each with their own
                  specific categories and hierarchies. I enjoyed the process of
                  brainstorming and prototyping different solutions, and
                  ultimately delivering a product that not only met the needs of
                  the user, but exceeded their expectations. The query builder
                  has since become an integral part of Authomize&#39;s platform,
                  and I am proud of the role I played in its development.
                </p>
                <div className="what-people-are-sayi">Overview</div>
                <div className="overlap-group">
                  <video autoPlay muted loop className="video_mov">
                    <source src="/videos/Filters.mp4" type="video/mp4" />
                  </video>
                </div>
              </div>
              <div className="group-2">
                <div className="propuesta-de-concept-wrapper">
                  <div className="propuesta-de-concept-2">
                    Worked on this project
                  </div>
                </div>
                <div className="frame">
                  <div className="frame-2">
                    <div className="div-wrapper">
                      <div className="text">Product manager</div>
                    </div>
                    <div className="div-wrapper">
                      <div className="text">Product designer</div>
                    </div>
                    <div className="div-wrapper">
                      <div className="text">Backend developer</div>
                    </div>
                  </div>
                  <div className="div-wrapper">
                    <div className="text">Frontend developer</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="group-3">
              <div className="what-people-are-sayi-2">Personas</div>
              <div className="group-4">
                <img className="img" alt="Group" src="/img/group-4252.png" />
              </div>
            </div>
            <div className="group-6">
              <p className="p">
                Our product is a SaaS solution designed to help companies
                efficiently manage their identities, data, and access. Our users
                are typically CISOs, security architects, compliance managers,
                and SOC analysts who rely on our platform to securely and
                effectively handle their organizational needs.
              </p>
              <div className="what-people-are-sayi-3">Product Background</div>
            </div>
            <div className="what-people-are-sayi-wrapper">
              <div className="what-people-are-sayi-4">The Process</div>
            </div>
            <div className="group-7">
              <div className="group-wrapper">
                <div className="overlap-group-wrapper">
                  <div className="overlap-group-2">
                    <div className="text-wrapper-2">1</div>
                  </div>
                </div>
              </div>
              <div className="frame-wrapper">
                <div className="frame-3">
                  <div className="propuesta-de-concept-3">KICK-OFF</div>
                  <p className="propuesta-de-concept-4">
                    As a product designer on the product team, I follow a
                    structured process to ensure that each project is delivered
                    successfully. This process starts with meeting with the
                    product managers to establish a clear set of requirements
                    and a defined timeline. From there, we work collaboratively
                    to brainstorm and prototype solutions, testing and iterating
                    along the way to ensure that the final product meets the
                    needs of our users.
                  </p>
                </div>
              </div>
            </div>
            <div className="overlap-2">
              <div className="group-8">
                <div className="group-wrapper">
                  <div className="overlap-group-wrapper">
                    <div className="overlap-group-2">
                      <div className="text-wrapper-3">2</div>
                    </div>
                  </div>
                </div>
                <div className="group-9">
                  <div className="frame-3">
                    <div className="propuesta-de-concept-3">Research</div>
                    <p className="propuesta-de-concept-4">
                      <span className="span">
                        Before diving into the design process, I like to start
                        by gathering as much information as possible about the
                        project at hand. To do this, I typically engage in two
                        types of research:
                        <br />
                      </span>
                      <span className="text-wrapper-4">Secondary research</span>
                      <span className="span">
                        : This involves learning about best practices and
                        reading articles about similar features to get a sense
                        of what has been successful in the past.
                        <br />
                      </span>
                      <span className="text-wrapper-4">
                        Market and competition research
                      </span>
                      <span className="span">
                        : It&#39;s also important to look at how other products
                        have tackled similar problems and gather inspiration
                        from their approaches. This helps me to understand what
                        has already been done so that I can design something
                        that our users will be able to learn quickly how to use
                        at.
                      </span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="group-10">
                <div className="group-11">
                  <p className="propuesta-de-concept-5">
                    This is a big project so we decided to devote 7 full sprints
                    to this project, and divided our time this way:
                    <br />2 sprints for planning, designing the behavior ot the
                    component, and creating the prototype
                    <br />1 sprint for user tests
                    <br />1 sprint for conclusions, updates, and UI final design
                    <br />2 sprints for implementation
                  </p>
                  <div className="propuesta-de-concept-6">Schedule</div>
                </div>
                <div className="group-12">
                  <p className="propuesta-de-concept-5">
                    Easy to use and understand
                    <br />
                    Be dynamic so it can be used by different features in the
                    product
                    <br />
                    Have highlighted filters that will be displayed at the top
                    <br />
                    Work smoothly on all browsers
                    <br />
                    all should support server-side filtering
                    <br />
                    When something returns zero results, hide this option from
                    the filter
                    <br />
                    all applied filters should work asynchronously and don’t
                    black out the page experience
                    <br />
                    any component that we need and can be used from open-source
                    resources with a valid license is preferred over a
                    self-developed one, as long as it matches the requirements.
                  </p>
                  <div className="propuesta-de-concept-6">Requirements</div>
                </div>
                <div className="group-13">
                  <p className="propuesta-de-concept-5">
                    Every project presents its own unique challenges, and the
                    design of the query builder was no exception. I like to
                    write to myself at the beginning of each project what are
                    the biggest challenges. Some of the key challenges I faced
                    in this project included:
                    <br />
                    Maintaining consistency: As a complex system, our product
                    has many different parts that use filters with varying
                    requirements. It was important to ensure that the query
                    builder was consistent with these requirements and fit
                    seamlessly into the overall product.
                    <br />
                    Balancing ease of use with functionality: Our user base
                    includes both technical and non-technical users, and it was
                    important to strike the right balance between providing
                    advanced configuration options for the technical users and
                    keeping the interface easy to use for all users. Too many
                    options and possibilities could be overwhelming and
                    confusing.
                    <br />
                    Achieving the main purpose: Ultimately, the goal of the
                    query builder was to filter data in the most efficient way
                    possible. It was important to consider this purpose and
                    design the tool in a way that met this need effectively.
                  </p>
                  <div className="group-14">
                    <div className="group-15">
                      <div className="propuesta-de-concept-7">Jacob’s law</div>
                      <p className="propuesta-de-concept-8">
                        <span className="text-wrapper-5">
                          “Users spend most of their time on other sites
                        </span>
                        <span className="text-wrapper-6">&nbsp;</span>
                        <span className="text-wrapper-7">
                          This means that users prefer your site to work the
                          same way as all the other sites they already know”.
                        </span>
                      </p>
                    </div>
                    <p className="propuesta-de-concept-9">
                      To understand how our users interact with other products,
                      I like to show the product managers examples of complex
                      filters that I find useful and have them use them while I
                      observe. This helps me to get a better understanding of
                      the user experience and identify any potential pain
                      points.
                      <br />
                      <br />
                      Once I have gathered all of this information, I move on to
                      the fun part: sketching and planning. This is where I get
                      to be creative and start exploring different design
                      concepts and ideas.
                    </p>
                  </div>
                  <div className="propuesta-de-concept-6">Challenges</div>
                </div>
              </div>
            </div>
            <div className="group-16">
              <div className="group-wrapper">
                <div className="overlap-group-wrapper">
                  <div className="overlap-group-2">
                    <div className="text-wrapper-3">3</div>
                  </div>
                </div>
              </div>
              <div className="group-17">
                <div className="frame-3">
                  <div className="propuesta-de-concept-3">
                    sketching and planning
                  </div>
                </div>
              </div>
            </div>
            <img
              className="screen-shot"
              alt="Screen shot"
              src="/img/screen-shot-2023-01-03-at-11-38-1.png"
            />
            <div className="overlap-3">
              <img
                className="screen-shot-2"
                alt="Screen shot"
                src="/img/screen-shot-2023-01-03-at-12-13.png"
              />
              <div className="group-18">
                <div className="group-19">
                  <div className="group-wrapper">
                    <div className="overlap-group-wrapper">
                      <div className="overlap-group-2">
                        <div className="text-wrapper-3">3</div>
                      </div>
                    </div>
                  </div>
                  <div className="group-17">
                    <div className="frame-3">
                      <div className="group-20">
                        <div className="propuesta-de-concept-10">
                          Designing &amp; Prototyping
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="group-21">
                  <div className="group-22">
                    <div className="overlap-group-3">
                      <p className="propuesta-de-concept-11">
                        <br />a list of up to 5 options displayed to the user
                        <br />
                        ability to search with autocomplete
                        <br />
                        support for icons, if the returned result contains one -
                        some will be returned without an icon
                        <br />
                        support for color indicator - a small dot near the item
                        name, will be used for tags colors.
                        <br />
                        support multi-select both in the case of autocompleted
                        values and in the case of a fixed list, if something is
                        selected this should be indicated at the top of the list
                        with a selected checkbox so the user can uncheck that.
                        <br />
                        by hovering over one line, highlight “only” to allow the
                        user to select only this specific row
                        <br />
                        When the filter is in edit mode: display the full list
                        of systems with a small X icon to delete the relevant
                        system
                        <br />
                        When the filter is active and not in an edit mode:
                        display up to one item and a number of other selected
                        items (i.e System: Microsoft (google, GitHub) =&gt;
                        System: Microsoft + 2)
                        <br />
                        What happened if the dropdown is open? as long as the
                        user hasn’t clicked anywhere the dropdown is open
                        <br />
                        When the filter is applied in the filters list without
                        any select option we should display “all”
                      </p>
                      <div className="propuesta-de-concept-12">Dropdown</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="group-23">
              <p className="propuesta-de-concept-13">
                Adding filters: by clicking a plus button a menu with the
                filters types will pop.
                <br />
                Removing filters: by hovering over the filter, an X will appear,
                clicking on the X will delete the filter
                <br />
                <br />
                All filters should be URL-based, so the user can refresh the
                page or send it to another person with the filters applied.
                <br />
                after a filter was applied the user can remove it by clicking a
                delete icon next to the filter in the filters row.
                <br />
                once a filter was applied we should call a function or submit a
                request ( architectural decision), but the feedback should be
                immediate.
              </p>
              <div className="propuesta-de-concept-14">Behavior</div>
            </div>
            <div className="group-24">
              <div className="group-25">
                <div className="group-wrapper">
                  <div className="overlap-group-wrapper">
                    <div className="overlap-group-2">
                      <div className="text-wrapper-8">4</div>
                    </div>
                  </div>
                </div>
                <div className="group-17">
                  <div className="frame-3">
                    <div className="propuesta-de-concept-3">
                      Usability tests
                    </div>
                  </div>
                </div>
              </div>
              <div className="overlap-wrapper">
                <div className="overlap-group-4">
                  <img
                    className="screen-shot-5"
                    alt="Screen shot"
                    src="/img/screen-shot-2023-01-03-at-12-20.png"
                  />
                  <div className="group-26">
                    <div className="overlap-group-4">
                      {/* <img
                        className="screen-shot-6"
                        alt="Screen shot"
                        src="/img/screen-shot-2023-01-03-at-12-06-1.png"
                      /> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="group-27">
              <div className="overlap-4">
                <div className="group-28">
                  <div className="group-wrapper">
                    <div className="overlap-group-wrapper">
                      <div className="overlap-group-2">
                        <div className="text-wrapper-8">5</div>
                      </div>
                    </div>
                  </div>
                  <div className="group-29">
                    <div className="frame-3">
                      <div className="propuesta-de-concept-3">Hand-off</div>
                    </div>
                  </div>
                </div>
                <div className="group-30">
                  <p className="propuesta-de-concept-15">
                    As with any design project, there are always concerns and
                    potential challenges that need to be addressed before
                    testing prototypes with users. In the case of the query
                    builder, some of the specific concerns we had included:
                    <br />
                    Users might not be able to find the &#34;Add Filter&#34;
                    button, which is revealed when the user hovers over the
                    filter area
                    <br />
                    Users might not understand that they need to hover over a
                    filter to reveal the &#34;Remove&#34; button
                    <br />
                    <br />
                    To address these concerns and ensure the best possible user
                    experience, we conducted usability tests with a small group
                    of customers (typically 3-5 individuals). As a small-medium
                    startup, it&#39;s important for us to keep our paying
                    customers happy and make the most of every testing
                    opportunity. During these tests, we ask participants to
                    perform specific tasks that require the use of the query
                    builder, such as finding all identities with access to an
                    asset and filtering the inventory table. We also gather
                    feedback and ask for additional suggestions for features or
                    design improvements.
                    <br />
                    <br />
                    Through these tests, we learned that users were able to find
                    and use the filters effectively, but struggled with
                    understanding the different filter categories and options.
                    As a result, we made the decision to add explanations and
                    definitions of each filter to the menu to help users better
                    understand their options and choose the right filter for
                    their needs.
                  </p>
                  <p className="propuesta-de-concept-16">
                    As a designer, it&#39;s important to remember that the
                    product&#39;s users are not the only ones who will be
                    interacting with our designs. Developers, who play a crucial
                    role in bringing our designs to life, are also users of our
                    work and need to be able to understand and access the design
                    assets easily.
                    <br />
                    <br />
                    To facilitate this process, I like to schedule meetings with
                    the development team to go over the design together and
                    answer any questions they may have. I also make sure to
                    provide clear organization and labeling of design assets in
                    tools like Figma to make it easy for developers to find what
                    they need.
                    <br />
                    <br />
                    Throughout the implementation process, I remain available to
                    provide support and clarification as needed. By working
                    closely with the development team, I am able to ensure that
                    the final product accurately reflects my design vision and
                    meets the needs of both the end users and the developers.
                  </p>
                  <img
                    className="screen-shot-9"
                    alt="Screen shot"
                    src="/img/screen-shot-2023-01-03-at-12-58-1.png"
                  />
                </div>
              </div>
            </div>
            <footer className="footer">
              <div className="overlap-5">
                <div className="group-31">
                  <div className="galarchenko">
                    Orel Shmueli
                    <br />
                    Product Designer
                    <br />
                    Orelshmueli20@gmail.com
                  </div>
                  <div className="group-32">
                    <a
                      className="logo-linkedin"
                      href="https://www.linkedin.com/in/orel-shmueli/"
                      rel="noopener noreferrer"
                      target="_blank"
                    />
                    <a
                      href="/CV/cv.pdf"
                      target="_blank"
                      className="text-wrapper-9"
                    >
                      cv
                    </a>
                  </div>
                </div>
              </div>
            </footer>
          </div>
        </motion.div>
      ) : (
        <motion.div className="footer-outer-div">
          <div className="outer-div">
            <div className="first-inner-div">
              <Link to="/">
                <img
                  className="back-sign-btn"
                  alt="Btn Sign"
                  src="/img/btn-sign.png"
                />
              </Link>
            </div>
            <div className="query-builder-2">
              <div className="over-query-builder">
                <div className="first-divison first-part">
                  <div className="prod-p">
                    <p>Product Designer</p>
                  </div>
                  <div className="heading-query">
                    <h1>Query Builder</h1>
                  </div>
                  <div className="q-para">
                    Complex systems typically involve large amounts of data and
                    complex relationships between the data. As a result,
                    querying this data can be a challenging and time-consuming
                    task. Query builders provide a way to simplify this process
                    for our users.
                  </div>
                  <div className="small-p">
                    <p>Worked on this project</p>
                  </div>
                  <div className="grid-one">
                    <div className="purple-divs">Product Manager</div>
                    <div className="purple-divs m-5">Product Designer</div>
                    <div className="purple-divs">Backend Developer</div>
                    <div className="purple-divs">Frontend Developer</div>
                  </div>
                </div>
                <div className="first-divison second-part">
                  <img className="inven" src="/img/inventory-1.png" alt="#" />
                  <img className="li" src="/img/list-2.png" alt="#" />
                </div>
              </div>
              <div className="second-division mar-left">
                <div className="overview-h">
                  <h1>Overview</h1>
                </div>
                <div className="big-para">
                  One of my favorite projects as a product designer was the
                  design of a query builder for Authomize. As a complex system
                  designer, I was faced with the challenge of creating a tool
                  for filtering and organizing large sets of data in an
                  intuitive and user-friendly way. The query builder needed to
                  be able to handle a variety of data types, each with their own
                  specific categories and hierarchies. I enjoyed the process of
                  brainstorming and prototyping different solutions, and
                  ultimately delivering a product that not only met the needs of
                  the user, but exceeded their expectations. The query builder
                  has since become an integral part of Authomize's platform, and
                  I am proud of the role I played in its development.
                </div>
              </div>
              <div className="third-division mar-left">
                <video autoPlay muted loop className="video_mov">
                  <source src="/videos/Filters.mp4" type="video/mp4" />
                </video>
              </div>
              <div className="fourth-division mar-left">
                <div className="people-saying">Product Background</div>
                <div className="another-para">
                  Our product is a SaaS solution designed to help companies
                  efficiently manage their identities, data, and access. Our
                  users are typically CISOs, security architects, compliance
                  managers, and SOC analysts who rely on our platform to
                  securely and effectively handle their organizational needs.
                </div>
              </div>
              <div className="fifth-division mar-left">
                <div className="personaa">Personas</div>
                <div className="inside-flex">
                  <div className="first-img">
                    <img
                      class="in-first"
                      alt="Group"
                      src="/img/group-4252.png"
                    />
                  </div>
                </div>
              </div>
              <div className="sixth-divison mar-left">
                <div className="process">The Process</div>
                <div className="one-of-sixth">
                  <div className="number-1 num">1</div>
                  <div className="col-content">
                    <div className="blue-h">Kick off</div>
                    <div className="para-kick">
                      As a product designer on the product team, I follow a
                      structured process to ensure that each project is
                      delivered successfully. This process starts with meeting
                      with the product managers to establish a clear set of
                      requirements and a defined timeline. From there, we work
                      collaboratively to brainstorm and prototype solutions,
                      testing and iterating along the way to ensure that the
                      final product meets the needs of our users.
                    </div>
                    <div className="black-head">Schedule</div>
                    <div>
                      <p className="another-para">
                        This is a big project so we decided to devote 7 full
                        sprints to this project, and divided our time this way:
                        <br />2 sprints for planning, designing the behavior ot
                        the component, and creating the prototype
                        <br />1 sprint for user tests
                        <br />1 sprint for conclusions, updates, and UI final
                        design
                        <br />2 sprints for implementation
                      </p>
                    </div>
                    <div className="black-head">Requirements</div>
                    <div>
                      <p className="another-para">
                        Easy to use and understand
                        <br />
                        Be dynamic so it can be used by different features in
                        the product
                        <br />
                        Have highlighted filters that will be displayed at the
                        top
                        <br />
                        Work smoothly on all browsers
                        <br />
                        all should support server-side filtering
                        <br />
                        When something returns zero results, hide this option
                        from the filter
                        <br />
                        all applied filters should work asynchronously and don’t
                        black out the page experience
                        <br />
                        any component that we need and can be used from
                        open-source resources with a valid license is preferred
                        over a self-developed one, as long as it matches the
                        requirements.
                      </p>
                    </div>
                    <div className="black-head">Challanges</div>
                    <div>
                      <p className="another-para">
                        Every project presents its own unique challenges, and
                        the design of the query builder was no exception. I like
                        to write to myself at the beginning of each project what
                        are the biggest challenges. Some of the key challenges I
                        faced in this project included:
                        <br />
                        Maintaining consistency: As a complex system, our
                        product has many different parts that use filters with
                        varying requirements. It was important to ensure that
                        the query builder was consistent with these requirements
                        and fit seamlessly into the overall product.
                        <br />
                        Balancing ease of use with functionality: Our user base
                        includes both technical and non-technical users, and it
                        was important to strike the right balance between
                        providing advanced configuration options for the
                        technical users and keeping the interface easy to use
                        for all users. Too many options and possibilities could
                        be overwhelming and confusing.
                        <br />
                        Achieving the main purpose: Ultimately, the goal of the
                        query builder was to filter data in the most efficient
                        way possible. It was important to consider this purpose
                        and design the tool in a way that met this need
                        effectively.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="two-of-sixth">
                  <div className="number-2 num">2</div>
                  <div className="col-content">
                    <div className="blue-h">Research</div>
                    <div className="para-kick">
                      <p className="another-para">
                        <span className="another-para">
                          Before diving into the design process, I like to start
                          by gathering as much information as possible about the
                          project at hand. To do this, I typically engage in two
                          types of research:
                          <br />
                        </span>
                        <strong>Secondary research</strong>
                        <span className="another-para">
                          : This involves learning about best practices and
                          reading articles about similar features to get a sense
                          of what has been successful in the past.
                          <br />
                        </span>
                        <strong>Market and competition research</strong>
                        <span className="another-para">
                          : It&#39;s also important to look at how other
                          products have tackled similar problems and gather
                          inspiration from their approaches. This helps me to
                          understand what has already been done so that I can
                          design something that our users will be able to learn
                          quickly how to use at.
                        </span>
                      </p>
                    </div>
                    <div className="qoute-text">
                      <p className="black-qoute">
                        <strong className="strong-text">
                          “Users spend most of their time on other sites
                        </strong>
                        <span>&nbsp;</span>
                        <span className="black-qoute-text">
                          This means that users prefer your site to work the
                          same way as all the other sites they already know”.
                        </span>
                      </p>
                    </div>
                    <div className="blue-h">Jacob's Law</div>
                    <div className="para-kick">
                      <p className="another-para">
                        To understand how our users interact with other
                        products, I like to show the product managers examples
                        of complex filters that I find useful and have them use
                        them while I observe. This helps me to get a better
                        understanding of the user experience and identify any
                        potential pain points.
                        <br />
                        <br />
                        Once I have gathered all of this information, I move on
                        to the fun part: sketching and planning. This is where I
                        get to be creative and start exploring different design
                        concepts and ideas.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="three-of-sixth">
                  <div className="number-3 num">3</div>
                  <div className="col-content sketch-col">
                    <div className="blue-h">sketching and planning</div>
                    <div className="inside-flexx">
                      <div className="sk-img-1">
                         <img
                          src="/img/screen-shot-2023-01-03-at-11-38-1.png"
                          alt="first-sketch"
                          className="sk"
                        /> 
                      </div>
                      <div className="inside-col-flex width-for-para">
                        <div className="black-head">Behavior</div>
                        <div>
                          <p className="another-para-2 beh">
                            Adding filters: by clicking a plus button a menu
                            with the filters types will pop.
                            <br />
                            Removing filters: by hovering over the filter, an X
                            will appear, clicking on the X will delete the
                            filter
                            <br />
                            <br />
                            All filters should be URL-based, so the user can
                            refresh the page or send it to another person with
                            the filters applied.
                            <br />
                            after a filter was applied the user can remove it by
                            clicking a delete icon next to the filter in the
                            filters row.
                            <br />
                            once a filter was applied we should call a function
                            or submit a request ( architectural decision), but
                            the feedback should be immediate.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="inside-flexx">
                      <div className="inside-col-flex width-for-para">
                        <div className="black-head">Dropdown</div>
                        <div>
                          <p className="another-para-2 beh">
                            <br />a list of up to 5 options displayed to the
                            user
                            <br />
                            ability to search with autocomplete
                            <br />
                            support for icons, if the returned result contains
                            one - some will be returned without an icon
                            <br />
                            support for color indicator - a small dot near the
                            item name, will be used for tags colors.
                            <br />
                            support multi-select both in the case of
                            autocompleted values and in the case of a fixed
                            list, if something is selected this should be
                            indicated at the top of the list with a selected
                            checkbox so the user can uncheck that.
                            <br />
                            by hovering over one line, highlight “only” to allow
                            the user to select only this specific row
                            <br />
                            When the filter is in edit mode: display the full
                            list of systems with a small X icon to delete the
                            relevant system
                            <br />
                            When the filter is active and not in an edit mode:
                            display up to one item and a number of other
                            selected items (i.e System: Microsoft (google,
                            GitHub) =&gt; System: Microsoft + 2)
                            <br />
                            What happened if the dropdown is open? as long as
                            the user hasn’t clicked anywhere the dropdown is
                            open
                            <br />
                            When the filter is applied in the filters list
                            without any select option we should display “all”
                          </p>
                        </div>
                      </div>
                      <div className="sk-img-1">
                        <img src={img1} alt="second-sketch" className="sk-2" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="another-three-of-sixth">
                  <div className="number-3 num">3</div>
                  <div className="col-content">
                    <div className="blue-h">Designing & Prototyping</div>
                    <div className="inside-flex-2">
                      <div className="first-img-de">
                        <img
                          src="/img/screen-shot-2023-01-03-at-12-20.png"
                          alt="Design Image"
                          className="de-f"
                        />
                      </div>
                      <div className="col-flex">
                        <div className="col-1">
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="fourth-of-sixth">
                  <div className="number-4 num">4</div>
                  <div className="col-content">
                    <div className="blue-h">Usability tests</div>
                    <div>
                      <p className="another-para">
                        As with any design project, there are always concerns
                        and potential challenges that need to be addressed
                        before testing prototypes with users. In the case of the
                        query builder, some of the specific concerns we had
                        included:
                        <br />
                        Users might not be able to find the &#34;Add Filter&#34;
                        button, which is revealed when the user hovers over the
                        filter area
                        <br />
                        Users might not understand that they need to hover over
                        a filter to reveal the &#34;Remove&#34; button
                        <br />
                        <br />
                        To address these concerns and ensure the best possible
                        user experience, we conducted usability tests with a
                        small group of customers (typically 3-5 individuals). As
                        a small-medium startup, it&#39;s important for us to
                        keep our paying customers happy and make the most of
                        every testing opportunity. During these tests, we ask
                        participants to perform specific tasks that require the
                        use of the query builder, such as finding all identities
                        with access to an asset and filtering the inventory
                        table. We also gather feedback and ask for additional
                        suggestions for features or design improvements.
                        <br />
                        <br />
                        Through these tests, we learned that users were able to
                        find and use the filters effectively, but struggled with
                        understanding the different filter categories and
                        options. As a result, we made the decision to add
                        explanations and definitions of each filter to the menu
                        to help users better understand their options and choose
                        the right filter for their needs.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="usability-image">
                  <img
                    src="/img/screen-shot-2023-01-03-at-12-58-1.png"
                    alt="Usability Image"
                    className="usab"
                  />
                </div>
                <div className="fifth-of-sixth">
                  <div className="number-5 num">5</div>
                  <div className="col-content">
                    <div className="blue-h">Hand-off</div>
                    <div>
                      <p className="another-para">
                        As a designer, it&#39;s important to remember that the
                        product&#39;s users are not the only ones who will be
                        interacting with our designs. Developers, who play a
                        crucial role in bringing our designs to life, are also
                        users of our work and need to be able to understand and
                        access the design assets easily.
                        <br />
                        <br />
                        To facilitate this process, I like to schedule meetings
                        with the development team to go over the design together
                        and answer any questions they may have. I also make sure
                        to provide clear organization and labeling of design
                        assets in tools like Figma to make it easy for
                        developers to find what they need.
                        <br />
                        <br />
                        Throughout the implementation process, I remain
                        available to provide support and clarification as
                        needed. By working closely with the development team, I
                        am able to ensure that the final product accurately
                        reflects my design vision and meets the needs of both
                        the end users and the developers.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footerr">
            <div className="foot-center">
              Orel Shmueli
              <br />
              Product Designer
              <br />
              Orelshmueli20@gmail.com
            </div>
            <div className="links">
              <a href="/CV/cv.pdf" target="_blank" className="cv-class">
                cv
              </a>
              <a
                className="din-logo"
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

import React from "react";
import { Helmet } from "react-helmet";
import Logo from "../../img/logo.svg";

const About = () => {
  return (
    <>
      <Helmet>
        <title>Meu Site | About</title>
      </Helmet>
      <section className="container">
        
        <div className="container-1 ">
          <p className="p-profile">front end developer</p>
          <p className="p-profile">ux/ui designer beginner</p>
        </div>
        <div className="container-2 ">
          <p>
            Lorem Ipsum has been the industry's standard dummy text ever since
            the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book.
          </p>
        </div>
      </section>
    </>
  );
};

export default About;

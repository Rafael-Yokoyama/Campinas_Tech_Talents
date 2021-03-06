import React from "react";
import { Helmet } from "react-helmet";
import Logo from "../../img/logo.svg";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Meu Site | Home</title>
      </Helmet>
      <section className="container">
        <div className="container-item-1">
          <p className="px-1 item-1">
            <img src={Logo} width="270px" />
          </p>
        </div>
        <div className="container-1 ">
          <p className="p-profile">front end developer</p>
          <p className="p-profile">ux/ui designer beginner</p>
        </div>
        <div className="container-2 ">
        <h3>Welcome! </h3>
        <p>Hello, I’m Rafael and here you will know more about me and my projects.</p>
        </div>
      </section>
    </>
  );
};

export default Home;

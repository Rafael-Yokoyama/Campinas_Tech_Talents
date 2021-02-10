import React from "react";
import { Helmet } from "react-helmet";

const Portfolio = () => {
  return (
    <>
      <Helmet>
        <title>Meu Site | Portfolio</title>
      </Helmet>
      <section className="container">
        <section id="projetos">
          <h2>Projetos</h2>
          <article>
            <div>
              <h3>Em contrução</h3>
              <p>Em contrução.</p>
            </div>
          </article>
        </section>
      </section>
    </>
  );
};

export default Portfolio;

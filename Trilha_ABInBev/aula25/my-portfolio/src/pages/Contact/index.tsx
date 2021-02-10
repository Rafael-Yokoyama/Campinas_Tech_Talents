import React from "react";
import Helmet from "react-helmet";
import GitHub from "../../img/github.svg";
import Linkedin from "../../img/linkedin.svg";
import Whats from "../../img/whats.svg";

const Contact = () => {
  return (
    <>
      <Helmet>
        <title>Meu Site | Contact</title>
      </Helmet>
      <section className="container">
        <h1>Contact</h1>

        <ul className="Social">
          <li>
            <a href="https://github.com/Rafael-Yokoyama" target="_blank">
              <img src={GitHub} width="40px" />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/feed/" target="_blank">
              <img src={Linkedin} width="40px" />
            </a>
          </li>
          <li>
            <a href="" target="_blank">
              <img src={Whats} width="40px" />
            </a>
          </li>
        </ul>
        <br />
        <h2> Send me a message </h2>

        <form action="/pagina-processa-dados-do-form" method="post">
          <div>
            <label>Name:</label>
            <input type="text" placeholder="Name" id="nome" />
          </div>
          <div>
            <label>E-mail:</label>
            <input type="email" placeholder="E-mail" />
          </div>
          <div>
            <label>Message:</label>
            <textarea id="msg" placeholder="Message"></textarea>
          </div>
          <button type="button">Enviar</button>
        </form>
      </section>
    </>
  );
};
export default Contact;

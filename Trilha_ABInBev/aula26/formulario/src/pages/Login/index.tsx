import React, { useRef, useState } from "react";
import { Redirect } from "react-router-dom";

const Login = () => {
  const [getUser, setAuthenticar] = useState(false);

  let userInput = useRef<HTMLInputElement>(null);
  let passwordInput = useRef<HTMLInputElement>(null);

  const Form = () => {
    const User = "pao";
    const Password = "123456";
    const username = userInput.current?.value;
    const passwordname = passwordInput.current?.value;

    if (User === username && Password === passwordname) {
      setAuthenticar(true);
    }
  };

  return (
    <>
      <div>
        <h2>Text logar</h2>
        <form>
          <div>
            <input type="text" placeholder="Nome de usuário" ref={userInput} />
          </div>
          <div>
            <input type="password" placeholder="Senha" ref={passwordInput} />
          </div>
          <button onClick={Form}>Entrar</button>
        </form>
      </div>

      {getUser ? <Redirect to="/Home" /> : alert("error")}
    </>
  );
};

export default Login;

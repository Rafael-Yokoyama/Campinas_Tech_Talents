import React, { useEffect, useRef, useState } from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [loginPermission, setPermission] = useState<any>(false);

  const Email = useRef<HTMLInputElement>(null);
  const password = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (localStorage.getItem("accessToken")) {
      setPermission(true);
    }
  }, []);

  const login = () => {
    axios
      .post("http://localhost:4000/users", {
        email: Email.current?.value,
        password: password.current?.value,
      })
      .then((response) => {
        localStorage.setItem("accessToken", response.data.accessToken);
        setPermission(true);
      });
  };

  return (
    <>
      {loginPermission ? (
        <Redirect to="/products" />
      ) : (
        <>
          <h1> BORA BORA </h1>
          <input type="email" ref={Email} />
          <input type="password" ref={password} />
          <input type="submit" onClick={login} />
        </>
      )}
    </>
  );
};

export default Login;

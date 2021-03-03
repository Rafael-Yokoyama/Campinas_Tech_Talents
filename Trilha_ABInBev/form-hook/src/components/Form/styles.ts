import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  padding-top: 1.5rem;
  background: #fff;
  text-align: center;
`;

export const Form = styled.form`
  margin: 0 auto;
  width: 25rem;
  padding: 0.4rem 2rem;
  border: 1px solid #fff;
  display: flex;
  flex-direction: column;
  border-radius: 20px;
  box-shadow: 2px 2px 15px 5px rgba(0, 0, 0, 0.3);
  .TextField {
    width: 100%;
    margin-bottom: 0.6rem;
  }
  p {
    margin-left: 12px;
    font-size: 0.8rem;
    color: red;
  }
  .casado {
    color: #808070;
  }
  button {
    width: 100%;
    margin: 0 auto;
  }

  .radio {
    margin-bottom: 1rem;
  }
`;

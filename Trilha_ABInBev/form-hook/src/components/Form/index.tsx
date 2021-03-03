import React from "react";
import { useForm } from "react-hook-form";
import { Form, Container } from "./styles";
import { Button, TextField } from "@material-ui/core";

const FormHook = () => {
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = (data: any) => console.log(data);

  const casado = watch("casado");

  return (
    <Container>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <h2>Cadastro</h2>
        <TextField
          className="TextField"
          variant="outlined"
          label="Nome"
          name="nome"
          inputRef={register({ required: true })}
        />
        {errors.nome && <p>Campo obrigatório</p>}

        <TextField
          className="TextField"
          variant="outlined"
          label="Cidade"
          name="cidade"
          inputRef={register}
        />
        <TextField
          className="TextField"
          variant="outlined"
          label="E-mail"
          type="email"
          name="email"
          inputRef={register({
            required: true,
            pattern: {
              value: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
              message: "E-mail inválido",
            },
          })}
        />
        {errors.email?.type === "required" && <p>Campo obrigatório</p>}
        {errors.email?.type === "pattern" && <p>E-mail inválido</p>}

        <TextField
          className="TextField"
          variant="outlined"
          label="Idade"
          type="number"
          name="idade"
          inputRef={register({ required: true, min: 18 })}
        />
        {errors.idade?.type === "required" && <p>Campo obrigatório</p>}
        {errors.idade?.type === "min" && (
          <p>Necessário ser maior de 18 anos.</p>
        )}

        <label className="casado">Casado(a)?</label>
        <div>
          <input
            type="radio"
            name="casado"
            value="true"
            ref={register({ required: true })}
          />
          sim
          <input
            className="radio"
            type="radio"
            name="casado"
            value="false"
            ref={register({ required: true })}
          />
          não
          {casado === "true" && (
            <div>
              <TextField
                className="TextField"
                variant="outlined"
                label="Nome do cônjuge"
                type="text"
                name="conjuge"
                inputRef={register}
              />
            </div>
          )}
          {errors.casado && <p>Campo obrigatório</p>}
        </div>
        <Button type="submit" variant="contained" color="primary">
          Enviar
        </Button>
      </Form>
    </Container>
  );
};

export default FormHook;

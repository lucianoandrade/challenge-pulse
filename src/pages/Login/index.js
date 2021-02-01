import React from "react";
import { Link } from "react-router-dom";

import PageContainer from "../../components/features/PageContainer/PageContainer";
import Input from "../../components/elements/Input";
import Button from "../../components/elements/Button";

import { Container, Title, Form, Links } from "./styles";

function Login() {
  return (
    <PageContainer>
      <Container>
        <Title>Acesse sua conta</Title>
        <Form>
          <Input 
            id="email"
            type="email"
            name="email"
            placeholder="Ex: seunome@email.com"
            label="E-mail"
            required={true}
          />
          <Input 
              id="senha"
              type="password"
              name="senha"
              placeholder="Sua Senha"
              label="Senha"
              required={true}
          />
          <Button>Entrar</Button>
        </Form>
        <Links>
          <Link to="#">Esqueci minha senha</Link>
        </Links>
        <Links>
          <Link to="#">Ainda não tenho conta</Link>
        </Links>
      </Container>
    </PageContainer>
  );
};

export default Login;
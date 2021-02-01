import React from "react";

import PageContainer from "../../components/features/PageContainer/PageContainer";
import Input from "../../components/elements/Input";
import Button from "../../components/elements/Button";

import { Container, Title, Form } from "./styles";

function Register() {
  return (
    <PageContainer>
      <Container>
        <Title>Crie sua conta</Title>
        <Form>
          <Input 
            id="nome"
            type="text"
            name="nome"
            placeholder="Seu nome aqui"
            label="Nome"
            required={true}
          />
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
          <Input 
            id="confirmSenha"
            type="password"
            name="confirmSenha"
            placeholder="Confirme sua senha"
            label="Confirme sua senha"
            required={true}
          />
          <Button>Criar conta</Button>
        </Form>
      </Container>
    </PageContainer>
  );
};

export default Register;
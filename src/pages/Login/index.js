import React from "react";
import { Link } from "react-router-dom";

import PageContainer from "../../components/features/PageContainer/PageContainer";
import Input from "../../components/elements/Input";
import Button from "../../components/elements/Button";

function Login() {
  return (
    <PageContainer>
      <div className="login">
        <h2 className="titulo-page">Acesse sua conta</h2>
        <form className="acesso">
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
        </form>
        <div className="esqueci-senha">
          <Link to="#">Esqueci minha senha</Link>
        </div>
        <div className="sem-conta">
          <Link to="#">Ainda não tenho conta</Link>
        </div>
      </div>
    </PageContainer>
  );
};

export default Login;
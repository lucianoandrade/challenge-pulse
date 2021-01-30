import React from "react";
import { Link } from "react-router-dom";
import PageContainer from "../../components/features/PageContainer/PageContainer";

function Login() {
  return (
    <PageContainer>
        <div className="login">
          <h2 className="titulo-page">Acesse sua conta</h2>
          <form className="acesso">
            <fieldset>
              <input
                id="email"
                type="email"
                name="email"
              />
              <label className="label" htmlFor="email">
                E-mail
              </label>
            </fieldset>
            <fieldset>
              <input
                id="senha"
                type="password"
                name="senha"
              />
              <label className="label" htmlFor="senha">
                Senha
              </label>
            </fieldset>
            <input
              className="btnEntrar"
              type="submit"
              value="Entrar"
            />
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
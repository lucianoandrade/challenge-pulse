import React, {useState} from "react";
import { Link, useHistory } from "react-router-dom";
import PageContainer from "../../components/features/PageContainer/PageContainer";
import Input from "../../components/elements/Input";
import Button from "../../components/elements/Button";

import { Container, Title, Form, Links } from "./styles";

function Login() {

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [error, setError] = useState(false);
  const [errorEmail, setErrorEmail] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const userActive = JSON.parse(localStorage.getItem('userActive')) || [];
  const allUsers = JSON.parse(localStorage.getItem('users')) || [];
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    if(senha.length < 6) {
      setError(true);
      setErrorMessage("Mínimo 6 caracteres");
      setSenha("");
    } else if (allUsers.length === 0) {
      setErrorMessage("Ainda não existe cadastros, seja o primeiro");
      setError(true);
      setErrorEmail(true);
      setEmail("");
      setSenha("");
    } else {
      // eslint-disable-next-line
      allUsers.map(e => {
        if(e.email === email && e.senha === senha) {
          userActive.push({name: e.name, email: e.email})
          localStorage.setItem('userActive', JSON.stringify(userActive));
          history.push("/");
        } else {
          setError(true);
          setErrorEmail(true);
          setErrorMessage("E-mail ou senha incorreto");
        }
      });
    }
  }

  return (
    <PageContainer>
      <Container>
        <Title>Acesse sua conta</Title>
        <Form onSubmit={handleSubmit}>
          <Input 
            id="email"
            type="email"
            name="email"
            placeholder="Ex: seunome@email.com"
            label="E-mail"
            required={true}
            value={email}
            error={errorEmail ? true : false}
            errorMessage={errorEmail ? errorMessage : ''}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input 
            id="senha"
            type="password"
            name="senha"
            placeholder="Sua Senha"
            label="Senha"
            required={true}
            error={error}
            errorMessage={errorMessage}
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
          />
          <Button>Entrar</Button>
        </Form>
        <Links>
          <Link to="/cadastro">
            <Button color="alternative" >
              criar conta
            </Button>
          </Link>
        </Links>
      </Container>
    </PageContainer>
  );
};

export default Login;
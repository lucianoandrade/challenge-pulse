import React, {useState} from "react";
import { useHistory } from "react-router-dom";
import PageContainer from "../../components/features/PageContainer/PageContainer";
import Input from "../../components/elements/Input";
import Button from "../../components/elements/Button";
import { Container, Title, Form } from "./styles";

const Register = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmSenha, setConfirmSenha] = useState('');
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const allUsers = JSON.parse(localStorage.getItem('users')) || [];
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    if(senha.length < 6) {
      setError(true);
      setErrorMessage("Mínimo 6 caracteres");
      setSenha("");
      setConfirmSenha("");
    } else if (senha !== confirmSenha) {
      setError(true);
      setErrorMessage("As senhas digitadas não estão idênticas.");
      setSenha("");
      setConfirmSenha("");
    } else {
      allUsers.push({name, email, senha});
      localStorage.setItem('users', JSON.stringify(allUsers));
      history.push("/login");
    }
  }
  
  return (
    <PageContainer>
      <Container>
        <Title>Crie sua conta</Title>
        <Form onSubmit={handleSubmit}>
          <Input 
            id="nome"
            type="text"
            name="nome"
            placeholder="Seu nome aqui"
            label="Nome"
            required={true}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Input 
            id="email"
            type="email"
            name="email"
            placeholder="Ex: seunome@email.com"
            label="E-mail"
            required={true}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input 
            id="senha"
            type="password"
            name="senha"
            placeholder="Sua Senha"
            label="Senha"
            required={true}
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            error={error}
            errorMessage={errorMessage}
          />
          <Input 
            id="confirmSenha"
            type="password"
            name="confirmSenha"
            placeholder="Confirme sua senha"
            label="Confirme sua senha"
            required={true}
            value={confirmSenha}
            onChange={(e) => setConfirmSenha(e.target.value)}
            error={error}
            errorMessage={errorMessage}
          />
          <Button>Criar conta</Button>
        </Form>
      </Container>
    </PageContainer>
  );
};

export default Register;
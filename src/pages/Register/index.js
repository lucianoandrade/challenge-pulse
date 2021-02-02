import React, {useState, useEffect} from "react";
import { useHistory } from "react-router-dom";
import PageContainer from "../../components/features/PageContainer/PageContainer";
import Input from "../../components/elements/Input";
import Button from "../../components/elements/Button";
import { Container, Title, Form, AvatarIcon } from "./styles";

const Register = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmSenha, setConfirmSenha] = useState('');
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [thumbnailFile, setThumbnailFile] = useState("");
  const [preview, setPreview] = useState("");
  const userActive = JSON.parse(localStorage.getItem('userActive')) || [];
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
      const imagethumb = preview !== '' ? preview : ''
      allUsers.push({name, email, senha, image: imagethumb});
      localStorage.setItem('users', JSON.stringify(allUsers));
      userActive.length !== 0 ? history.push("/") : history.push("/login")
    }
  }

  useEffect(() => {
    setPreview(thumbnailFile ? URL.createObjectURL(thumbnailFile) : <AvatarIcon />);
  }, [thumbnailFile])

  const onChangeFile = async (e) => {
    setThumbnailFile(e.target.files[0])   
  }
  
  return (
    <PageContainer>
      <Container>
        <Title>Criar usuário</Title>
        <Form onSubmit={handleSubmit}>
          <Input 
            id='input-image'
            type="file"
            name='input-image'
            accept="image/*"
            onChange={onChangeFile}
            style={{visibility: "hidden", position: "fixed", left: "-9000px"}}
            label={thumbnailFile ? <img src={`${preview}`} style={{
                width: '70px', height: '70px', borderRadius: '50%'}} 
                alt="preview da sua imagem"/> : <AvatarIcon />}
          />
          <Input 
            id="nome"
            type="text"
            name="nome"
            placeholder="Nome aqui"
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
            placeholder="Senha"
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
            placeholder="Confirme a senha"
            label="Confirme a senha"
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
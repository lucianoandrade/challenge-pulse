import React, {useState} from "react";
import { Redirect, useHistory } from "react-router-dom"; 
import PageContainer from "../../components/features/PageContainer/PageContainer";
import Card from "../../components/elements/Card";
import Input from "../../components/elements/Input";
import Button from "../../components/elements/Button";
import { 
  Container, 
  Title
} from "./styles";

function EditRegistration(props) {
  const history = useHistory();
  const userItem = props?.location?.state?.userItem || null;
  const userIndex = props?.location?.state?.userIndex || null;
  const [name, setName] = useState(userItem?.name || '');
  const [email, setEmail] = useState(userItem?.email|| '');
  const usersActive = JSON.parse(localStorage.getItem('userActive')) || [];
  const users = JSON.parse(localStorage.getItem('users')) || [];

  if(usersActive.length === 0) return <Redirect to="/login" />;

  const registrationChange = () => {
    users.splice(userIndex, 1);
    users.push({name, email, senha: userItem.senha})
    localStorage.setItem('users', JSON.stringify(users));
    history.push("/")
  }


  return (
    <PageContainer>
      <Container>
        <Title>Editar cadastro</Title>
        <Card>
          <Input 
            id="nome"
            type="text"
            name="nome"
            placeholder="Seu nome aqui"
            label="Nome"
            required={true}
            defaultValue={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Input 
            id="email"
            type="email"
            name="email"
            placeholder="Ex: seunome@email.com"
            label="E-mail"
            required={true}
            defaultValue={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Button onClick={() => registrationChange()}>Salvar Edição</Button>
        </Card>
      </Container>
    </PageContainer>
  );
};

export default EditRegistration;
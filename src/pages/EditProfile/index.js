import React, {useState} from "react";
import PageContainer from "../../components/features/PageContainer/PageContainer";
import Card from "../../components/elements/Card";
import Input from "../../components/elements/Input";
import Button from "../../components/elements/Button";
import { 
  Container, 
  Title
} from "./styles";

function EditRegistration(props) {
  const user = props.location.state.user;
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);

  return (
    <PageContainer>
      <Container>
        <Title>Editar cadastro</Title>
        <Card>
          <Input 
            id="email"
            type="email"
            name="email"
            placeholder="Ex: seunome@email.com"
            label="E-mail"
            required={true}
            defaultValue={name}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input 
            id="nome"
            type="text"
            name="nome"
            placeholder="Seu nome aqui"
            label="Nome"
            required={true}
            defaultValue={email}
            onChange={(e) => setName(e.target.value)}
          />
          <Button>Salvar Edição</Button>
        </Card>
      </Container>
    </PageContainer>
  );
};

export default EditRegistration;
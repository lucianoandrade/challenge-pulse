import React from "react";
import { Redirect, useHistory } from "react-router-dom";
import PageContainer from "../../components/features/PageContainer/PageContainer";
import Card from "../../components/elements/Card";
import Button from "../../components/elements/Button";
import { 
  Container, 
  Title, 
  Icons, 
  AvatarIcon, 
  DeleteIcon, 
  EditIcon, 
  Content,
  Logo 
} from "./styles";

function Home() {
  const history = useHistory();
  
  const users = JSON.parse(localStorage.getItem('users')) || [];
  const usersActive = JSON.parse(localStorage.getItem('userActive')) || [];

  if(usersActive.length === 0 || users.length === 0) {
    return (
    <Redirect to="/login" />
    )
  }

  const deleteUser = (e) => {
    const index =  users.indexOf(e);
    users.splice(index, 1);
    localStorage.setItem('users', JSON.stringify(users));
    window.document.location.reload();
  }

  return (
    <PageContainer>
      <Container>
        <Logo />
        <Title>Pessoas cadastradas</Title>
        <Button onClick={() => history.push("/cadastro")}>
          Adicionar mais usuários
        </Button>
        <Button onClick={() => {
            localStorage.clear();
            window.document.location.reload()
          }}>
          Deslogar e Resetar aplicação 
        </Button>
          {users.map((item, index) => {
            return (
              <>
                <Card key={index}>
                  <Icons>
                  {!item.image.type ? <img src={`${item.image}`} style={{
                    width: '50px', height: '50px', borderRadius: '50%'}} 
                    alt="Imagem de perfil" /> : <AvatarIcon />
                  }
                    <div>
                      <EditIcon onClick={() => history.push("/editar-cadastro", {userItem: item, userIndex: index})}/>
                      <DeleteIcon onClick={() => deleteUser(item)}/>
                    </div>
                  </Icons>
                  <Content>{`Nome: ${item.name}`}</Content>
                  <Content>{`E-mail: ${item.email}`}</Content>
                </Card>
              </>
            )
          })}
      </Container>
    </PageContainer>
  );
};

export default Home;
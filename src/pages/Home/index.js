import React from "react";
import { Redirect, useHistory } from "react-router-dom";
import PageContainer from "../../components/features/PageContainer/PageContainer";
import Card from "../../components/elements/Card";
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
  
  const users = JSON.parse(localStorage.getItem('users'));
  if(!users) {
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
          {users.map((item, index) => {
            return (
              <>
                <Card key={index}>
                  <Icons>
                    <AvatarIcon />
                    <div>
                      <EditIcon onClick={() => history.push("/editar-cadastro", {user: item})}/>
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
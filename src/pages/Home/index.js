import React from "react";
import { Redirect, useHistory } from "react-router-dom";
import PageContainer from "../../components/features/PageContainer/PageContainer";
import { 
  Container, 
  Title, 
  Card, 
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

  return (
    <PageContainer>
      <Container>
        <Logo />
        <Title>Pessoas cadastradas</Title>
          {users.map((item, index) => {
            return (
              <>
                <Card key={index} 
                  onClick={() => history.push("/editar-cadastro", {user: item})}
                >
                  <Icons>
                    <AvatarIcon />
                    <div>
                      <EditIcon onClick={() => history.push("/editar-cadastro", {user: item})}/>
                      <DeleteIcon />
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
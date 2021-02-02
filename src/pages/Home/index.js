import React from "react";
import { Redirect } from "react-router-dom";
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
                <Card key={index}>
                  <Icons>
                    <AvatarIcon />
                    <div>
                      <EditIcon />
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
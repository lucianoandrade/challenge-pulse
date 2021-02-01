import React from "react";
import { Redirect } from "react-router-dom";
import PageContainer from "../../components/features/PageContainer/PageContainer";
import { Container, Title} from "./styles";

function Home() {

  const users = localStorage.getItem('users');
   if(!users) {
     return (
      <Redirect to="/login" />
     )
   }

  return (
    <PageContainer>
      <Container>
        <Title>Home</Title>
      </Container>
    </PageContainer>
  );
};

export default Home;
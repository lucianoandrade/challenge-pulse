import React from "react";
import PageContainer from "../../components/features/PageContainer/PageContainer";
import { 
  Container, 
  Title
} from "./styles";

function EditRegistration(props) {
  console.log(props.location.state.user);
  // const users = JSON.parse(localStorage.getItem('users'));
  return (
    <PageContainer>
      <Container>
        <Title>Editar cadastro</Title>
      </Container>
    </PageContainer>
  );
};

export default EditRegistration;
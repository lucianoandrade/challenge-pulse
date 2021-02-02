import styled from 'styled-components';

export const Container = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    margin: 50px 0;

    @media screen and (min-height: 730px){
        height: 100vh;
    }
`;

export const Title = styled.h2`
    color: ${({ theme }) => theme.palette.lightBlack};
`;

export const Form = styled.form`
    width: 100%;
    min-width: 300px;
    max-width: 425px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 15px;
`;
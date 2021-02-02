import styled from 'styled-components';

export const Container = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    margin: 50px 0 150px;

    @media screen and (min-height: 730px){
        height: 100vh;
    }
`;

export const Title = styled.h2`
    color: ${({ theme }) => theme.palette.lightBlack};
    margin-bottom: 20px;
`;
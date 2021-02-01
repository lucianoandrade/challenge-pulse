import styled from 'styled-components';

export const Container = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin-top: 50px;
`;

export const Title = styled.h2`
    color: ${({ theme }) => theme.palette.lightBlack};
    margin-bottom: 20px;
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

export const Links = styled.div`
    margin-top: 10px;
`;
import styled from 'styled-components';

export const Card = styled.div`
    width: 95%;
    min-width: 300px;
    max-width: 425px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 10px;
    border-radius: 4px;
    background-color: ${({ theme }) => theme.palette.white};
    box-shadow: 0px 2px 2px 0px rgba(0,0,0,0.5);
    margin-bottom: 15px;
    cursor: pointer;
`;
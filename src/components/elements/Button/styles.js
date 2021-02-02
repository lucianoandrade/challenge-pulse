import styled from 'styled-components';

export const Button = styled.button`
    background-color: ${props => props.color === "alternative" ? 
     props.theme.palette.white : props.theme.palette.primary}};
    border: none;
    color:  ${props => props.color === "alternative" ? 
        props.theme.palette.primary : props.theme.palette.gray}};
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 600;
    font-size: 14px;
    height: 40px;
    border-radius: 4px;
    padding: 0 15px;
    transition: all linear .1s;
    box-shadow: 0px 2px 2px 0px rgba(0,0,0,0.5);
    margin-bottom: 40px;
    
    &:hover {
        color: ${props => props.color === "alternative" ? 
        props.theme.palette.red : props.theme.palette.white}};
    }
`;
import styled from 'styled-components';

export const Field = styled.fieldset`
    display: flex;
    flex-direction: column;
    padding: 15px 0;
    border: none;
`;
export const Label = styled.label`
    position: absolute;
    color: ${props => props.theme.palette.label};
    font-size: 12px;
    font-style: normal;  
    font-weight: 600;
    margin-top: -15px;
`;
export const Input = styled.input`
    border: ${props => props.error ? `1px solid ${props.theme.palette.red}` :'none'}};
    border-bottom: ${props => props.error ? `1px solid ${props.theme.palette.red}` : 
        `1px solid ${props.theme.palette.borderInput}`}};
    padding: 15px 0;
    background-color: ${props => props.theme.palette.white};
`;

export const ErrorMessage = styled.p`
    color: ${props => props.theme.palette.red};
    margin-top: 5px;
    padding: 0;
    font-size: 12px;
`;
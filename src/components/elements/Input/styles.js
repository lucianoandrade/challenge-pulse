import styled from 'styled-components';

export const Field = styled.fieldset`
    display: flex;
    flex-direction: column;
    padding: 15px 0;
    border: none;
`;
export const Label = styled.label`
    position: absolute;
    color: #888;
    font-size: 12px;
    font-style: normal;  
    font-weight: 600;
    margin-top: -15px;
`;
export const Input = styled.input`
    border: none;
    border-bottom: 1px solid #979797;
    padding: 15px 0;
    background-color: #f9f9f9;
`;
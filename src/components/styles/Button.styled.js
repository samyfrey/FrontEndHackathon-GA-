import styled from 'styled-components'

export const Button = styled.button`
    border-radius: 10px;
    border: none;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
    cursor: pointer;
    font-size: 16px;
    font-weight: 700;
    padding: 12px 25px;
    background-color: #F7A125;
    color: #ffffff;

    &:hover {
        opacity: 0.9;
        transform: scale(0.98);
    }
`
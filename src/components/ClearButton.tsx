import styled from 'styled-components';

export const ClearButton = styled.button`
    border: none;
    background-color: transparent;
    color: ${({ theme }) => theme.color.white[0]};
    text-transform: uppercase;
    text-decoration: underline;
    padding: 10px 10px;
`;

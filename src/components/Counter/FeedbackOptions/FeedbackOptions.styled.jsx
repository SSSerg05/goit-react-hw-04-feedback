import styled from '@emotion/styled';

export const Button = styled.button`
  display: inline-block;
  width: 100px;
  padding: 20px;
  margin: 10px;
  border: none;
  outline: 1px solid black;
  border-radius: 10px;
  text-transform: capitalize;
  transition: background-color 150ms ease-in, 
              font-weight 150ms ease-in;

  &:hover, &:active {
    cursor: pointer;
    font-weight: 700;
    letter-spacing: 0.03rem;  
    background-color: cyan;
    border: 1px solit black;
  }

  &:active {
    background-color: tomato;
    transition: background-color 150ms linear;
  }
`
import React from 'react';
import styled from 'styled-components';
import { CoalaGreen, CoalaGrey } from '../config';

const Container = styled.div`
  position: absolute;
  -webkit-box-shadow: 2px 1px 17px -3px rgba(0, 0, 0, 0.42);
  box-shadow: 2px 1px 17px -3px rgba(0, 0, 0, 0.42);
  width: 180px;
  top: 55px;
  right: -30px;
  background-color: #ffffff;
  ul {
    list-style: none;
    padding: 0px;
    margin: 0;
    li {
      line-height: 3rem;
      font-size: 16px;
      font-weight: 500;
      height: 48px;
      width: 100%;
      margin: 0;
      padding-left: 16px;
      transition: 0.3s ease-in;
      cursor: pointer;
    }
    li:hover {
      background-color: ${CoalaGrey};
      color: ${CoalaGreen};
    }
  }
`;
function StackMore({ stacks }) {
  return (
    <Container>
      <ul>
        {stacks.map(stack => (
          <li key={stack.name}>{stack.name}</li>
        ))}
      </ul>
    </Container>
  );
}

export default StackMore;

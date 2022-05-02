import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useQuery } from 'react-query';
import { useDispatch } from 'react-redux';
import { CoalaGreen, CoalaGrey, language } from '../config';
import { getfilterContentsAPI } from '../api/content';
import { LOAD_CONTENTS_SUCCESS } from '../reducer/content';

const Container = styled.div`
  position: absolute;
  -webkit-box-shadow: 2px 1px 17px -3px rgba(0, 0, 0, 0.42);
  box-shadow: 2px 1px 17px -3px rgba(0, 0, 0, 0.42);
  height: 460px;
  overflow-y: scroll;
  width: 200px;
  top: 40px;
  right: -70px;
  background-color: #ffffff;
  z-index: 1000;
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
function StackMore({ closeMenuList }) {
  const dispatch = useDispatch();
  const handleStackContents = (e, stack) => {
    e.stopPropagation(); // 버블링 방지.
    getfilterContentsAPI({ stack }).then(contents => {
      dispatch({
        type: LOAD_CONTENTS_SUCCESS,
        data: contents.data.data,
      });
      closeMenuList(false);
    });
  };

  return (
    <Container>
      <ul>
        {language.map(stack => (
          <li onClick={e => handleStackContents(e, stack)} key={stack}>
            {stack}
          </li>
        ))}
      </ul>
    </Container>
  );
}

export default StackMore;

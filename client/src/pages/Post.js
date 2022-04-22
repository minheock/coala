import '@toast-ui/editor/dist/toastui-editor.css';
import '@toast-ui/editor-plugin-code-syntax-highlight/dist/toastui-editor-plugin-code-syntax-highlight.css';
import codeSyntaxHighlight from '@toast-ui/editor-plugin-code-syntax-highlight';
import { Editor } from '@toast-ui/react-editor';
import React, { useState } from 'react';
import styled from 'styled-components';
import Prism from 'prismjs';
import 'prismjs/themes/prism.css';
import { LeftOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router';
import { Tag } from 'antd';
import { CoalaGreen, language, colors } from '../config';

const Container = styled.div`
  width: 95%;
  margin: auto;
  height: 100vh;
  form {
    height: 70%;
    width: 100%;
  }
  .title-input {
    border: none;
    width: 100%;
    height: 80px;
    font-size: 30px;
    font-weight: 700;
  }
  .title-input:focus {
    outline: none;
  }
  .selectStack {
    font-size: 18px;
    font-weight: 700;
    cursor: pointer;
    transition: 0.1s ease-in;
    margin-bottom: 0;
  }
  .submin-container {
    margin-top: 1rem;
    font-size: 16px;
    font-weight: 700;
  }
  .submit-btn {
    width: 95px;
    height: 37px;
    color: white;
    background-color: ${CoalaGreen};
    border: none;
    border-radius: 4px;
    cursor: pointer;
    margin-left: 1.5rem;
  }
  .backhome {
    border: none;
    background-color: transparent;
    display: inline-block;
    cursor: pointer;
    p {
      display: inline-block;
      transition: 0.1s ease-in;
    }
  }
  .backhome:hover {
    p {
      transform: translateX(10%);
    }
  }
  .tag {
    cursor: pointer;
  }
  .selected-tag {
    line-height: 30px;
    font-size: 19px;
    height: 30px;
    margin-bottom: 1rem;
  }
`;

function Post() {
  const navigate = useNavigate();
  const [tag, setTag] = useState(null);
  const handleSubmit = e => {
    e.preventDefault();
    console.log('hello');
  };
  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <input className="title-input" placeholder="제목을 입력하세요" />
        {tag ? (
          <Tag
            closable
            onClose={() => setTag(null)}
            className="selected-tag"
            color={tag.color}
          >
            {tag.stack}
          </Tag>
        ) : null}
        {tag ? null : <p className="selectStack">스택을 한개만 선택해주세요</p>}
        {tag ? null : (
          <div className="stacks">
            {language.map(stack => {
              const randomColorIdx = Math.floor(Math.random() * colors.length);
              return (
                <Tag
                  onClick={() =>
                    setTag({ stack, color: colors[randomColorIdx] })
                  }
                  className="tag"
                  color={colors[randomColorIdx]}
                  key={stack}
                >
                  {stack}
                </Tag>
              );
            })}
          </div>
        )}

        <Editor
          height="100%"
          previewStyle="vertical"
          plugins={[[codeSyntaxHighlight, { highlighter: Prism }]]}
        />
        <div className="submin-container">
          <botton onClick={() => navigate('/')} className="backhome">
            <LeftOutlined />
            <p>나가기</p>
          </botton>
          <button className="submit-btn" type="submit">
            출간하기
          </button>
        </div>
      </form>
    </Container>
  );
}

export default Post;

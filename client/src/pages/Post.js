import '@toast-ui/editor/dist/toastui-editor.css';
import { Editor } from '@toast-ui/react-editor';
import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { LeftOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router';
import { Tag } from 'antd';
import { CoalaGreen, language, colors, MView, SView } from '../config';
import uploadFiles from '../firebase';

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
  const [tagsInfo, setTagsInfo] = useState([]);
  const [title, setTitle] = useState('');
  const [tag, setTag] = useState(null);
  const [innerWidth, setInnerWidth] = useState(MView);
  const [content, setContent] = useState('');
  const editorRef = useRef();

  const contentHandler = () => {
    setContent(editorRef.current?.getInstance().getMarkdown() || '');
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (title && tag && editorRef.current) {
      const contentInfo = {
        title,
        stack: tag.stack,
        editorBody: editorRef.current.getInstance().getHTML(),
      };
      console.log(contentInfo);
    }
  };
  const handleResize = () => {
    setInnerWidth(window.innerWidth);
  };

  useEffect(() => {
    if (editorRef.current) {
      editorRef.current.getInstance().removeHook('addImageBlobHook');
      editorRef.current
        .getInstance()
        .addHook('addImageBlobHook', (blob, callback) => {
          // 이미지 파이어베이스 업로드
          // callback(data.location, 'imageURL') 은 업로드에 성공한 이미지의 URL주소를 담아 ![](주소) 형식으로 담아주는 함수를 의미합니다.
          uploadFiles(blob).then(imgPath => callback(imgPath, 'imageURL'));
        });
    }
  }, []);

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // 스택별 언어들 가져올때 무작위로 색을 가져온다 처음렌더링할때만 실행.
  useEffect(() => {
    setTagsInfo(
      language.map(stack => {
        const randomColorIdx = Math.floor(Math.random() * colors.length);
        return { stack, color: colors[randomColorIdx] };
      }),
    );
  }, []);

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <input
          className="title-input"
          value={title}
          onChange={e => setTitle(e.target.value)}
          placeholder="제목을 입력하세요"
        />
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
            {tagsInfo.map(stackInfo => (
              <Tag
                onClick={() =>
                  setTag({ stack: stackInfo.stack, color: stackInfo.color })
                }
                className="tag"
                color={stackInfo.color}
                key={stackInfo.stack}
              >
                {stackInfo.stack}
              </Tag>
            ))}
          </div>
        )}

        <Editor
          height="100%"
          initialValue={content}
          previewStyle={innerWidth < SView ? 'tab' : 'vertical'}
          initialEditType="markdown"
          onChange={contentHandler}
          ref={editorRef}
        />
        <div className="submin-container">
          <button
            type="button"
            onClick={() => navigate('/')}
            className="backhome"
          >
            <LeftOutlined />
            <p>나가기</p>
          </button>
          <button className="submit-btn" type="submit">
            출간하기
          </button>
        </div>
      </form>
    </Container>
  );
}

export default Post;

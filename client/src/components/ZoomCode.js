import React, { useState } from 'react';
import AceEditor from 'react-ace';
import styled from 'styled-components';
import { CloseOutlined } from '@ant-design/icons';
import { useDispatch } from 'react-redux';
import { CoalaGreen } from '../config';

import 'ace-builds/src-noconflict/mode-javascript';
import 'ace-builds/src-noconflict/mode-c_cpp';
import 'ace-builds/src-noconflict/mode-python';
import 'ace-builds/src-noconflict/mode-css';
import 'ace-builds/src-noconflict/mode-csharp';
import 'ace-builds/src-noconflict/mode-dart';
import 'ace-builds/src-noconflict/mode-dockerfile';
import 'ace-builds/src-noconflict/mode-golang';
import 'ace-builds/src-noconflict/mode-html';
import 'ace-builds/src-noconflict/mode-java';
import 'ace-builds/src-noconflict/mode-json';
import 'ace-builds/src-noconflict/mode-julia';
import 'ace-builds/src-noconflict/mode-kotlin';
import 'ace-builds/src-noconflict/mode-markdown';
import 'ace-builds/src-noconflict/mode-matlab';
import 'ace-builds/src-noconflict/mode-php';
import 'ace-builds/src-noconflict/mode-powershell';
import 'ace-builds/src-noconflict/mode-ruby';
import 'ace-builds/src-noconflict/mode-sql';
import 'ace-builds/src-noconflict/mode-typescript';
import 'ace-builds/src-noconflict/mode-swift';
import 'ace-builds/src-noconflict/mode-mysql';
import 'ace-builds/src-noconflict/mode-graphqlschema';

import 'ace-builds/src-noconflict/theme-monokai';
import 'ace-builds/src-noconflict/ext-language_tools';
import { INIT_ZOOM_CHAT_CODE } from '../reducer/chat';

const Container = styled.div`
  position: absolute;
  display: flex;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 5, 12, 0.5);
  z-index: 100;
  justify-content: center;
  align-items: center;
  .codeEditor-box {
    display: flex;
    flex-direction: column;
    align-items: center;
    .codeEditor-info {
      background-color: white;
      display: flex;
      justify-content: space-between;
      width: 100%;
      padding: 6px 6px 4px 6px;
      border-radius: 5px 5px 0px 0px;
    }
    .close-codeEditor {
      position: absolute;
      font-size: 40px;
      right: 0.2rem;
      top: 0.2rem;
      font-weight: 700;
      color: white;
      cursor: pointer;
    }
    .lang-select {
      width: 180px;
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
  }
`;
function ZoomCode({ codeInfo }) {
  const dispatch = useDispatch();
  const [constCode, setConstCode] = useState(codeInfo.editorValue);
  const closeCodeEditor = () => {
    dispatch({
      type: INIT_ZOOM_CHAT_CODE,
    });
  };

  return (
    <Container>
      <div className="codeEditor-box">
        <CloseOutlined onClick={closeCodeEditor} className="close-codeEditor" />
        <div className="codeEditor-info">
          <p>{codeInfo.language}</p>
        </div>
        <AceEditor
          readOnly
          className="codeEditor"
          mode={codeInfo.language}
          theme="monokai"
          value={constCode}
          name="UNIQUE_ID_OF_DIV"
          editorProps={{ $blockScrolling: true }}
        />
      </div>
    </Container>
  );
}

export default ZoomCode;

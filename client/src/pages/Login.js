import React, { useState } from 'react';
import styled from 'styled-components';

const LoginWrapper = styled.div`
  border: solid 1px black;
  align-items: center;
  height: 50vh;
`;

function Login() {
  // const [isLogin, setisLogin] = useState(false);
  return (
    <LoginWrapper>
      <div className="IdInput" />
    </LoginWrapper>
  );
}

export default Login;

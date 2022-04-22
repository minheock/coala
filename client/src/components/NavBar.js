import React from 'react';
import { Menu } from 'antd';
import styled from 'styled-components';
import { XLView, LView, MView, SView } from '../config';

const MeunWrapper = styled(Menu)`
  margin: auto;
  // 반응형
  @media screen and (min-width: ${XLView}px) {
    & {
      width: 1375px;
    }
  }
  @media screen and (max-width: ${LView}px) {
    & {
      width: 1024px;
    }
  }
  @media screen and (max-width: ${MView}px) {
    & {
      width: 90%;
    }
  }
  @media screen and (max-width: ${SView}px) {
    & {
      width: 100%;
    }
  }
`;

function NavBar() {
  return (
    <MeunWrapper mode="horizontal">
      <Menu.Item key="finish_content">해결완료된 문제</Menu.Item>
      <Menu.Item key="unresolved_content">미해결 문제</Menu.Item>
      <Menu.SubMenu key="Stack_back_Menu" title="스택(백엔드) 문제">
        <Menu.Item key="Node.js">Node.js</Menu.Item>
        <Menu.Item key="Sequelize">Sequelize</Menu.Item>
      </Menu.SubMenu>
      <Menu.SubMenu key="Stack_front_Menu" title="스택(프론트) 문제">
        <Menu.Item key="javascript">javascript</Menu.Item>
        <Menu.Item key="React.js">React.js</Menu.Item>
      </Menu.SubMenu>
      <Menu.SubMenu key="Stack_ethier_Menu" title="스택(기타) 문제">
        <Menu.Item key="AWS">AWS</Menu.Item>
      </Menu.SubMenu>
    </MeunWrapper>
  );
}

export default NavBar;

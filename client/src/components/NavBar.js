import React from 'react';
import { Menu } from 'antd';

function NavBar() {
  return (
    <Menu mode="horizontal">
      <Menu.Item key="mail">Navigation One</Menu.Item>
      <Menu.SubMenu key="SubMenu" title="Navigation Three - Submenu">
        <Menu.ItemGroup title="Item 1">
          <Menu.Item key="app">Navigation Two</Menu.Item>
          <Menu.Item key="disabled" disabled>
            Navigation Three
          </Menu.Item>
        </Menu.ItemGroup>
      </Menu.SubMenu>
    </Menu>
  );
}

export default NavBar;

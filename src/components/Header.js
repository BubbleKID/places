import React, { Component } from 'react';
import { Menu } from 'antd';
import 'antd/dist/antd.css';

class Header extends Component {
  render() {
    return (
      <div className="Header"  >
        <div className="logo" >

        </div>
        <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['2']}
            style={{ lineHeight: '64px' }}
        >
            <Menu.Item key="1">Home</Menu.Item>
            <Menu.Item key="2">Service</Menu.Item>
            <Menu.Item key="3">Contact</Menu.Item>
        </Menu>
      </div>
    );
  }
}

export default Header;

import React, { Component } from 'react';
import { Menu, Icon } from 'antd';
import 'antd/dist/antd.css';
import MediaQuery from 'react-responsive';

const SubMenu = Menu.SubMenu;

class Sider extends Component {
  // submenu keys of first level
  rootSubmenuKeys = ['sub1', 'sub2', 'sub4'];

  state = {
    collapsed: false,
    openKeys: ['sub2'],
  };
  toggleCollapsed = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }

  onOpenChange = (openKeys) => {
    const latestOpenKey = openKeys.find(key => this.state.openKeys.indexOf(key) === -1);
    if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      this.setState({ openKeys });
    } else {
      this.setState({
        openKeys: latestOpenKey ? [latestOpenKey] : [],
      });
    }
  }

  render() {
    return (
        <div className="Menu">
          <MediaQuery query="(max-device-width: 1024px)">
            <Menu
              mode="inline"
              openKeys={this.state.openKeys}
              onOpenChange={this.onOpenChange}
              inlineCollapsed={true}
              defaultSelectedKeys={['5']}
            >
              <SubMenu key="sub1" title={<span><Icon type="appstore" /><span>Asia</span></span>}>
                <Menu.Item key="1">Beijing</Menu.Item>
                <Menu.Item key="2">Tokyo</Menu.Item>
                <Menu.Item key="3">Seoul</Menu.Item>
              </SubMenu>
              <SubMenu key="sub2" title={<span><Icon type="appstore" /><span>Europe</span></span>}>
                <Menu.Item key="5">London</Menu.Item>
                <Menu.Item key="6">Berlin</Menu.Item>
              </SubMenu>
              <SubMenu key="sub4" title={<span><Icon type="appstore" /><span>Oceania</span></span>}>
                <Menu.Item key="9">Melbourne</Menu.Item>
                <Menu.Item key="10">Sydney</Menu.Item>
                <Menu.Item key="11">Brisbane</Menu.Item>
              </SubMenu>
            </Menu>
          </MediaQuery>
          <MediaQuery query="(min-device-width: 1024px)">
            <Menu
              mode="inline"
              openKeys={this.state.openKeys}
              onOpenChange={this.onOpenChange}
              style={{ width: 256 }}
              defaultSelectedKeys={['5']}
            >
              <SubMenu key="sub1" title={<span><Icon type="appstore" /><span>Asia</span></span>}>
                <Menu.Item key="1">Beijing</Menu.Item>
                <Menu.Item key="2">Tokyo</Menu.Item>
                <Menu.Item key="3">Seoul</Menu.Item>
              </SubMenu>
              <SubMenu key="sub2" title={<span><Icon type="appstore" /><span>Europe</span></span>}>
                <Menu.Item key="5">London</Menu.Item>
                <Menu.Item key="6">Berlin</Menu.Item>
              </SubMenu>
              <SubMenu key="sub4" title={<span><Icon type="appstore" /><span>Oceania</span></span>}>
                <Menu.Item key="9">Melbourne</Menu.Item>
                <Menu.Item key="10">Sydney</Menu.Item>
                <Menu.Item key="11">Brisbane</Menu.Item>
              </SubMenu>
            </Menu>
          </MediaQuery>
        </div>
    );
  }
}

export default Sider;

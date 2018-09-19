import React, { Component } from 'react';
import { Layout, Breadcrumb,Button, Icon } from 'antd';
import 'antd/dist/antd.css'; 
import MediaQuery from 'react-responsive';
import london from '../images/LondonA.jpg';

const { Header, Content, Sider } = Layout;
const ButtonGroup = Button.Group;
class MainContent extends Component {
  render() {
    return (
      <div className="MainContent" style={{ padding: '0 24px 24px' }}>
            <Layout style={{ padding: '0 24px 24px' }}>
                <Breadcrumb style={{ margin: '16px 0' }}>
                    <Breadcrumb.Item>Places</Breadcrumb.Item>                
                    <Breadcrumb.Item>London</Breadcrumb.Item>
                </Breadcrumb>
                <Content style={{ background: '#fff', padding: 24, margin: 0, minHeight: 280 }}>
                    <h1>London</h1>
                    <img src={london}></img>
                    <p>London is the capital city of England. It is the most populous city in the  United Kingdom, with a metropolitan area of over 13 million inhabitants.</p>
                    <p>Standing on the River Thames, London has been a major settlement for two millennia, its history going back to its founding by the Romans, who named it Londinium.</p>
                
                    <ButtonGroup>
                        <Button type="primary">
                            <Icon type="left" />Previous
                        </Button>
                        <Button type="primary">
                            Next<Icon type="right" />
                        </Button>
                    </ButtonGroup>
                </Content>
            </Layout>
      </div>
    );
  }
}

export default MainContent;

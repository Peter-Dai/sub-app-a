import React, { Component } from 'react';
import './App.scss';
import { Layout, Menu, Icon } from 'antd';
import { HashRouter as Router, Route, Link } from "react-router-dom";
import { Option1, Option2 } from './containers'


const { Header, Sider, Content } = Layout;
const SubMenu = Menu.SubMenu;

class App extends Component {
  state = {
    collapsed: false,
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }

  render() {
    return (
      <div className="App">
        <Router>
          <Layout>
            <Sider
              trigger={null}
              collapsible
              collapsed={this.state.collapsed}
            >
              <div className="logo" />
              <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                <SubMenu key="sub1" title={<span><Icon type="mail" /><span>sub app a</span></span>}>
                  <Menu.Item key="5"><Link to="/sub-app-a/option1">Option 1</Link></Menu.Item>
                  <Menu.Item key="6"><Link to="/sub-app-a/option2">Option 2</Link></Menu.Item>
                </SubMenu>
              </Menu>
            </Sider>
            <Layout>
              <Header style={{ background: '#fff', padding: 0 }}>
                <Icon
                  className="trigger"
                  type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                  onClick={this.toggle}
                />
              </Header>
              <Content style={{ margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280 }}>
                <Route path="/sub-app-a/option1" exact component={Option1} />
                <Route path="/sub-app-a/option2" component={Option2} />
              </Content>
            </Layout>
          </Layout>
        </Router>
      </div>
    );
  }
}

export default App;

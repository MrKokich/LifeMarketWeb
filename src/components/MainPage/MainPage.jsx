import React from 'react';
import { Button } from 'antd';
import { DatePicker } from 'antd';
import { Layout, Menu, Icon } from 'antd';
const { Header, Sider, Content } = Layout;

import './MainPage.less';


const MainPage = React.createClass({
    getInitialState: function(){
        return {
            filterText: '',
            collapsed: false
        }
    },

    toggle: function(){
        this.setState({collapsed: !this.state.collapsed});
    },

    render() {
        return (
                <Layout>
                    <Sider
                        trigger={null}
                        collapsible
                        collapsed={this.state.collapsed}
                        style={{ background: '#fff', height: '100vh'}}
                    >
                        <div className="logo" />
                        <Menu theme="light" mode="inline" defaultSelectedKeys={['1']}>
                            <Menu.Item key="1">
                                <Icon type="gift"/>
                                <span className="nav-text">Товары</span>
                            </Menu.Item>
                            <Menu.Item key="2">
                                <Icon type="shopping-cart" />
                                <span className="nav-text">Заказы</span>
                            </Menu.Item>
                            <Menu.Item key="3">
                                <Icon type="car" />
                                <span className="nav-text">Поставки</span>
                            </Menu.Item>
                            <Menu.Item key="4">
                                <Icon type="setting" />
                                <span className="nav-text">Администрирование</span>
                            </Menu.Item>
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
                        <Content style={{ margin: '0px 0px', padding: 24, background: '#fff', minHeight: 380 }}>
                            Content
                        </Content>
                    </Layout>
                </Layout>
        );
    }
});

export default MainPage;
import React, {Component} from 'react';
import {Layout, Menu, Breadcrumb, Icon,} from 'antd';
import {Route, Link} from "react-router-dom"
import menuData from "../data/menu"
import UserSel from "./component/userSel"
import WorkBench from "./workbench"
import Dynamic from "./component/test"
import Notice from "./notice"



const {Header, Content, Footer, Sider,} = Layout;
const SubMenu = Menu.SubMenu;

export default class Mian extends React.Component {
    constructor(props) {
        super(props)
    }

    state = {
        collapsed: false,
        menuData: menuData
    };

    onCollapse = (collapsed) => {
        this.setState({collapsed});
    }
    onClick = ({item, key, selectedKeys}) => {

    }

    render() {
        return (
            <Layout>
                <Header style={{background: '#fff', padding: '0', height: '10vh'}}>
                    <div className="t-align-l fs30 l-height bgc1 col1 pd1">
                        官网运营系统
                        <UserSel/>
                    </div>
                </Header>
                <Layout style={{minHeight: '90vh'}}>
                    <Sider
                        collapsible
                        collapsed={this.state.collapsed}
                        onCollapse={this.onCollapse}
                    >
                        <div className="logo"/>
                        <Menu
                            theme="dark"
                            defaultSelectedKeys={['menu1']}
                            mode="inline"
                            onClick={this.onClick}
                        >
                            {this.state.menuData.menu.map((value, index) => {
                                if (value.subMenu) {
                                    return <SubMenu
                                        key={value.key}
                                        title={<span><Icon type={value.icon}/><span>{value.title}</span></span>}
                                    >
                                        {value.subMenu.map((v, i) => (
                                            <Menu.Item key={value.key + i}>
                                                <Link className="link" to={value.link + v.link}> <Icon type={v.icon}/>
                                                    <span>{v.title}</span></Link>
                                            </Menu.Item>
                                        ))}

                                    </SubMenu>
                                } else {
                                    return (
                                        <Menu.Item key={value.key}>
                                            <Link className="link" to={value.link}> <Icon type={value.icon}/>
                                                <span>{value.title}</span></Link>
                                        </Menu.Item>
                                    )
                                }
                            })}
                        </Menu>
                    </Sider>
                    <Content style={{margin: '0 16px',position:'relative'}}>
                        <Breadcrumb style={{margin: '16px 0'}}>
                            <Breadcrumb.Item>常用功能</Breadcrumb.Item>
                        </Breadcrumb>


                        <Route exact  path="/"      component={WorkBench}/>
                        <Route path="/workbench"    component={WorkBench}/>
                        <Route path="/manage/notice" component={Notice}></Route>
                        <Route path="/manage/dynamic" component={Dynamic}></Route>


                        <Footer style={{textAlign: 'center',position:'absolute',width:'100%',bottom:'10px'}}>
                            Ant Design ©2018 Created by Ant UED
                        </Footer>
                    </Content>
                </Layout>
            </Layout>
        );
    }
}



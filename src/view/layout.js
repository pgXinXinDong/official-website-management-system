import React, {Component} from 'react';
import { Layout, Menu, Breadcrumb, Icon,} from 'antd';
import {Route,Link} from "react-router-dom"
import menuData from "../data/menu"
import UserSel from "./component/userSel"
import WorkBench from "./workbench"
import Notice from "./notice"



const { Header, Content, Footer, Sider,} = Layout;
const SubMenu = Menu.SubMenu;

export default  class Mian extends React.Component {
    constructor(props) {
        super(props)
    }
    state = {
        collapsed: false,
        menuData:menuData

    };

    onCollapse = (collapsed) => {
        this.setState({collapsed});
    }
    onClick = ({ item, key, selectedKeys }) =>{
        console.log(1111,item,key,selectedKeys)
    }

    render() {
        return (
            <Layout >
                <Header style={{background: '#fff', padding: '0' ,height:'10vh'}}>
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
                            onClick ={this.onClick}
                        >
                            {this.state.menuData.menu.map((value,index) => {
                                if(value.subMenu){
                                    return  <SubMenu
                                        key={value.key}
                                        title={<span><Icon type={value.icon}/><span>{value.title}</span></span>}
                                    >
                                        {value.subMenu.map((v,i) => (
                                            <Menu.Item key={value.key + i}>
                                                <Link className="link" to={value.link+v.link}>  <Icon type={v.icon} />
                                                <span>{v.title}</span></Link>
                                            </Menu.Item>
                                        ))}

                                    </SubMenu>
                                }else{
                                    return(
                                        <Menu.Item key={value.key}>
                                            <Link className="link" to={value.link}> <Icon type={value.icon} />
                                            <span>{value.title}</span></Link>
                                        </Menu.Item>
                                    )
                                }
                            })}
                        </Menu>
                    </Sider>
                    <Content style={{margin: '0 16px'}}>
                        <Breadcrumb style={{margin: '16px 0'}}>
                            <Breadcrumb.Item>User</Breadcrumb.Item>
                            <Breadcrumb.Item>Bill</Breadcrumb.Item>
                    </Breadcrumb>
                        <Route path="/workbench" component={WorkBench}/>
                        <Route path="/manage/Notice" component={Notice}/>
                        <Footer style={{textAlign: 'center'}}>
                            Ant Design ©2018 Created by Ant UED
                        </Footer>
                    </Content>

                </Layout>
            </Layout>
        );
    }
}



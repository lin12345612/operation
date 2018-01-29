import React from "react";
import ReactDOM from "react-dom";
import {Layout ,Menu ,Breadcrumb,Icon} from "antd"
require("antd/dist/antd.css");
require("./first.css");
const {SubMenu} = Menu;
const {Header , Content,Footer,Sider} = Layout;

ReactDOM.render(
    <Layout>
        <Header className = "header">
            <div className="logo" />
            <Menu 
                theme = "dark"
                mode = "horizontal"
                defaultSelectedKeys = {["2"]}
                style= {{lineHeight:'64px'}}
            >
                <Menu.Item key = "1">nav 1</Menu.Item>
                <Menu.Item key="2">nav 2</Menu.Item>
                <Menu.Item key="3">nav 3</Menu.Item>
            </Menu>
        </Header>
        <Content style={{padding:"0 50px"}}>
            <Breadcrumb style={{margin:"16px 0"}}>
                <Breadcrumb.Item> Home</Breadcrumb.Item>
                <Breadcrumb.Item> List</Breadcrumb.Item>
                <Breadcrumb.Item> App</Breadcrumb.Item>
            </Breadcrumb>
            <Layout stye={{padding : "24px 0" , backgground : "#fff"}}>
                <Sider width={200} style={{background:"#fff"}}>
                <Menu
                    mode = "inline"
                    defaultSelectedKeys = {["1"]}
                    defaultOpenKeys = {['sub1']}
                    style={{height:'100%'}}
                >
                    <SubMenu key = "sub1" title = {<span><Icon type="user" />subnav 1</span>}>
                            <Menu.Item key = "1">option1</Menu.Item>
                            <Menu.Item key="2">option2</Menu.Item>
                            <Menu.Item key="3">option3</Menu.Item>
                    </SubMenu>
                        <SubMenu key="sub2" title={<span><Icon type="user" />subnav 1</span>}>
                            <Menu.Item key="4">option4</Menu.Item>
                            <Menu.Item key="5">option5</Menu.Item>
                            <Menu.Item key="6">option6</Menu.Item>
                        </SubMenu>
                        <SubMenu key="sub3" title={<span><Icon type="user" />subnav 1</span>}>
                            <Menu.Item key="7">option7</Menu.Item>
                            <Menu.Item key="8">option8</Menu.Item>
                            <Menu.Item key="9">option9</Menu.Item>
                        </SubMenu>
                </Menu>
                </Sider>
                <Content style={{ padding: '0 24px', minHeight: 280,background:'#fff' }}>
                    Content
        </Content>
            </Layout>
        </Content>
        <Footer style={{textAlign:"center"}}>
            Ant Design ©2016 Created by Ant UED
        </Footer>
    </Layout>,
    document.querySelector('#root')
)
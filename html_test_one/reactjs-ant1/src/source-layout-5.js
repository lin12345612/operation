import React from "react";
import ReactDOM from "react-dom";
import { Layout , Menu, Breadcrumb,Icon  } from "antd";
require("antd/dist/antd.css");
require("./layout.css");
const {Header , Content ,Footer ,Sider} = Layout;
const SubMenu = Menu.SubMenu;

class SiderDemo extends React.Component{
    state = {
        collapse : false
    };
    onCollapse = (collapse ) => {
        console.log(collapse);
        this.setState({collapse});
    }
    render(){
        return (
           <Layout style={{minHeight:"100vh"}}>
                <Sider
                    collapsible
                    collapsed = {this.state.collapse}
                    onCollapse = {this.onCollapse.bind(this)}
                >
                    <div className = "logo"/>
                    <Menu 
                        theme = "dark"
                        defaultSelectedKeys = {['1']}
                        mode ="inline"    
                    >
                    <Menu.Item key = "1"><Icon type="pie-chart"/><span>option1</span></Menu.Item>
                    <Menu.Item key="2"><Icon type="desktop" /><span>option2</span></Menu.Item>
                    <SubMenu
                        key = "sub1"
                        title = {<span><Icon type="user" /><span>User</span></span>}
                    >
                        <Menu.Item key = "3">Tom</Menu.Item>
                        <Menu.Item key="4">Bill</Menu.Item>
                        <Menu.Item key="5">Alex</Menu.Item>
                    </SubMenu>
                        <SubMenu
                            key="sub2"
                            title={<span><Icon type="team" /><span>Team</span></span>}
                        >
                            <Menu.Item key="6">team1</Menu.Item>
                            <Menu.Item key="7">team2</Menu.Item>
                        </SubMenu>
                        <Menu.Item key="9"><Icon type="file"/><span>File</span></Menu.Item>
                    </Menu>
                </Sider>
                <Layout>
                    <Header style={{background :'#fff' ,padding:'0'}} />
                    <Content style={{margin : "0 16px"}}>
                        <Breadcrumb style={{margin : '16px 0'}}>
                            <Breadcrumb.Item>User</Breadcrumb.Item>
                            <Breadcrumb.Item>Bill</Breadcrumb.Item>
                        </Breadcrumb>
                        <div style={{padding:24 , background :'#fff',minHeight:360}}>
                            Bill is a cat
                        </div>
                    </Content>
                    <Footer style={{textAlign :'center'}}>
                        Ant Design ©2018 Created by Ant UED
                    </Footer>
                </Layout>
           </Layout> 
        );
    }
}
ReactDOM.render(
   <SiderDemo />,
   document.querySelector("#root")
);
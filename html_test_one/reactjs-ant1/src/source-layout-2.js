import React from "react";
import ReactDOM from "react-dom";
import {Layout,Menu,Breadcrumb,Icon  } from "antd";
import MenuItem from "../node_modules/_antd@3.1.3@antd/lib/menu/MenuItem";
const {SubMenu } = Menu;
const {Header , Content , Sider} = Layout;
require("./layout.css");
require("antd/dist/antd.css");

// 左侧导航栏
class LeftBar extends React.Component{
    constructor(props){
        super(props);
    }

    handleLeftClick(e){
        let flag_up = "";
        let flag_down = ""
        switch (e.key) {
            case "1":
                flag_up = "subnav1";
                flag_down = "option1";
                break;
            case "2":
                flag_up = "subnav1";
                flag_down = "option2";
                break;
            case "3":
                flag_up = "subnav1";
                flag_down = "option3";
                break;
            case "4":
                flag_up = "subnav1";
                flag_down = "option4";
                break; 
            case "5":
                flag_up = "subnav2";
                flag_down = "option5";
                break; 
            case "6":
                flag_up = "subnav2";
                flag_down = "option6";
                break; 
            case "7":
                flag_up = "subnav2";
                flag_down = "option7";
                break; 
            case "8":
                flag_up = "subnav2";
                flag_down = "option8";
                break; 
            case "9":
                flag_up = "subnav3";
                flag_down = "option9";
                break; 
            case "10":
                flag_up = "subnav3";
                flag_down = "option10";
                break; 
            case "11":
                flag_up = "subnav3";
                flag_down = "option11";
                break; 
            case "12":
                flag_up = "subnav3";
                flag_down = "option12";
                break; 
            default:
                break;
        }
        this.props.change(flag_up,flag_down);
    }
    render(){
        return (
           <Sider style={{ background: '#fff', width: 200 }}>
            <Menu
                mode="inline"
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                style={{ height: '100%', borderRight: 0 }}
                onClick ={this.handleLeftClick.bind(this)}
            >
                <SubMenu key="sub1" title={<span><Icon type="user" />subnav 1</span>}>
                    <Menu.Item key="1">option1</Menu.Item>
                    <Menu.Item key="2">option2</Menu.Item>
                    <Menu.Item key="3">option3</Menu.Item>
                    <Menu.Item key="4">option4</Menu.Item>
                </SubMenu>
                <SubMenu key="sub2" title={<span><Icon type="laptop" />subnav 2</span>}>
                    <Menu.Item key="5">option5</Menu.Item>
                    <Menu.Item key="6">option6</Menu.Item>
                    <Menu.Item key="7">option7</Menu.Item>
                    <Menu.Item key="8">option8</Menu.Item>
                </SubMenu>
                <SubMenu key="sub3" title={<span><Icon type="notification" />subnav 3</span>}>
                    <Menu.Item key="9">option9</Menu.Item>
                    <Menu.Item key="10">option10</Menu.Item>
                    <Menu.Item key="11">option11</Menu.Item>
                    <Menu.Item key="12">option12</Menu.Item>
                </SubMenu>
            </Menu>
        </Sider> 
        );
        
    }
}

// 右侧内容部分
class RightMainContext extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <Layout style={{ padding: '0 24px 24px 0' }}>
            <Breadcrumb style={{ margin: "16px 0" }}>
                <Breadcrumb.Item>Home</Breadcrumb.Item>
                <Breadcrumb.Item>{this.props.upcontext}</Breadcrumb.Item>
                    <Breadcrumb.Item>{this.props.upcontext_1}</Breadcrumb.Item>
            </Breadcrumb>
            <Content style={{ background: "#fff", padding: 24, margin: 0, minHeight: 280 }}>
                content
                </Content>
        </Layout> 
        );
    }
}


// 主要内容部分
class MainBody extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            maincontext : "option1",
            upcontext : "subnav 1",
            upcontext_1 : "option1"
        };
    } 
    change( value1,value2){
        this.setState({
            maincontext : value2,
            upcontext : value1,
            upcontext_1 : value2
        });
    }    
        render(){
            return (
                <Layout>
                    <LeftBar change = {this.change.bind(this)}/>
                    <RightMainContext upcontext={this.state.upcontext} upcontext_1={this.state.upcontext_1} />
                </Layout>
            );
        }
}
ReactDOM.render(
   <Layout>
        <Header className="header">
            <div className = "logo" />
            <Menu 
                theme = "dark"
                mode = "horizontal"
                defaultSelectedKeys = {['2']}
                style={{lineHeight : '64px'}}
            >
                <Menu.Item key="1">nav 1</Menu.Item>
                <Menu.Item key="2">nav 2</Menu.Item>
                <Menu.Item key="3">nav 3</Menu.Item>
             </Menu>
        </Header>
        <MainBody />
   </Layout>,
   document.querySelector("#root")
);

import React from "react";
import ReactDOM from "react-dom";
require("antd/dist/antd.css");
require("./layout.css");
import { Layout , Menu , Breadcrumb, Icon } from "antd";
import MenuItem from "../node_modules/_antd@3.1.3@antd/lib/menu/MenuItem";
const {SubMenu} = Menu;
const {Header , Content , Footer , Sider} = Layout;

// 顶部导航栏
class NavApp extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            nav : "nav2"
        }
    }

    handleClick(e){
        let nav = "";
        switch (e.key) {
            case "1":
                nav = "nav1"
                break;
            case "2":
                nav = "nav2"
                break;
            case "3":
                nav = "nav3"
                break;
            default:
                break;
        }
        this.setState({nav : nav});
        this.props.navChange(nav);
    }
    render(){
        return (
            <Header className="header">
                <div className="logo" />
                <Menu
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={['2']}
                    style={{ lineHeight: '64px' }}
                    onClick = {this.handleClick.bind(this)}
                >
                    <Menu.Item key='1'>nav 1</Menu.Item>
                    <Menu.Item key='2'>nav 2</Menu.Item>
                    <Menu.Item key='3'>nav 3</Menu.Item>
                </Menu>
            </Header>
        );
    }
}

// 内容显示路径部分
class PathApp extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item>{this.props.top_nav}</Breadcrumb.Item>
                <Breadcrumb.Item>{this.props.nav_1}</Breadcrumb.Item>
                <Breadcrumb.Item>{this.props.nav_2}</Breadcrumb.Item>
            </Breadcrumb>
        );
    }
}

// 内容左侧导航栏
class ContentNav extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            nav_flag : "subnav1",
            flag : "option1"
        }
    }
    handleClick(e){
        let flag = '';
        let nav_flag = '';
        switch (e.key) {
            case "1":
                nav_flag = "subnav1";
                flag = "option1";
                break;
            case "2":
                nav_flag = "subnav1";
                flag = "option2";
                break;
            case "3":
                nav_flag = "subnav1";
                flag = "option3";
                break;
            case "4":
                nav_flag = "subnav1";
                flag = "option4";
                break;
            case "5":
                nav_flag = "subnav2";
                flag = "option5";
                break;
            case "6":
                nav_flag = "subnav2";
                flag = "option6";
                break;
            case "7":
                nav_flag = "subnav2";
                flag = "option7";
                break;
            case "8":
                nav_flag = "subnav2";
                flag = "option8";
                break;
            case "9":
                nav_flag = "subnav3";
                flag = "option9";
                break;  
            case "10":
                nav_flag = "subnav3";
                flag = "option10";
                break; 
            case "11":
                nav_flag = "subnav3";
                flag = "option11";
                break; 
            case "12":
                nav_flag = "subnav3";
                flag = "option12";
                break;  
            default:
                break;
        }
        this.setState({
            nav_flag : nav_flag,
            flag : flag
        });
        this.props.change(nav_flag,flag);
    }
    render(){
        return (
            <Content style={{ padding: '0 50px' }}>
                <PathApp 
                    nav_1={this.props.nav_1}
                    nav_2={this.props.nav_2}
                    top_nav={this.props.top_nav}
                    />
                <Layout style={{ padding: '24px 0', background: "#fff" }}>
                    <Sider width={200} style={{ background: '#fff' }}>
                        <Menu
                            mode="inline"
                            defaultSelectedKeys={['1']}
                            defaultOpenKeys={['sub1']}
                            style={{ height: '100%' }}
                            onClick = {this.handleClick.bind(this)}
                        >
                            <SubMenu key="sub1" title={<span><Icon type="user" />subnav 1</span>}>
                                <Menu.Item key='1'>option1</Menu.Item>
                                <Menu.Item key='2'>option2</Menu.Item>
                                <Menu.Item key='3'>option3</Menu.Item>
                                <Menu.Item key='4'>option4</Menu.Item>
                            </SubMenu>
                            <SubMenu key="sub2" title={<span><Icon type="laptop" />subnav 2</span>}>
                                <Menu.Item key='5'>option5</Menu.Item>
                                <Menu.Item key='6'>option6</Menu.Item>
                                <Menu.Item key='7'>option7</Menu.Item>
                                <Menu.Item key='8'>option8</Menu.Item>
                            </SubMenu>
                            <SubMenu key="sub3" title={<span><Icon type="notification" />subnav 3</span>}>
                                <Menu.Item key='9'>option9</Menu.Item>
                                <Menu.Item key='10'>option10</Menu.Item>
                                <Menu.Item key='11'>option11</Menu.Item>
                                <Menu.Item key='12'>option12</Menu.Item>
                            </SubMenu>
                        </Menu>
                    </Sider>
                    <Content style={{ padding: '0 24px', minHeight: 280 }}>
                        content
                </Content>
                </Layout>
            </Content>
        );
    }
}

// 全部内容组件
class ContentApp extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            main_nav_flag : "subnav1",
            main_flag : "option1",
            top_nav : "nav2"
        }
    
    }
    change(value1 , value2){
        this.setState({
            main_nav_flag : value1,
            main_flag : value2
         });
    }
    navChange(value){
        this.setState({
            top_nav:value
        });
    }
    render(){
        return (
            <Layout>
                <NavApp navChange={this.navChange.bind(this)}/>
                <ContentNav 
                    change = {this.change.bind(this)} 
                    nav_1={this.state.main_nav_flag}
                    nav_2 = {this.state.main_flag}
                    top_nav = {this.state.top_nav}
                    />
                <Footer style={{ textAlign: 'center' }}>
                    Ant Design ©2016 Created by Ant UED
                </Footer>
            </Layout>
        );
    }
}
ReactDOM.render(
    <ContentApp />,
   document.querySelector("#root")
);

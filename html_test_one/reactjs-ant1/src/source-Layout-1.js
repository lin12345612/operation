import React from "react";
import ReactDOM from "react-dom";
import {Layout ,Menu , Breadcrumb} from "antd";
const { Header, Footer, Sider, Content } = Layout ;
require("antd/dist/antd.css");
require("./layout.css");

// 导航栏组件
class MenuApp extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            flag : 0
        };
    }

    handleFlagChange (e){
        let newFlag = "";
        switch (e.key) {
            case "1":
                newFlag = "nav 1";
                break;
            case "2":
                newFlag = "nav 2";
                break;
            case "3":
                newFlag = "nav 3";
                break;
            default:
                break;
        }
        this.setState({ flag: newFlag})
        this.props.handleContentChange(newFlag);
        // console.log(this.props);
        // console.log(newFlag);
    }
    render(){
        return (
            <Header>
                <div className="logo" />  
                <Menu
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={['2']}
                    style={{ lineHeight: '64px' }}
                    onClick={this.handleFlagChange.bind(this)}
                >
                    <Menu.Item key="1" >nav 1</Menu.Item>
                    <Menu.Item key="2" >nav 2</Menu.Item>
                    <Menu.Item key="3" >nav 3</Menu.Item>
                </Menu>
            </Header>
        );
    }
}

// 内容部分组件
class ContentApp extends React.Component{
    constructor(props){
        super(props);
    }
   render(){
    return (
           <Content style={{ padding: '0 50px' }}>
               <Breadcrumb style={{ margin: "16px 0" }}>
                   <Breadcrumb.Item >Home</Breadcrumb.Item>
                   <Breadcrumb.Item >List</Breadcrumb.Item>
                   <Breadcrumb.Item >APP</Breadcrumb.Item>
               </Breadcrumb>
            <div style={{ background: "#fff", padding: 24, minHeight: 280 }}>{this.props.mainContent}</div>
           </Content>
       );
   }
}

class NavApp extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            main : "nav 2"
        }
    }
    handleContentChange(value){
        this.setState({
            main : value
        });
        // console.log("传进来的值为"+value);
    }
    render(){
        return (
            <Layout className="layout">
                <MenuApp handleContentChange={this.handleContentChange.bind(this)} />
                <ContentApp  mainContent={this.state.main} />
                <Footer style={{ textAlign: "center" }}>
                    Ant Design ©2016 Created by Ant UED
                </Footer>
            </Layout> 
        );
    }
    
}
ReactDOM.render(
    <NavApp />,
   document.querySelector("#root")
);



// 基本布局结构
// ReactDOM.render(
//    <div>
//        <p>上-中-下模式</p>
//        <Layout>
//            <Header>header</Header>
//            <Content>content</Content>
//            <Footer>footer</Footer>
//        </Layout>

//         <p>上-左导航右内容-下</p>
//         <Layout>
//             <Header>header</Header>
//             <Layout>
//                 <Sider>Slider</Sider>
//                 <Content>Content</Content>
//             </Layout>
//             <Footer>Footer</Footer>
//         </Layout>
//         <p>上-左内容右导航-下</p>
//         <Layout>
//             <Header>header</Header>
//             <Layout>
//                 <Content>Content</Content>
//                 <Sider>Slider</Sider>
//             </Layout>
//             <Footer>Footer</Footer>
//         </Layout>

//         <p>左导航-右上头部中内容下底部</p>
//         <Layout>
//             <Sider>sider</Sider>
//             <Layout>
//                 <Header>header</Header>
//                 <Content>content</Content>
//                 <Footer>footer</Footer>
//             </Layout>
//         </Layout>
//    </div>,
//    document.querySelector("#root")
// );

import React from "react";
import ReactDOM from "react-dom";
import {Button ,Radio,Icon} from "antd";
require("antd/lib/button/style/index.css");
require("antd/dist/antd.css");


// 普通按钮
// class ButtonClick extends React.Component{
//     constructor(props) {
//         super(props);
//         this.state = {
//             flag: '',
//         };
//     }
//     handleClick(event){
//         this.setState({flag : event.target.children[0].innerHTML})
//     }
//     render(){
//         return(
//              <div>
//                 <Button type="primary" onClick={this.handleClick.bind(this)}>基础 </Button>
//                 <Button onClick={this.handleClick.bind(this)}>默认 </Button>
//                 <Button type="dashed" onClick={this.handleClick.bind(this)}>虚线 </Button>
//                 <Button type="danger" onClick={this.handleClick.bind(this)}>警告 </Button>
//                 <br/>  
//                 <p>您点击了 :{this.state.flag}</p>
//              </div>
//         );
//     }
// }

// ReactDOM.render(
//   <div>
//         <Button type="primary" shape="circle" icon="search" />
//         <Button type="primary" icon="search">Search</Button>
//         <Button shape="circle" icon="search" />
//         <br />
//         <Button type="primary" shape="circle" icon="download" size="large"/>
//         <Button type="primary" shape="circle" icon="download" size="default" />
//         <Button type="primary" shape="circle" icon="download" size="small" />
//   </div>,
//    document.querySelector("#root")
// );

// 实现一组实时按键控制

class ButtonSize extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            size : 'large'
        };
    }
    handleSizeChange  (e)  {
        this.setState({size:e.target.value});
    }

    render(){
        const size = this.state.size ;
        return (
            <div>
                <Radio.Group value = {size} onChange = {this.handleSizeChange.bind(this)}>
                    <Radio.Button value="large">Large</Radio.Button>
                    <Radio.Button value="default">Default</Radio.Button>
                    <Radio.Button value="small">Small</Radio.Button>
                </Radio.Group>
                <br /> <br/>

                <Button type="primary" size={size}>primary</Button>
                <Button  size={size}>primary</Button>
                <Button type="dashed" size={size}>dashed</Button>
                <Button type="danger" size={size}>danger</Button>
                <br/>
                <Button type="primary" shape="circle" icon="download" size={size} />
                <Button type="primary" icon="download" size={size} >download</Button>
                <br />
                <Button.Group size = {size}>
                    <Button type="primary">
                        <Icon  type="left"/>回退
                    </Button>
                    <Button type="primary">
                        前进<Icon type="right" />
                    </Button>
                </Button.Group>
            </div>
        );
    }
}
ReactDOM.render(
    <ButtonSize />,
   document.querySelector("#root")
);
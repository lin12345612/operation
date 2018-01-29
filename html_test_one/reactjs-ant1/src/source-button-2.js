import React from "react";
import ReactDOM from "react-dom";
import { Button } from "antd";
require("antd/lib/button/style/index.css");
require("antd/dist/antd.css");

class ButtonApp extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            loading : false,
            iconLoading : false,
            text : "stop"
        };
    }

    handleClick (e){
        console.log(e.target);
        this.setState({
            loading : !this.state.loading,
            iconLoading : !this.state.iconLoading ,
            text : "start"
        });
    }
    render(){
        return (
            <div>
                <Button type="primary" loading >
                    Loading
                </Button>
                <Button type="primary" icon="poweroff" loading={this.state.iconLoading}
                    onClick={this.handleClick.bind(this)}
                >{this.state.text}</Button>
                <Button href="https://www.baidu.com/">百度一下</Button>
            </div>  
        );
    }
}

ReactDOM.render(
    <ButtonApp />,
   document.querySelector("#root")
);
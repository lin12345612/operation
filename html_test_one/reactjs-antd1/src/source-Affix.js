import React from "react";
import ReactDOM from "react-dom";
import {Affix,Button} from 'antd';
 require("antd/dist/antd.css"); 

 
ReactDOM.render(
    <div>
        <Affix>
            <Button type="primary">Affix top</Button>
        </Affix>
        <br />
        <Affix offsetBottom={0}>
            <Button type="primary">Affix bottom</Button>
        </Affix>
        <Affix offsetTop={200} onChange={affixed => console.log('affixed')}>
            <Button>120px to affix top</Button>
        </Affix>
    </div>,
   document.querySelector("#root")
);
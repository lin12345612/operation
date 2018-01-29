import React from 'react';
import ReactDOM from 'react-dom';
import {Breadcrumb ,Icon} from "antd";
require("antd/dist/antd.css");
ReactDOM.render(
   <div>
        <Breadcrumb>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item><a href="">Application Center </a></Breadcrumb.Item>
            <Breadcrumb.Item><a href="">Application List </a></Breadcrumb.Item>
            <Breadcrumb.Item>An application</Breadcrumb.Item>
        </Breadcrumb>
        <br />
        <Breadcrumb>
            <Breadcrumb.Item href="">
                <Icon type="home" />
            </Breadcrumb.Item>
            <Breadcrumb.Item href="">
                <Icon type="user" />
                <span>Application List</span>
            </Breadcrumb.Item>
            <Breadcrumb.Item>
               Application
            </Breadcrumb.Item>
        </Breadcrumb>
   </div>  ,
    document.querySelector("#root")
);
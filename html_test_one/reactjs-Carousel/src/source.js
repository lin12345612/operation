import React from "react";
import ReactDOM from "react-dom";
import Slider from "./Slider/Slider";

const Image  = [
    {
        src :"src/image/1.jpg",
        alt : "pic-1"
    },
    {
        src: "src/image/2.jpg",
        alt: "pic-2"
    },
    {
        src: "src/image/3.jpg",
        alt: "pic-3"
    },
    {
        src: "src/image/4.jpg",
        alt: "pic-4"
    }
];

// items :  轮播的图片
// speed : 图片切换速度
// autoplay : 是否自动播放
// delay ：图片停留时间
// pause ：鼠标悬停时是否停止自动轮播
// dots ： 是否轮播图片下面的小圆点
// arrow ： 是否需要前后的点击箭头

ReactDOM.render(
   <Slider 
        items={Image}
        speed={1.2}
        delay={2.1}
        pause={true}
        autoplay={true}
        dots = {true}
        arrows = {true}
   />,
   document.querySelector("#root")
);
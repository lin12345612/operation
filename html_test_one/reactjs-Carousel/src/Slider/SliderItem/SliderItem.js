import React from "react";

// count : 轮播图片的张数
// item :图片的链接以及显示属性
export default class SliderItem extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        let {count , item} = this.props;
        console.log(this.props);
        let width = 100 /count + "%";
        return (
            <li className = "Slider-item" style = {{width : width}}>
                <img src={item.src} alt={item.alt} /> 
            </li>  
        );
    }
}
import React from "react";
// 参数列表
// count : 图片总数
// nowLocal : 当前的轮播项
// turn : 点击圆点的时候的回调函数
export default class SliderDots extends React.Component{
    constructor(props){
        super(props);
        this.handleDotClick = this.handleDotClick.bind(this);
    }
    handleDotClick(i){
        var option  = i - this.props.nowLocal;
        this.props.turn(option);
    }
    render(){
        let dotNodes = [];
        let { count , nowLocal} = this.props;
        for (let i = 0; i < count.length; i++) {
            dotNodes[i] = (
                <span
                    key = {"dot" + 1}
                    className = {"slider-dot" + (i === this.props.nowLocal?" slider-dot-selected":"")}
                    onClick = {this.handleDotClick(i)}
                >
                </span>
            );
        }
        return (
            <div className = "slider-dots-warp">{dotNodes}</div>
        );
    }
}
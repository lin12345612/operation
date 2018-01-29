import React from "react";
import ReactDOM from "react-dom";
import { Row,Col,Slider  } from "antd";
require("antd/dist/antd.css");
require("./first.css");

// 配置多种等分栅格和间距
class GrimApp extends React.Component{
    gutters = {};
    colCounts = {};
    constructor(props){
        super();
        this.state={
            gutterKey : 1 ,
            colCountKey : 2 
        };
        [8,16,24,32,40,48].forEach((value , i) =>{this.gutters[i] = value});
        [2,3,4,6,8,12].forEach((value,i) =>{this.colCounts[i]= value});
    }

    onGutterChange (gutterKey){
        this.setState({ gutterKey });
        console.log(this.state);
    }

    onCountChange(colCountKey){
        this.setState({ colCountKey });
        console.log(this.state);
    }

    render(){
        const {gutterKey , colCountKey } = this.state;
        const cols = [];
        const colCount = this.colCounts[colCountKey];
        let colCode = "";
        for (let i = 0; i < colCount; i++) {
           cols.push(
               <Col key={i.toString()} span={24/colCount}>
                   <div className="blue">Column</div>
               </Col>
           );
            colCode += ` <Col span={${24 / colCount}} />\n`;
        }


        return (
            <div>
                <div style={{marginBottom : 16}}>
                    <span style={{marginRight : 6}}>间距为:</span>
                    <div style={{width : "50%"}}>
                        <Slider
                            min = {0}
                            max = {Object.keys(this.gutters).length-1}
                            value = {gutterKey}
                            onChange = {this.onGutterChange.bind(this)}
                            marks = {this.gutters}
                            step = {null}
                        />
                    </div>
                    <span style={{marginRight : 6}}>列数：</span>
                    <div style= {{width : "50%"}}>
                        <Slider 
                            min ={0}
                            max = {Object.keys(this.colCounts).length-1}
                            value = {colCountKey}
                            onChange = {this.onCountChange.bind(this)}
                            marks = {this.colCounts}
                            step = {null}
                        />
                    </div>
                </div>
                <Row gutter = {this.gutters[gutterKey]}>{cols}</Row>
                <pre>{`<Row gutter={${this.gutters[gutterKey]}}>\n${colCode}</Row>`}</pre>
            </div>
        );
    }
}

ReactDOM.render(
    <GrimApp />,
   document.querySelector("#root")
);



// 响应式属性 xs sm md lg xl xxl
// ReactDOM.render(
//    <div>
//        <Row>
//             <Col xs={2} sm={4} md={6} xl={10} className="orange">col</Col>
//             <Col xs={20} sm={16} md={12} lg={8} xl={4} className="blue">col</Col>
//             <Col xs={2} sm={14} md={6} lg={8} xl={10} className="orange">col</Col>
//        </Row>
//    </div>,
//    document.querySelector("#root")
// );



// flex布局 垂直方向
//  const DemoBox = props => <p className={"height-${props.value}"}>{props.children}</p>
// ReactDOM.render(
//    <div>
//        <p>紧贴顶部</p>
//        <Row type="flex" justify = "center" align = "top" className = "border">
//             <Col span={4} className="orange"><DemoBox value={100}> 4格</DemoBox></Col>
//             <Col span={4} className="blue"><DemoBox value={80}> 4格</DemoBox></Col>
//             <Col span={4} className="orange"><DemoBox value={120}> 4格</DemoBox></Col>
//             <Col span={4} className="blue"><DemoBox value={50}> 4格</DemoBox></Col>
//        </Row>  
//         <p>居中显示</p> 
//         <Row type="flex" justify="center" align="middle" className="border">
//             <Col span={4} className="orange">4格</Col>
//             <Col span={4} className="blue">4格</Col>
//             <Col span={4} className="orange">4格</Col>
//             <Col span={4} className="blue">4格</Col>
//         </Row>  
//         <p>紧贴底部</p>
//         <Row type="flex" justify="center" align="bottom" className="border">
//             <Col span={4} className="orange">4格</Col>
//             <Col span={4} className="blue">4格</Col>
//             <Col span={4} className="orange">4格</Col>
//             <Col span={4} className="blue">4格</Col>
//         </Row> 
//    </div>,
//    document.querySelector("#root")
// );





// flex布局---水平方向布局
// ReactDOM.render(
//    <div>
//        <p>布局在左侧</p>
//        <Row type="flex" justify="start" className = "flex-main">
//             <Col span={4} className="orange">4格</Col>
//             <Col span={4} className="blue">4格</Col>
//             <Col span={4} className="orange">4格</Col>
//             <Col span={4} className="blue">4格</Col>
//        </Row>
//         <p>布局在右侧</p>
//         <Row type="flex" justify="end" className="flex-main">
//             <Col span={4} className="orange">4格</Col>
//             <Col span={4} className="blue">4格</Col>
//             <Col span={4} className="orange">4格</Col>
//             <Col span={4} className="blue">4格</Col>
//         </Row>
//         <p>布局在中间</p>
//         <Row type="flex" justify="center" className="flex-main">
//             <Col span={4} className="orange">4格</Col>
//             <Col span={4} className="blue">4格</Col>
//             <Col span={4} className="orange">4格</Col>
//             <Col span={4} className="blue">4格</Col>
//         </Row>
//         <p>布局为：平均分布且紧贴两侧边界</p>
//         <Row type="flex" justify="space-between" className="flex-main">
//             <Col span={4} className="orange">4格</Col>
//             <Col span={4} className="blue">4格</Col>
//             <Col span={4} className="orange">4格</Col>
//             <Col span={4} className="blue">4格</Col>
//         </Row>
//         <p>布局为：平均分布且不与两边边界相贴近</p>
//         <Row type="flex" justify="space-around" className="flex-main">
//             <Col span={4} className="orange">4格</Col>
//             <Col span={4} className="blue">4格</Col>
//             <Col span={4} className="orange">4格</Col>
//             <Col span={4} className="blue">4格</Col>
//         </Row>
//    </div>,
//    document.querySelector("#root")
// );




// 向右偏移  即 offset 属性
// ReactDOM.render(
//    <div>
//        <Row>
//            <Col span={8} className = "item">8格</Col>
//             <Col span={8} offset={8} className="item"> 向右偏移了8格</Col>
//        </Row>
//         <Row>
//             <Col offset={6} span={6} className="item">向右6格</Col>
//             <Col span={6} offset={6} className="item">向右再偏移了6格</Col>
//         </Row>
//         <Row>
//             <Col offset={6} span={12} className="item">向右6格</Col>
//         </Row>
//    </div>,
//    document.querySelector("#root")
// );


// 有间隔 即 gutter 属性
// ReactDOM.render(
//    <div className = "gutter-example">
//         <Row gutter = {16}>
//             <Col className="" span={6}>
//                 <div className = "item">6格</div>
//             </Col>
//             <Col className="" span={6}>
//                 <div className="item">6格</div>
//             </Col>
//             <Col className="" span={6}>
//                 <div className="item">6格</div>
//             </Col>
//             <Col className="" span={6}>
//                 <div className="item">6格</div>
//             </Col>
//         </Row>
//    </div>,
//    document.querySelector("#root")
// );




// 没有间隔
// ReactDOM.render(
//    <div>
//        <Row>
//             <Col span={12} className = "item">col-12</Col>
//             <Col span={12} className="item1">col-12</Col> 
//         </Row>
//         <Row>
//             <Col span={8} className="item1">col-8</Col>
//             <Col span={8} className="item">col-8</Col>
//             <Col span={8} className="item1">col-8</Col>
//         </Row>
//         <Row>
//             <Col span={6} className="item1">col-6</Col>
//             <Col span={6} className="item">col-6</Col>
//             <Col span={6} className="item1"> col-6</Col>
//             <Col span={6} className="item">col-6</Col>
//         </Row>
//    </div>,
//    document.querySelector("#root")
// );


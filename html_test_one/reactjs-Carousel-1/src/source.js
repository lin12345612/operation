import React from "react";
import ReactDOM from "react-dom";

// 图片部分

class SliderImage extends React.Component{
   constructor (props){
       super(props);
   }
   render(){
       let {count,item} = this.props;
       let width = 100 / count + "%";
       return (
           <li className="slider-item" style={{width:width}}>
               <img  src={item.src} alt={item.alt} />
           </li>
       );
   }
}

// 主要组件以及事件绑定
// 参数flag用于判断是否进行动画
 class Slider extends React.Component{
     constructor(props){
         super(props);
         this.state = {
            nowLocal : 0 ,
         };
         this.transitionDuration = "2s";
         this.count = this.props.items.length  ;
     }
    turnRight(n){
        var _n = this.state.nowLocal + n;
        if (_n == this.count){
            this.transitionDuration = "0s";
        } else{
            this.transitionDuration = "2s";
        }
        if(_n >= this.count-1){
            
            _n = 0 ;
        }
        this.setState({
            nowLocal : _n,
        });
    }

    turnLeft(i){
        var _i = this.state.nowLocal - i;
        if(_i < 0){
            _i = this.state.nowLocal-1;
        }
        this.setState({nowLocal : _i});
    }

    // 判断是否瞬间完成
    soon(){
        this.setState({nowLocal : 0})
        console.log("我执行了");
    }
// 自动执行
    autoPlay(){
        if(this.props.autoPlay){
            this.autoPlayTimer = setInterval(
                () =>{
                    this.turnRight(1);
                }
            ,this.props.delay*1000);
        }
    }

    // 停止执行
     pausePlay() {
         clearInterval(this.autoPlayTimer);
     }

// 挂载，即一加载完就执行
    componentDidMount(){
        this.autoPlay();
    }
    render(){
        let count = this.props.items.length;
        let itemNodes = this.props.items.map((item,idx) => {
            return <SliderImage item={item} count={count} key={"item"+idx}/>;
        });
        return (
            <div className = "slider"
                onMouseOver={this.props.pause ?this.pausePlay.bind(this) : null}
                onMouseOut={this.props.pause ? this.autoPlay.bind(this) : null}
            >
                <ul className="slider-ul"
                    style={{
                        transition: "left 2s linear",
                        transitionDuration: this.transitionDuration,
                        left : -100 * this.state.nowLocal + "%",
                        width : this.props.items.length*100 + "%"
                }}>
                    {itemNodes}
                </ul>
            </div>
        );
    }
 } 

 Slider.defaultProps = {
     speed : 1,
     items : [],
     autoPlay :true,
     delay : 2,
     pause:true
 };
Slider.autoPlayTimer = null;
const IMAGE_DATA = [
    {
        src: 'src/image/1.jpg',
        alt: 'images-1',
    },
    {
        src: 'src/image/2.jpg',
        alt: 'images-2',
    },
    {
        src: 'src/image/3.jpg',
        alt: 'images-3',
    },
    {
        src: 'src/image/4.jpg',
        alt: 'images-4',
    },
    {
        src: 'src/image/1.jpg',
        alt: 'images-1',
    }
];

 ReactDOM.render(
    <Slider 
         items={IMAGE_DATA}
        speed={1.2}
        autoPlay = {true}
        delay={2}
        pause={true}
    />,
    document.querySelector("#root")
 );

import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
class Son extends React.Component{
    render(){
        return (<div style ={{padding:30}}>
            {this.props.array}
        </div>)
    }
}
//一个变量对应多个属性
// Son.propTypes = {
//     number : PropTypes.oneOfType(
//         [PropTypes.string,PropTypes.number]
//     )
// };

//检测变量中的变量

Son.propTypes = {
  array : PropTypes.arrayOf(PropTypes.number)
};
class Father extends React.Component{
    render(){
        return (
            <div>
                <Son  array={[1,2,3,4]}/>
            </div>
        )
    }
}
ReactDOM.render(
            <Father />,
            document.querySelector("#root")
        );
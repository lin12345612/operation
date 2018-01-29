import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route,browserHistory} from "react-router-dom";


class FormApp extends React.Component{
    constructor(props){
        super(props);
    }
    handleSubmit(event) {
        event.preventDefault();
        const userName = event.target.elements[0].value;
        const repo = event.target.elements[1].value;
        const path = `/repos/${userName}/${repo}`;
        browserHistory.push(path);
        console.log(browserHistory);
    }
    render(){
        return (
            <BrowserRouter history = {browserHistory}>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" placeholder="userName" />
                    <input type="text" placeholder="repo" />
                    <button type="submit">Go</button>
                </form>
            </BrowserRouter> 
        );
    }
}
ReactDOM.render(
    <FormApp />,
   document.querySelector("#root")
);


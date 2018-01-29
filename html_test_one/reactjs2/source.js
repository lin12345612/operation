    import React from "react";
    import ReactDOM from "react-dom";

    class NameForm extends React.Component{
        constructor(props){
            super(props);
            this.handleSubmit = this.handleSubmit.bind(this);
        }

    handleSubmit(event){
         console.log("一个名字被提交了"+this.input.value);
         event.preventDefault();
    }

    render(){
            return (
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Name:
                        <input type="text" ref={(input) => this.input = input}/>
                    </label>
                    <input type="submit" value="提交"/>
                </form>
            );
    }
    }
        ReactDOM.render(
                    <NameForm />,
                    document.querySelector("#root")
                );
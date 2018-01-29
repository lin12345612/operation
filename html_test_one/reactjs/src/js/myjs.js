    import React from "react" ;
    class Son extends React.Component{
        render(){
            return (
                <div style={{padding:30}}>
                    {this.props.number}
                    <br/>
                    {this.props.array}
                    <br/>
                    {this.props.boolean.toString()}
                </div>
            );
        }
    }
    class Father extends React.Component{
        render(){
            <Son
                number={'1'}
                array={"[1,2,3]"}
                boolean={"true"}
            />
        }
    }
    ReactDOM.render(
                <Father />,
                document.querySelector("#root")
            );
class WorldMessage extends React.Component{
    render(){
        return (
            <div>
            Hello!{this.props.name}
    </div>
    )
    }
}
var container = document.getElementById('container');
ReactDOM.render(<WorldMessage name="world"/>, container);

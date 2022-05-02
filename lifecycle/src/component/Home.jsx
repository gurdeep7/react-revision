import React from "react";

export class Home extends React.Component{
    constructor(props){
        console.log(props,"line 5")
        super();
    this.state = {
        age: 55,
        status:0,
    }
    
    setTimeout(() => {
        this.setState({
        status:1
        })
    }, 3000);
}

componentWillMount(){
console.log("component will mount")
}
componentwillRecieveProps(nextProps){
    console.log("component will recieve props", nextProps)
}
componentDidMount(){
    console.log("component did mount")
}
render(){
    return(<div>
        {console.log(this.props)}
        hello
        <div>Count:{this.props.props}</div>
       
    </div>)
}
}

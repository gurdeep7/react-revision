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

    const increaseAge = ()=>{
        this.state.age = this.state.age + 2
        console.log(this.state.age, "work")
        this.render()
    }
    return(<div>
        {console.log(this.props)}
        hello
        <div>Age: {this.state.age}</div>
        <div>Count:{this.props.props}</div>
        <button onClick={()=>{
            increaseAge()
        }}>Increase Age</button>
       
    </div>)
}
}

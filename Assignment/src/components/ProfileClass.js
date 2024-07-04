import { Component } from "react";

class ProfileClass extends Component{
    constructor(props){
        super(props);
        this.state ={
            count: 0,
        }
        console.log("Child Constructor");
    } 
     componentDidMount(){
        this.timer = setInterval(() => console.log("Interval defined"), 1000);
     }  
    componentWillUnmount(){
        clearInterval(this.timer);
    }
    render(){
        console.log("Child Render");
        return(
            <div className="profile-class">
                <h1>{this.props.name}</h1>
                {/* <h2>Count : {this.state.count}</h2>
                <button
                onClick={this.setState({
                    count: this.state.count + 1
                  })}
                >Count Button </button> */}
            </div>
        )
    }

}
export default ProfileClass;
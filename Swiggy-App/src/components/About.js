//import User from "./User";
import UserClass from "./UserClass";
import {Component} from "react";

class About extends Component{

    constructor(props){
        super(props);
        //console.log("parent Contructor ")
    }
    componentDidMount(){
        //console.log("parent componentDidMount ")
    }
    render(){
        //console.log("parent render ")
        return(
        <div>
            <h1>About</h1>
            <h2>Namaste React building Swiggy App</h2>
            
            ........
            <UserClass name={"First"} location={"bangalore class"} />
        </div>
        )
    }

}

export default About;
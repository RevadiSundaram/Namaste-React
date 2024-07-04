import {Component} from "react";
import ProfileClass from "./ProfileClass";
class About extends Component{
    constructor(props){
        super(props);
        console.log("Parent Constructor");
    }
    render(){
        console.log("Parent Render");
        return (
            <div>
                <h1>About from Class Components</h1>
                <h2>Building Swiggy Clone</h2>
                .....


                <ProfileClass name={"Revadi Sundaram"} />
            </div>
            
        )
    }
}
export default About;
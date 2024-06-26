import React from "react";

class UserClass extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            userInfo: {
                name: "Dummy",
                location: "Default",
                avatar_url: "http://dummy-photo.com"
            }
        }
        //console.log(this.props.name+" child constructor ")
    }
    async componentDidMount(){
        //console.log(this.props.name+" child componentDidMount ")
        const data = await fetch("https://api.github.com/users/RevadiSundaram");
        const json = await data.json();
        this.setState ({
            userInfo: json,

        })
        console.log(json);
    }
    render(){
        //console.log(this.props.name+" child render ")
        const {name, location, avatar_url} = this.state.userInfo;
       
        return(
            <div className="user-card">
                <img src={avatar_url} ></img>
            <h2>Name: {name}</h2>
            <h3>Location: {location}</h3>
            <h4>Contact: @revadisundaram</h4>
        </div>
        )
    }
}
export default UserClass;

/****
 * -----Mounting Cycle----
 * Constructor (dummy)
 * Render (dummy)
 * <html loaded> (dummy)
 * componentDidMount 
 *      API call
 *      setState
 * 
 * -----Updating Cycle---
 * Render (api)
 * <html loaded> (api)
 * componentDidUpdate
 * 
 * 
 */
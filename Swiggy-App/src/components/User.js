import { useState } from "react";
const User = (props) =>{
    const [count, setCount] = useState(0);
    const [count2, setCount2] = useState(2);
    return(
        <div className="user-card">
            <p>Count - {count}</p>
            <p>Count - {count2}</p>
            <h2>Name: {props.name}</h2>
            <h3>Location: Bangalore</h3>
            <h4>Contact: @revadisundaram</h4>
        </div>
    )
}
export default User;
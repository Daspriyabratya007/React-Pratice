import { useState } from "react";

const Counter = (props) =>{
    const [count, setCount] = useState(13);
    return(
        <div className="bg-gray-100  flex flex-col items-center justify-center p-4 shadow-md rounded-lg w-60 h-96">
            <h2>Click me {count} times </h2>
            <button className="bg-blue-900 rounded-lg p-2 w-32 h-24" onClick={()=>{setCount (count +1)}}>Click Me</button>
        </div>
    );
}
export default Counter;
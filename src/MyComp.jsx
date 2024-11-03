import React,{useState, useEffect} from "react";
function MyComp(){
    const [count, setCount] = useState(0);
    const [color, setColor] = useState("green");

    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);
   +

    window.addEventListener("resize",handleResize);
    console.log("Event Listener added");
    function addCount(){
        setCount(c => c+1);
    }
    function subCount(){
        setCount(c => c-1);
    }
    function changeColor(){
        setColor(c => c==="green" ? "red" : "green");
    }

    function handleResize(){
        setWidth(window.setWidth);
        setHeight(window.setHeight);

    }
    return(
        <>
        <p style=
        {{color: color}}>Count: {count}</p>
        <button onClick={addCount}>Add</button><br /><br />
        <button onClick={subCount}>Subtract</button><br />
        <br />
        <button onClick={changeColor}> Chnage color</button>

        <>
            <p>Window Width: {width}px</p>
            <p>Window Height: {height}px</p></>
        </>
    );
}
export default MyComp
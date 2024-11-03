
import React,{useState, useRef, useEffect} from "react";
function MyCom(){

    let [number, setNumber] = useState(0);
    const ref = useRef(0);
    console.log(ref);
    useEffect(()=>{
    console.log("Componenet renended");
    console.log(ref);
    }
);
    function handleClick(){
        ref.current++;
        setNumber(n =>  n+1); 
        console.log(ref.current);
    }
    return (
   <div>
     <button onClick={handleClick}> Click me!</button>
     <input type="text" ref={ref}/>
   </div>
);
}
export default MyCom
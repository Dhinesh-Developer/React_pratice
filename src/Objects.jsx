import React,{useState} from "react";
// object useState
function Objects(){
    const [car, setCar] = useState({year: 2024, 
        make: "ford",
        model:"mustang" });

    function handleYearChange(event){
        setCar({...car,year:event.target.value});
    }
    function handleMakeChange(event){
        setCar({...car,make:event.target.value});
    }
    function handleModelChange(event){
        setCar({...car,model:event.target.value});
    }

    return (
        <div>
            <p>Your favourite car is: {car.year} 
                {car.make} {car.model}</p>

            <input type="number" value={car.year} onChange={handleYearChange}/><br /><br />
            <input type="text" value={car.make} onChange={handleMakeChange}/><br />   <br />
            <input type="text" value={car.model} onChange={handleModelChange}/> <br />
        </div>
        

    );
}
export default Objects
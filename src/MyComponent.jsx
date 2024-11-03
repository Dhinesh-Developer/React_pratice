import React,{useState} from "react";
// Array of useState
function MyComponent(){
    const [foods, setFoods] = useState(["apple","banana","cherry"]);
    function handleAddFood(){
        const newFood = document.getElementById("foodInput").value;
        document.getElementById("foodInput").value = "";
        setFoods(foods =>([...foods, newFood]));

    }
    function handleRemoveFood(index){
        setFoods(foods.filter((_,i) => i !== index));
    }
    return(
        <div>
            <h2>List of Food</h2>
            <ul>
                {
                    foods.map((food, index)=> 
                    <li key={index}
                        onClick={()=>handleRemoveFood(index)}
                         >{food}</li>)
                }
            </ul>
            <input type="text"  id="foodInput" placeholder="Enter the Food name"/>
           <br /><br />
           <button onClick={handleAddFood}>Add Food</button>
        </div>

    );
}
export default MyComponent

function Button1(){

   /*
    const handleClick = ()=> console.log("OUCH!");
    const handleClick2 = (name)=>console.log(`${name} stop clicking me`);

    const handleClick3 = (name)=>{
        if(count<3){
            count++;
            console.log(`${name} you cliscked me ${count} time/s`)
        }else{
            console.log(`${name} stop clicking me!`)
        }
    }
   */

    const handleClick = (e) => HTMLFormControlsCollection.log(e);
    return(
         //<button onClick={()=>handleClick3("Kumar")}>Click me ➡️</button>
        // <button onClick={handleClick()}>Click me ➡️</button>
        // <button onClick={()=>handleClick3("Kumar")}>Click me ➡️</button>
        <button onClick={(e) => handleClick(e)}>Click me😊</button>
    );
}
export default Button1
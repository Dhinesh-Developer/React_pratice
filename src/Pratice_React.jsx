import React, {useState} from 'react';

function Pratice_React(){
    const [name, setName] = useState("Guest");

    const [quantity, setQuantity] = useState(1);
    const [comment, setComment] = useState();

    const [payment, setPayment] = useState();
    const [shipping,  setShipping] = useState("");

    function handleNameChange(event){
        setName(event.target.value);
    }

    function handleQuantityChange(event){
        setQuantity(event.target.value);
    }

    function handleCommentChange(event){
        setComment(event.target.value);
    }

    function handleSelectChange(event){
        setPayment(event.target.value);
    }

    function handleShippingChange(event){
        setShipping(event.target.value);
    }
    return(<div>
        <input value = {name} onChange={handleNameChange}/>
        <p>Name: {name}</p>

        <input value={quantity} onChange={handleQuantityChange} type='number'/>
        <p>Quantity: {quantity}</p>

        <input type="text"value={comment} onChange={handleCommentChange} />
        <p>Comment: {comment}</p>

        <select value={payment} onChange={handleSelectChange}>
            <option value="">select an option</option>
            <option value="Visa">Visa</option>
            <option value="Master Card">Master Card</option>
            <option value="Gift card">Gift card</option>
        </select>
        <p>Payment: {payment}</p>

        <label htmlFor="">
            <input type="radio" value="pick Up" 
            checked={shipping === "pick Up"} 
            onChange={handleShippingChange}/>
            pick up
        </label>
        <br />
        <label htmlFor="">
        <input type="radio" value="delivery" 
            checked={shipping === "delivery"} 
            onChange={handleShippingChange}/>
           devilery
        </label>

        <p>Shipping: {shipping}</p>
    </div>);
}
export default Pratice_React
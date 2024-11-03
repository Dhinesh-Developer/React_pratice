function List(){
    // const fruits = ["apple","banana","coconut","pineapple","orange"];

    // const listItems = fruits.map(fruit => <li>{fruits}</li>)
    // return (<ul>{listItems}</ul>);

    const fruits = [{id:1, name:"apple" ,calories: 95},
        {id:2, name:"banana", calories: 45},
        {id:3, name:"coconut", calories: 55},
       {id:4, name:"pineapple", calories: 75},
       {id:5, name:"orange", calories: 85}];

       const listItems = fruits.map(fruit => <li key={fruit.id}>
        {fruit.name}: &nbsp;
        <b>{fruit.calories}</b></li>);
        
       return (<ol>{listItems}</ol>);

}
export default List

function UserGreeting(props){
    
    if(props.isLoggedIn){
        return <h2 className="welcome-msg">Welcome {props.username}</h2>
    }else{
        return <h2 className="login-msg">Please log in to Continue</h2>
    }
   
    
}
export default UserGreeting
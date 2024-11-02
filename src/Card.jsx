import profilePic from './assets/1.jpg'
function Card(){
    return(
        <div className="card">
            <img className="card-image" src={profilePic} alt="Profile Picture" />
            <h2 className="card-title">Dhinesh Developer</h2>
            <p className="card-text">I make project Videos </p>
        </div>
    );
}
export default Card
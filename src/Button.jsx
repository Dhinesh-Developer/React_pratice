
// import styles from './Button.module.css'

function Button(){
// inline css styling
    const styles = {
        backgroundColor: "hsl(200, 100%, 50%)",
        color: "whitesmoke",
        padding: "10px 20px",
        borderRadius: "10px",
        border: "none",
        cursor: "pointer",
    }
    return(
        // <button className="button">Click Me</button>
        // <button className="button">Click Me</button>
        <button style={styles}>Click Me</button>
    );
}
//{styles.Button}
export default Button
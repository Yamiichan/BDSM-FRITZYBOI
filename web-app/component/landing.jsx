import styles from "./landing.module.css";
export default function Fritz() {
    return (
        
        <div className={styles.container}>
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
           <a href="">
                <button>SHOP NOW</button>
            </a>
            <h1> Lightweight. sleek design. only for you.</h1>
            
            <div className={styles.grad}>
                <img src="Gradient Back.png"></img>
            </div>
            <div className={styles.hand}>
                <img src="Phoneeeeeeeeeee 1.png"></img>
            </div>
            
        </div>
        
    )
}
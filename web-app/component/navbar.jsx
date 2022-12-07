import Button from "./Button";
import styles from "./navbar.module.css";

export default function Navbar() {
    return (
        
        <div className={styles.container}>
            <div className={styles.logo}>
                    <a href="http://localhost:3000/">
                        <img src="logo raw 4.png"></img>
                    </a>
            </div>
           
           <div className="hamburger"><div></div></div>
            <div className={styles.actions}>
               <div className={styles.home}>
                    <a href="">
                        <Button variant ="secondary">Home</Button>
                    </a>
               </div>
                <a href="AboutUs">
                    <Button variant ="secondary">About Us</Button>
                </a>
                <a href="ContactUs">
                    <Button variant ="secondary">Contact Us</Button>
                </a>
                <a href="Services">
                    <Button variant ="secondary">Services</Button>
                </a>
            </div>
        </div>
    )
}
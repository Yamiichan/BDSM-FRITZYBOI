
import styles from "./NavBarServ.module.css";
export default function NavbarServices() {
    return (
        <div className={styles.home}>
        <script src="Homebar.js" defer></script>
        <nav className={styles.navbar}>
            <div className={styles.logo}>
                     <a href="http://localhost:3000/">
                        <img src="logo raw 4.png"></img>
                    </a>
                <a href="" className={styles.togglebutton}>
                    <span className={styles.bar}></span>
                    <span className={styles.bar}></span>
                    <span className={styles.bar}></span>
                </a>
            </div>
            <div className={styles.navbarlinks}>
                <ul>
                    <li><a href="BDSM">Home</a></li>
                    <li><a href="AboutUs">About Us</a></li>
                    <li><a href="">Contact Us</a></li>
                    <li className={styles.Homes}><a href="Services">Services</a></li>
                </ul>
            </div>
        </nav>
    </div>
    )
}
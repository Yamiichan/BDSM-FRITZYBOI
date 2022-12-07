import styles from "./Contact.module.css";
export default function ContactUs () {
    return (
        <div className={styles.container}>
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <h1> <b>Here for you, 24/7</b></h1>
            <p>Need assistance? Contact us in the following platforms.</p>
               <div className={styles.ContactUs}>
                   <div className={styles.box}>
                   </div>
                   <h1>Email Us</h1>
                   <p>Send us an email and we'll respond within 24 hours.</p>
                   <img src="Email Icon.png"></img>
                   <div className={styles.email}>
                        <p>bjphones_support@gmail.com</p>
                   </div>
               </div>
            <div className={styles.service}>
                <img src="Email Icon.png"></img>
                <p>customer_care.bjphones@gmail.com</p>
                <a href="Services">
                <button>Write an Email</button>
                </a>
            </div>
            <div className={styles.boxes}></div>
            <div className={styles.socmed}>
                <h1>Social Medias</h1>
                <img src="Facebook Icon.png"></img>
                <p>BJ Phones by BDSM</p>
                <div className={styles.twitter}>
                    <img src="Twitter Icon.png"></img>
                    <p> @phonesbyBJ</p>
                </div>
            </div>
            <div className={styles.boxs}></div>
            <div className={styles.Call}>
                <h1>Call Us</h1>
                <p>Call anytime in these contact numbers.</p>
                <img src="Call Icon1.png"></img>
                <p1>+639 171 1234 | +639 232 784</p1>
            </div>
            <div className={styles.CallUs}>
                    <img src="Call Icon1.png"></img>
                    <p>(046) 423 4444 </p>
            </div>
            <div className={styles.bxs}></div>
            <div className={styles.Branch}>
                <h1>Nearby BJ Phones Branch</h1>
                <img src="Location1.png"></img>
                <p>SM City Dasmarinas</p>
                <p1>Central Mall Salitran</p1>
                <p2>Robinsons General Trias</p2>
            </div>
            <div className={styles.Salitran}>
                <img src="Location1.png"></img>
            </div>
            <div className={styles.Robinson}>
                <img src="Location1.png"></img>
            </div>
        </div>
    )
}
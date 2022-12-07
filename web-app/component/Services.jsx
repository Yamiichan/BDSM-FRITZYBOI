import styles from "./Services.module.css";
export default function Serv () {
    return(
        <div className={styles.container}>
            <h1> <b>Services Page</b></h1>
            <p>Feedbacks? Don't worry! You may write us your concerns here to assist you further. </p>
            <form>
                <textarea placeholder="Write Something..."></textarea>
            </form>
            <div className={styles.concern}>
                <p>Concerns</p>
                <form>
                    <label></label>
                    <input type="text" id="name" name="name"></input>
                
                </form>
            </div>
            <div className={styles.name}>
                <p>Name</p>
            </div>
            <div className={styles.concerns}>
                <form>
                    <label></label>
                    <input type="text" id="email" name="email"></input>
                </form>
            </div>
            <div className={styles.email}>
                <p>Email Address</p>
            </div>
            <div className={styles.button}>
                <a href="Services">
                    <button onClick={()=>{ alert('Your Concern Has Been Sent!'); }}>Send Your Concern</button>
                </a>
            </div>
            
        </div>
    )
}
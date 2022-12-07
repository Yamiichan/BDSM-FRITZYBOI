import Styles from "./AboutUs.module.css"
export default function About () {
    return (
        <div className={Styles.about}>
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <div className={Styles.Container}>
                <img src="logo raw 6.png"></img>
                
            </div>
            <h1>Who we are</h1>
            <div className={Styles.box}></div>
            <div className={Styles.text}>
                <h1>
Starting from the year 2022, BJ Phones by BDSM (Bible Discussions and Study Meetings) Inc., was founded. Known for serving the technology world and the founder of new innovations that piqued the interests of the market, BJ Phones has emerged and is now one of the leading technology company in the Philippines and the world. 
We ensure high quality services and technology to provide people what they need and want. We have competitive team members that can provide and compete with the emmerging companies. We will continue to serve and provide the best quality for everyone. </h1>
            </div>
        </div>
    )
}
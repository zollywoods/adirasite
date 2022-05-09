import Head from 'next/head'
import styles from '../styles/main.module.css'





export default function Home() {
  return (
    <div>
      <Head>
        <title>Adira Baum</title>
        {/* <link rel="icon" href="/favicon.ico" /> */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Anek+Bangla:wght@100;200;300;400;500;700;800&family=Fredoka:wght@500&family=Kufam&family=Nunito:wght@200;300&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,100;1,300;1,900&display=swap" rel="stylesheet" />
        <script type="module" src="https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js"></script>
     </Head>

    {/* MAIN PAGE */}
    <div className={styles.mainPage}>
        <div className={styles.vertMenu}> 
            <div className={styles.adira}> <b> Adira Baum </b> </div>
            <span className={styles.about}> <i> About </i> </span> <br/>  <br/>
            <span className={styles.commercial}> Commercial Work </span> <br/>
                <div className={styles.commercialWorks}>
                    Bose <br/>
                    Cadillac <br/>
                    Lays <br/>
                    Pitchfork <br/>
                    Ralph Lauren <br/>
                    Studio B <br/> <br/>

                    <i> Reel </i>
                </div> 
            <br/> <br/> <span className={styles.commercial}> Personal Work </span> <br/> 
            <div className={styles.personalWorks}>
                    Images
                </div>


        </div>
        <div className={styles.reel}> 
            <img src="obliquetriangle.svg" className={styles.greenTriangle}/>
                <div className={styles.reelVideo}>
                    <iframe  src="https://player.vimeo.com/video/554799664?h=707cca85b6" title="false" controls="false" width="100%" height="400px" frameborder="0" allowfullscreen className={styles.embed} ></iframe>            
                </div>
            {/* <img src="flippedtriangle.svg" className={styles.flippedTriangle}/> */}
        </div>    
        <div className={styles.colorMode}>
            You are now in calm mode, click here to change to chaos mode 
        </div>
    </div>






     </div>
  ) }

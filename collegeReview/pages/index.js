import Head from "next/head";
import styles from "../styles/Home.module.css";
import SectionCards from "../comp/sectionCard/sectionCard"
import NavBar from "../comp/nav/nav";
import predictors from "../data/numberOfPredictors"
import collegeTypes from "../data/collegeTypes"

import { redirectUser } from "../utils/redirectUser";



export default function Home({
}) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Study Point</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.main}>
        
    <NavBar />
    <div className={styles.back}>
    <SectionCards type="College Prediction" predictors={predictors}/>
    </div>
    <div className={styles.seperator}></div>

    <div className={styles.back}>
    <SectionCards type="College Analysis" predictors={collegeTypes}/>
        </div>
      </div>
    </div>
  );
}

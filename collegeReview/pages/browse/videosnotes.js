import Head from "next/head";
import styles from "../../styles/Home.module.css";

import Banner from "../../components/banner/banner";

import SectionCards from "../../components/card/section-cards";

import {
  getVideos,
} from "../../lib/videos";
import NavBar from "../../comp/nav/nav";

export async function getServerSideProps(context) {



  const physicsVideos = await getVideos("Jee advance Physics");
  const mathsVideos = await getVideos("Jee advance maths");

  const chemistryVideos = await getVideos("Jee advance chemistry");

  return {
    props: {
      physicsVideos,
      mathsVideos,
      chemistryVideos,
    },
  };
}

export default function Home({
  physicsVideos,
  mathsVideos,
 chemistryVideos,
}) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Video Notes</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.main}>
      <NavBar />
      
        <Banner
          title="Video Notes"
          subTitle="Bet best filtered Notes for jee mains and advanced"
          f="V"
          body="i d o e s"
          imgUrl="/static/videoBanner.jpg"
        />

        <div className={styles.sectionWrapper}>
          <SectionCards title="Jee advance Physics" videos={physicsVideos} size="small" />
         
          <SectionCards title="Jee advance maths" videos={ mathsVideos} size="small" />
          <SectionCards title="Jee advance chemistry" videos={chemistryVideos} size="small" />
          
        </div>
      </div>
    </div>
  );
}

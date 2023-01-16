import Head from "next/head";
import styles from "../styles/Home.module.css";

import Banner from "../components/banner/banner";

import SectionCards from "../components/card/section-cards";

import {
  getVideos,
} from "../lib/videos";
import NavBar from "../comp/nav/nav";

export async function getServerSideProps(context) {
  const { userId, token } = await redirectUser(context);

  if (!userId) {
    return {
      props: {},
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }


  

  const IiitReviews = await getVideos("Iiit Reviews");
  const NitRevies = await getVideos("Nit Reviews");

  const iitRevies = await getVideos("Iit Reviews");

  return {
    props: {
      IiitReviews,
      NitRevies,
      iitRevies,
    },
  };
}

export default function Home({
  IiitReviews,
  NitRevies,
  iitRevies,
}) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Study Point</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.main}>
      <NavBar />
      
        <Banner
          f="R"
          body="v i e w s"
          title="Colleges Reviews"
          subTitle="Best Collges in India"
          imgUrl="/static/banner.png"
        />

        <div className={styles.sectionWrapper}>
          <SectionCards title="iitReviews" videos={iitRevies} size="small" />
         
          <SectionCards title=" NitReviews" videos={ NitRevies} size="small" />
          <SectionCards title="IiitReviews" videos={IiitReviews} size="small" />
          
        </div>
      </div>
    </div>
  );
}

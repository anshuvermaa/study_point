import Image from "next/image";
import { useRouter } from "next/router";
import styles from "./banner.module.css";

const Banner = (props) => {
  const { title, subTitle, imgUrl,body ,f } = props;
  const router = useRouter();


  return (
    <div className={styles.container}>
      <div className={styles.leftWrapper}>
        <div className={styles.left}>
          <div className={styles.nseriesWrapper}>
            <p className={styles.firstLetter}>{f}</p>
            <p className={styles.series}>{body}</p>
          </div> 
          <h3 className={styles.title}>{title}</h3>
          <h3 className={styles.subTitle}>{subTitle}</h3>

        
        </div>
      </div>
      <div
        className={styles.bannerImg}
        style={{
          backgroundImage: `url(${imgUrl}`,
        }}
      ></div>
    </div>
  );
};

export default Banner;

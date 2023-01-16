import { useContext, useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Head from "next/head";
import Image from "next/image";

const base=process.env.NEXT_PUBLIC_BASE_URL
import cls from "classnames";

import styles from "../../../styles/college.module.css";

export async function getStaticProps(staticProps) {
  const response=await fetch(`${base}/api/get/college?type=All`,{
    method: 'GET',
    headers: {
      Accept: "application/json",
    },
  })
  const colleges = await response.json();
  const params = staticProps.params;
  console.log(params)

  const findCollegeById = colleges.find((college) => {
    return college._id.toString() === params.id; //dynamic id
  });
 
  return {
    props: {
     college: findCollegeById ? findCollegeById : {},
    },
  };
}

export async function getStaticPaths() {
  
  const response=await fetch(`${base}/api/get/college?type=All`,{
    method: 'GET',
    headers: {
      Accept: "application/json",
    },
  })
  const colleges = await response.json();

  const paths = colleges.map((college) => {
    return { 
      params: {
        id: college._id.toString(),
      },
    };
  });
  return {
  paths,
    fallback: true,
  };
}

const StudyPoint = (initialProps) => {
  const router = useRouter();

  const id = router.query.id;
  
  const [college, setCollege] = useState(
    initialProps.college || {}
    );
   
    


    var chr='/'





  return (
    <div className={styles.layout}>
      <Head>
        <title>{college.Institute.slice(4)}</title>
        <meta name="description" content={` {college.Institute.slice(4)}`} />
      </Head>
      <div className={styles.container}>
        <div className={styles.col1}>
          <div className={styles.backToHomeLink}>
            <Link href="/">
              <a>← Back to home</a>
            </Link>
          </div>
          <div className={styles.nameWrapper}>
            <h1 className={styles.name}>{college.Institute.slice(4)}</h1>
          </div>
          <Image
            src={
              
              chr.concat(college.imgUrl)  }
            width={600}
            height={360}
            className={styles.storeImg}
            alt={college.Institute.slice()}
          />
        </div>

        <div className={cls("glass", styles.col2)}>
        { (
            <div className={styles.iconWrapper}>
              
              <p className={styles.text}>Institute Type: {college.type}</p>
            </div>
          )}
          { (
            <div className={styles.iconWrapper}>
             
              <p className={styles.text}>Institute Code: {college.Institute.split(' ')[0]}</p>
            </div>
          )}
          {college.Address && (
            <div className={styles.iconWrapper}>
            
              <p className={styles.text}>Address : {college.Address}</p>
              
            </div>
            
          )}
        
        
          
          { (
            <div className={styles.iconWrapper}>
              <p className={styles.text}>institute Contact Numbers , <br/> {college.Phone}</p>
            </div>
          )}
          { (
            <div className={styles.iconWrapper}>
              <p className={styles.text}>institute Email, <br/> {college.Email}</p>
            </div>
          )}
          { (
            <div className={styles.iconWrapper}>
              <p className={styles.text}>institute Details, <br/> {college.Contact}</p>
            </div>
          )}
       

         
        </div>
      </div>
    </div>
  );
};

export default StudyPoint;

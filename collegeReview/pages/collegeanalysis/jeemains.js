
import React from 'react';
import { redirectUser } from "../../utils/redirectUser";
import Banner from "../../comp/banner2/banner.js"
import Card from "../../comp/card2/card.js"
import cls from "classnames"
import styles from "../../styles/jeeadvance.module.css"

const base=process.env.NEXT_PUBLIC_BASE_URL

export async function getServerSideProps(context) {
  
    const response=await fetch(`${base}/api/get/college?type=Others`,{
        method: 'GET',
      })
      const colleges=await response.json();
      console.log(colleges)
    
   
    

    
   
    return {
      props: {
        colleges,
      },
    };
  }



const jeeadvance = (props) => {
    const {colleges} = props;
    return (
        <div className={styles.mistyrose}>
        <div className={styles.container}>
        <div className={styles.main}>

       

     
     <div className={cls(styles.card,styles.card1)}>
             <Banner
          buttonText={"Best Colleges"}
        />

      </div>
      
        <div className={styles.cardLayout}>
        {colleges.map((college) => {
          var chr='/'
                return (
                  <Card
                    key={college.No}
                    name={college.Institute}
                    imgUrl={
                      
                      chr.concat(college.imgUrl)
                         }
                    href={`/collegeanalysis/college/${college._id}`}
                    className={styles.card}
                  />
                );
              })}
        </div>
   


     </div>
     </div>

        </div>
    );
}

export default jeeadvance;
  
 
  
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import cls from "classnames";

import styles from "./card.module.css";

const Card = (props) => {
  const {
    item,
    type,
  } = props;





  return (
   
   
     <article className={cls(styles.card__content, styles.grid)}>
         

            <header className={styles.card__header}>
                <div className={cls(styles.card__headerCircle,styles.grid)}>
                   <Image src={item.img} alt="k" width="100px" height="100px" className={styles.card__headerImg}/>
                </div>

                <span className={styles.card__headerSubtitle}>{item.type}</span>
                <h1 className={styles.card__headerTitle}>{`${item.name.toUpperCase()}`}</h1>
            </header>
            
            <ul className={cls(styles.card__list,styles.grid)}>
                <li className={styles.card__listItem}>
                    <i className={cls(styles.uil,cls(styles.uilCheck,styles.card__listIcon))}></i>
                    <p className={styles.card__listDescription}>{item.lines[0]}</p>
                </li>
                <li className={styles.card__listItem}>
                    <i className={cls(styles.uil,cls(styles.uilCheck,styles.card__listIcon))}></i>
                    <p className={styles.card__listDescription}>{item.lines[1]}</p>
                </li>
            
            </ul>
            <div className={styles.linkWrapper}>
            <Link href={`/${type.toLowerCase().replace(/\s+/g, '')}/${item.name.replace(/\s+/g, '')}`} key={item.id}>
              <a>
            <button className={styles.card__button}>Choose this plan</button>
            </a>
            </Link>
            </div>
        </article>
    
  
 
  );
};

export default Card;

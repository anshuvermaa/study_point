
import Link from "next/link";
import cls from "classnames";
import styles from "./sectionCard.module.css"
import Card from "../card/card";

const SectionCards = (props) => {
  const { type,predictors } = props;
  return (
    
    <section className={cls(styles.card,cls(styles.container,styles.grid))}>
 <div className={styles.titleWrapper}>
     <h2 className={styles.title}>{type}</h2>
</div>
       <div className={cls(styles.card__container,styles.grid)}>
        {predictors.map((item, idx) => {
          return (
            
         
                <Card
                key={idx}
                 item={item}
                 type={type}

                />
             
          );
        })}
   </div>
</section>
  );
};

export default SectionCards;

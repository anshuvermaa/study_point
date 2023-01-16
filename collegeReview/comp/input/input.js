import React from "react"
import styles from "./input.module.css"





const Input = (props) => {

    const {sharedState,setSharedState}=props;

  const handleChange=(e)=>{
    e.preventDefault()
   setSharedState(parseInt(e.target.value))
  }


    return (
       
        <div className={styles.bg}>
       
  <div>
    <input onChange={handleChange} className={styles.textarea}  placeholder="Rank" />
    
   
</div>
</div>
    );
}

export default Input;
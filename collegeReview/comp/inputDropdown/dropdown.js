import React,{ useState,useEffect }  from 'react'
import styles from './dropdown.module.css'
function Dropdown(props) {
const {
    adData,
    setSharedState,
    sharedState,
  
  }=props;





  useEffect(() => {
   
      
    
  }, [sharedState]);
  
  
  
  
 

  let optionTemplate = adData.map((v,i) => (
    <option className={styles.it} key={i} value={v}>{v}</option>
  ));


 const handleChange=(e)=>{
  e.preventDefault();
  
  setSharedState(e.target.value)
  console.log(sharedState)
  
 }
 
  
  return (
    <div>
  
   
    
    <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" rel="stylesheet" />
<section className={styles.container}>
 
    <select className={styles.section}
    onChange={handleChange}
           placeholder="Select a person"
            value={sharedState}>
    { optionTemplate }
      
    </select>
 
</section>
    </div>
  )
}

export default Dropdown
import React,{ useState ,useEffect} from "react"
import Head from "next/head";
import Dropdown from "../../comp/inputDropdown/dropdown";
import data from "../../data/jeeAdvanceData.js"
import styles from "../../styles/jeeadvance.module.css"
import cls from "classnames"
import Table from ".././../comp/table/table.js"
import Input from "../../comp/input/input";
import NavBar from "../../comp/nav/nav";

const base=process.env.NEXT_PUBLIC_BASE_URL

export default function JeeAdvance({
}) {

  const [college,setCollege]= useState({})
  const [colleges,setColleges]= useState([])

  const [dataTable, setDataTable] = useState([]);

  const [rank, setRank] = useState(0);
  const [category, setCategory] = useState("");
  const [branch, setBranch] = useState("");
  const [gender, setGender] = useState("");
  const [year, setYear] =  useState(0);
  const [round, setRound] = useState(0);

  useEffect(() => {
    setCollege({
      "seatType":category,
      "gender":gender,
      "year": parseInt(year),
      "round": parseInt(round),
      "type": "Iit",
      "program": branch,
      "rank":rank,
  })
      
    
    // axios('https://jsonplaceholder.typicode.com/users')
    //   .then(res =>{
       
    //      setDataTable(res.data)
    //     })
    //   .catch(err => console.log(err))
  }, [category,gender,branch,year,round,rank]);


  const column = [
    { heading: 'Institute Name', value: 'Institute' },
    { heading: 'Institute Type', value: 'Institute Type' },
    { heading: 'Academic Program Name', value: 'Academic Program Name' },
    { heading: 'Programe Duration', value: 'Programe Duration' },
    { heading: 'Seat Type', value: 'Seat Type' },
    { heading: 'Gender', value: 'Gender' },
    { heading: 'Opening Rank', value: 'Opening Rank' },
    { heading: 'Closing Rank', value: 'Closing Rank' },
  ]



const handleSubmit= async()=>{

console.log(college)

  const response=await fetch(`${base}/api/cutOff/colleges`,{
    method: 'POST',
    body: JSON.stringify(
         college
    ),
    headers: {
      'Content-Type': 'application/json',
    },
  })
  const data=await response.json();
  setColleges(data)
  console.log(data)

}


   

  return (
    <div >
      <Head>
        <title>jee advance college predictor</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
     <NavBar />
     <div className={styles.mistyrose}>
     
     <div className={cls(styles.card,styles.card1)}>
     <Input setSharedState={setRank} sharedState={rank}/>
      <Dropdown key={1} adData={data[0].category} setSharedState={setCategory} sharedState={category}/>
      <Dropdown key={2} adData={data[0].gender} setSharedState={setGender} sharedState={gender}/>
      <Dropdown key={3} adData={data[0].branch} setSharedState={setBranch} sharedState={branch}/>
      <Dropdown key={4} adData={data[0].year} setSharedState={setYear} sharedState={year}/>
      <Dropdown key={4} adData={data[0].round} setSharedState={setRound} sharedState={round}/>
      <div className={styles.wrapper}>
      <button className={cls(styles.btn,styles.btnAccept)} onClick={handleSubmit} >Submit</button>
      </div>
     </div>
    
     </div>
     <div className={styles.tab}>
   { colleges.length>0 && <> <h1>Colleges</h1>
    
      <Table data={colleges} column={column} />
        
      </>  }
     </div>
    </div>
  );
}

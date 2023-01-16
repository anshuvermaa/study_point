import asyncHandler from 'express-async-handler'
import List2021 from '../models/cutOffModel.js'
import College from '../models/collegeModel.js'

const cutOffRoute = asyncHandler(async (req, res) => {
  if(req.method === 'POST'){
    const {year,round,type,institute,program,duration,seatType,gender,openingRank,closingRank,rank}= req.body
   
    console.log(req.body)
    
  const  colleges=await List2021.find({
    "Academic Year":year,
    "Institute Type":type,
    "Academic Program Name":program,
    "Seat Type":seatType,
    "Gender": gender,
    "Closing Rank":{$gt:rank}

  }).sort({ "Closing Rank": 1  })
//   console.log(colleges)

    res.status(201).json(colleges)

    
  }
    

})



const collegeRoute = asyncHandler(async (req, res) => {
  if(req.method === 'GET'){
    const type=req.query.type
    const page= parseInt(req.query.page)
    const app= parseInt(req.query.app)
    const limit= 10
    
    console.log(req.query)
  
    if(type === "Iit" ){
      const  colleges=await College.find({
       type:type
    
      })
      res.status(201).json(colleges)

    }else if(type === "All"){
      const  colleges=await College.find({
     
       })
       res.status(201).json(colleges)
 

    }else if(type==="Others"){
      const  colleges=await College.find({
        $or: [{
          type: "Nit"
      }, {
        type: "Iiit"
      },{
        type: "Gfti"
      }]
        
        
      })

      res.status(201).json(colleges)
      }else if(page || (app && limit)) {
     
     
       
        let nextPage=1;
        let prevPage=1;
        if(page && page>2 && page<12){
            nextPage=page+1;
            prevPage=page-1;
          }else if (page && page===1){
            nextPage=page+1;
            console.log(page)
              prevPage=null;
            }
            else if (page && page===12){
                nextPage=null;
                prevPage=page-1;
              }else{
                  nextPage=null;
                  prevPage=null 
                }
                
                var date = new Date();
                const time=date.valueOf()
                
        const  colleges=await College.find({}).limit(limit)
        .skip(limit * (page - 1))
        colleges
        const ApiResponse={
          success: true,
          message:"ok",
          prevPage:prevPage,
          nextPage:nextPage,
          colleges:colleges,
          lastUpdated: time,
        }

        
    
          res.status(201).json(ApiResponse)
          
      }
    


   

    
  }

})





export {
    cutOffRoute,
    collegeRoute,
}

import mongoose from 'mongoose'

const collegeSchema = mongoose.Schema(
  {
    "No": {
      type: Number,
      required: true,
    },
    "type":{
     type: String,
     required: true,
    },
    "Institute": {
      type: String,
      required: true,
    },
    "Address": {
      type: String,
      required: true,
    },
    "imgUrl": {
      type: String,
      required: true,
    },
    "Phone": {
      type: String,
      required: true,
    },
    "Email": {
      type: String,
      required: true,
    },
    "Contact": {
      type: String,
      required: true,
    },
   
  }
)




const College = mongoose.model('college', collegeSchema)
export default College

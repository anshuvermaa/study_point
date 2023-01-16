import mongoose from 'mongoose'

const cutOffSchema = mongoose.Schema(
  {
    "Academic Year": {
      type: String,
      required: true,
    },
    "Round": {
      type: Number,
      required: true,
    },
    "Institute Type": {
      type: String,
      required: true,
    },
    "Institute": {
      type: String,
      required: true,
    },
    "Academic Program Name": {
      type: String,
      required: true,
    },
    "Programe Duration": {
      type: Number,
    },
    "Seat Type": {
      type: String,
      required: true,
    },
    "Gender": {
      type: String,
      required: true,
    },
    "Opening Rank": {
      type: Number,
      required: true,
    },
    "Closing Rank": {
      type: Number,
      required: true,
    },
   
  }
)




const List2021 = mongoose.model('list2021', cutOffSchema)
export default List2021

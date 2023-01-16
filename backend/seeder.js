import mongoose from 'mongoose'
import dotenv from 'dotenv'
import colors from 'colors'
import connectDB from './config/db.js'




import List2021 from './models/cutOffModel.js'
import College from './models/collegeModel.js'
import colleges from './data/collegeData.js'
import data from './data/colleges.js'

dotenv.config()

connectDB()

const importData = async () => {
  try {



    await List2021.deleteMany()
    await College.deleteMany()
 

    const createList2021=await List2021.insertMany(colleges)
    const createCollege=await College.insertMany(data)

  


    console.log('Data Imported!'.green.inverse)
    process.exit()
  } catch (error) {
    console.error(`${error}`.red.inverse)
    process.exit(1)
  }
}

const destroyData = async () => {
  try {

    await List2021.deleteMany()
    await College.deleteMany()

    console.log('Data Destroyed!'.red.inverse)
    process.exit()
  } catch (error) {
    console.error(`${error}`.red.inverse)
    process.exit(1)
  }
}

if (process.argv[2] === '-d') {
  destroyData()
} else {
  importData()
}

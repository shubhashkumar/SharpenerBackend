const db=require("../utils/dbconnection");
const { Op } = require("sequelize");
const usersTable=require("../models/users");
const busesTable=require("../models/buses");
//create users
const adduser =async (req,res)=>{
 try{ 
  const { firstName, lastName, email } = req.body;
  await usersTable.create(
  {
   "firstName":firstName,
   "lastName":lastName,
   "email":email
  } 
  );
res.status(200).send("created successfully");
 }
 catch(error)
 {
  res.status(500).send("could not create");
 }
}
//create bus
const addbus=async (req,res)=>{
 try{ 
    const {busNumber, totalSeats, availableSeats } = req.body;
  await busesTable.create(
  {
   "busNumber":busNumber,
   "totalSeats":totalSeats,
   "availableSeats":availableSeats
  }
);
res.status(200).send("created successfully");
 }
 catch(error)
 {
    console.log(error);
  res.status(500).send("could not create");
 }
}
//find buses
const findbus=async (req,res)=>
{
    try{
         const {seats}= req.params;
        const availBuses= await busesTable.findAll({
            where:
            {
                availableSeats:
                {
                    [Op.gt]:seats,
                },
            },
         })
        // console.log(availBuses);
        res.status(200).send(availBuses);
    }
    catch(error)
    {
        console.log(error);
       res.status(500).send("could not create");
    }
}

module.exports={adduser,addbus,findbus};
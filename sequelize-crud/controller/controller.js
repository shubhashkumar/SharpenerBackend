const db=require("../utils/dbconnection");
const userTable=require("../model/userTable");
const addEntries=async (req,res)=>
{
    try{
      const {firstName,lastName,email}=req.body;
      const user01=await userTable.create({
        firstName:firstName,
        lastName:lastName,
        email:email
      })
      res.status(200).send("user created");
    }
    catch(error)
    {
       res.status(500).send("unable to create user");
    }
}
module.exports=addEntries;
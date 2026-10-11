const db = require("../utils/db-connections");
const addEntries = (req, res) => {
  const { name, email } = req.body;
  const insertQuery = `insert into students(name,email) value(?,?)`;
  db.execute(insertQuery, [name, email], (err) => {
    if (err) {
      console.log(err.message);
      res.status(500).send(err.message);
      db.end();
    }
    console.log("value added");
     res.status(200).send(`student with ${name} and ${email}`);
  });
};

const updateEntries=(req,res)=>
{
    const {id}= req.params;
    const {name}= req.body;
    const {email}=req.body;
    const updateQuery=`update students 
    set name= ?,email=? where id =?`;
    db.execute(updateQuery,[name,email,id],(err,results)=>
    {
        if(err)
        {
            console.log(err.message);
            res.status(500).send("error occured");
             db.end();
            return;
        }
        if(results.affectedRows===0)
        {
            res.status(404).send('id not found');
            return;
        }
        res.status(200).send('row updated successfully');
    })
}

const deleteEntry=(req,res)=>
{
    const {id}=req.params;
    const deleteQuery=`delete from students where id=?`;
    db.execute(deleteQuery,[id],(err,results)=>
        {
           if(err)
        {
            console.log(err.message);
            res.status(500).send("error occured");
             db.end();
            return;
        }
        if(results.affectedRows===0)
        {
            res.status(404).send('id not found');
            return;
        }
        res.status(200).send('row deleted successfully');
        })
    
}
module.exports = { addEntries,updateEntries,deleteEntry};

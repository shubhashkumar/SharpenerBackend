const db=require("../utils/db-connection")
//get
const getEntries=(req,res)=>
{
   const getQuery= `select * from student`;
   db.execute(getQuery,(err) => {
    if (err) {
      console.log(err.message);
      res.status(500).send(err.message);
      db.end();
    }
    console.log("data retrived");
     res.status(200).send(`data retrived`);
  })
}

//post method 
const postEntries=(req,res)=>
{
  const {name,email,age}=req.body;
  const postQuery=`insert into student(name,email,age) values(?,?,?)`;
   db.execute(postQuery, [name, email,age], (err) => {
    if (err) {
      console.log(err.message);
      res.status(500).send(err.message);
      db.end();
    }
    console.log("value added");
     res.status(200).send(`student with ${name} and ${email} and ${age}`);
  });
}
const putEntries=(req,res)=>
{
    const {id}=req.params;
    const {name,email}= req.body;
    const putQuery= `update student set name=?,email=? where id=?`;
    db.execute(putQuery,[name,email,id],(err,results)=>
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
const deleteEntries=(req,res)=>
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
module.exports={
    getEntries,postEntries,putEntries,deleteEntries
}
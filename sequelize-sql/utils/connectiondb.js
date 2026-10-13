const { Sequelize } = require("sequelize");
const sequelize = new Sequelize("testdb", "root", "Subhash@123@@", {
  host: "localhost",
  dialect: "mysql",
});

(async()=>{ try{
await sequelize.authenticate();
console.log("connection created successfully");
}
catch
{
 console.log(error);
}
})();

module.exports=sequelize;

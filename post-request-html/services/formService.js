const path = require('path');
const filePath=()=>
{
     const filePath = path.join(__dirname, '..', 'views', 'form.html');
       return filePath;
}
module.exports=filePath;
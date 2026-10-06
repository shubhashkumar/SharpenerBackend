
const path = require('path');
const sendFilePath = () => {
    const filePath = path.join(__dirname, '..', 'views', 'product.html');
    return filePath;
}
module.exports = sendFilePath;
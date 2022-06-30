const mongoose = require('mongoose');
var url = "mongodb://localhost:27017/keyboradapp";
module.exports = mongoose.connect(url).then(() => {
    console.log("数据库链接成功");
}).catch((err) => {
    console.log("数据库链接失败"+err);
})
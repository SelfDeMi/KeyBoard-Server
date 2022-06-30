require('./connect.js');
const mongoose = require('mongoose');
//定义约束 与你的数据库结构有关
const Schema = mongoose.Schema({
    uername:{
        type:String,
        require:true

    },
    password:{
        type:String,
        require:true
    },
    cookie:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
})


//定义模板
const usersModule = mongoose.model("User",Schema,'users')

module.exports = (uName) => {
    return new Promise((resolve,reject) => {
        // usersModule.findOne({$where:"this.username=='aaaaaa'"}).then((res) => {;
        usersModule.findOne({$where:`this.username=='${uName}'`}).then((res) => {;
            resolve(res)
            // console.log(res);
        }).catch((err) => {
            console.log("查询失败"+err);
            reject(err)
        })
    })
}

  


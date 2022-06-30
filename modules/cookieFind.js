require('./connect.js')
const mongoose = require('mongoose');
const User = mongoose.model('users')
module.exports = (cookie) => {
    return new Promise((resolve, reject) => {
        User.findOne({$where:`this.cookie=='${cookie}'`}).then((res) => {;
            resolve(res)
            console.log(res);
        }).catch((err) => {
            console.log("查询失败"+err);
            reject(err)
        })
    })
}
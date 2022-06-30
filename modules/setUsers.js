require('./connect.js')
const mongoose = require('mongoose');
const User = mongoose.model('users', new mongoose.Schema({
    username: { type: String, require: true },
    password: { type: String, require: true },
    cookie: { type: String, require: true },
    email: { type: String, require: true },
}))
module.exports = (username,password,cookie,email) => {
    return new Promise((resolve, reject) => {
        User.create({
            username,
            password,
            cookie,
            email
        }, function (err, doc) {
            if (!err) {
                resolve(doc)
            } else {
                reject(err)
            }
        })
    })
}
// module.exports = () => {
//     return new Promise((resolve, reject) => {
//         User.create({
//             username: 'bbbsdfjkjsd',
//             password: '333333',
//             cookie: '1554'
//         }, function (err, doc) {
//             if (!err) {
//                 resolve(doc)
//             } else {
//                 reject(err)
//             }
//         })
//     })
// }

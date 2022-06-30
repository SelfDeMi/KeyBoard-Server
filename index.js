const express = require('express');
const useUsers = require('./modules/useUsers');
const setUser = require('./modules/setUsers');
const findCookie = require('./modules/cookieFind.js');
const sendEmail = require('./modules/sendEmail');
const app = express()

app.get('/',(req,res) => {
    res.send('请求home成功')
})
app.get('/login',(req,res) => {
    useUsers(req.query.username).then((result) => {
        if (!result) {
            res.send('无该用户')
        }else{
            if (result.password === req.query.password) {
                res.send(result)
            }
        }
    },(err) => {
        res.send("登录失败",err)
    })
    
})
//查询数据库，进行验证
app.get('/find',(req,res) => {
    
    useUsers(req.query.username).then((result) => {
        //数据库内无该用户
        if (!result) {
            res.send('该用户不存在')
        }else{
            //数据库有该用户
            res.send("该用户已存在")
        }
    },(err) => {
        res.send("登录失败",err)
    })
})
// 查询数据库，进行验证cookie验证
app.get('/cookie',(req,res) => {
    findCookie(req.query.cookie).then((result) => {
        //数据库内无该用户
        if (!result) {
            res.send('该用户不存在')
        }else{
            //数据库有该用户
            // console.log(result);
            res.send("该用户已存在")
        }
    },(err) => {
        res.send("登录失败",err)
    })
})
//验证码
app.get('/register/identicode',(req,res) => {
    sendEmail(req.query.identifyCode,req.query.toEmail).then((result) => {
    // sendEmail('1111111','1546573093@qq.com').then((result) => {
        res.send(result)
    },(err) => {
        res.send(err)
    })
})
//插入数据库
app.get('/register/insertdb',(req,res) => {
    const {username,password,cookie,email}=req.query
    setUser(username,password,cookie,email).then((result) => {
        res.send(result)
    },(err) => {
       res.send(err) 
    })
})

app.listen(8000,() => {
    console.log('服务器启动成功','localhost://8000');
})
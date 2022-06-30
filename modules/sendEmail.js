const nodemailer = require('nodemailer');
 
module.exports = (identifyCode,toEmail) => {
 


return new Promise((resolve,reject) => {
        // 开启一个 SMTP 连接池
let transporter = nodemailer.createTransport({
    host: 'smtp.qq.com',
    secureConnection: true, // use SSL
    port: 465,
    secure: true, // secure:true for port 465, secure:false for port 587
    auth: {
        user: '2624752305@qq.com',
        pass: 'ccaqtqsyjraydjhg' // QQ邮箱需要使用授权码
    }
});

// 设置邮件内容（谁发送什么给谁）
let mailOptions = {
    from: '"SelfDeMi" <2624752305@qq.com>', // 发件人
    // to: 'xx1@qq.com, xx2@qq.com', // 收件人
    to: `${toEmail}`, // 收件人
    subject: '验证信息 ✔', // 主题
    text: `您的验证码是:${identifyCode}`, // plain text body
    html: `<b>这是一封来自Keyboard的验证邮件</b>
    <br></br>
    您的验证码是:${identifyCode}
    `, // html body
    // 下面是发送附件，不需要就注释掉
    // attachments: [{
    //         filename: 'test.md',
    //         path: './test.md'
    //     },
    //     {
    //         filename: 'content',
    //         content: '发送内容'
    //     }
    // ]
};
 
// 使用先前创建的传输器的 sendMail方法传递消息对象
transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        reject(error)
        return console.log(error);
    }else{
        resolve("成功")
    console.log(`Message: ${info.messageId}`);
    console.log(`sent: ${info.response}`);
    }
    
});
})



}
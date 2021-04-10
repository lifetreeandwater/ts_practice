const express = require('express');
const controller = require('./controller/controller')
const path=require('path')


let app = express();

app.set('views',path.resolve(__dirname,'view'));
app.set('view engine','ejs')

app.get('/',controller.index)

//配置静态资源文件，css读取不出来
app.use(express.static('public'))

app.listen(3000,()=>{
    console.log('app is running in port 3000')
})
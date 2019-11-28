const express =require("express");
const cors = require("cors");
const  axios = require("axios").default;

const  app =express();


app.use(express.urlencoded());

app.use(express.json());

app.use(cors())



app.post("./api/v1/proxy",(req,res)=>{
    const{ url }=req.body
axios.get(url).then(response=>{
    res.json(
        {
           info:response.data,
           code:1 
        }
    )
})
})

app.listen(3000,()=>console.log("代理服务器请求成功"))
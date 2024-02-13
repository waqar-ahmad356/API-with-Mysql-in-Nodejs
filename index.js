const express=require('express');
const conn=require('./config');
const app=express();

app.get('/get',(req,resp)=>{
    conn.query('select * from user',(err,result)=>{
        if(err)
        {
            resp.send('Error in connection')
        }
        else{
            resp.send(result);
            resp.send("Route perfect");
        }
    })
    
});

app.post('/update',(req,resp)=>{
    const data={
        name:'waqar ahmad',price:1200,category:"mobile",brand:"iphone"
    }
    conn.query("insert into user set ?",data,(err,result,fields)=>{
        if(err)
        {
            resp.send("Error in connection");
        }
        else
        {
            resp.send(result);
            resp.send("updated data")
        }
    })
})
app.listen(4500);
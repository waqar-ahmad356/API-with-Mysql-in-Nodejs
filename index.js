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

app.post('/insert',(req,resp)=>{
    const data={
        name:'ayesha siddiqa',price:1200,category:"mobile",brand:"iphone"
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
app.put('/update',(req,resp)=>{
    const data=['haider','1200','phone','samsung','23112'];
    conn.query('update user set name=?,price=?,category=?,brand=? where price=?',data,(err,result,fields)=>{
        if (err)
        {
            console.log('Error occured');
        }
        else
        {
            resp.send(result);
        }

    })
    resp.send('updated');
})
app.delete('/delete',(req,resp)=>{
    const data=['waqar'];
    conn.query('delete from users where name=?',data,(err,result,fields)=>{
        if (err)
        {
            console.log('error occured');
        }
        else{
            resp.send(result);
        }
    })
    resp.send('deleted successfully!');
})
app.listen(4500);
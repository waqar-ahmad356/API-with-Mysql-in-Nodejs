const mysql=require('mysql');

const conn=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'mydb'
});
conn.connect((err)=>{
    if (err)
    {
        console.log("Error in connection")
    }
    else
    {
        console.log('Connected')
    }

});
module.exports=conn;
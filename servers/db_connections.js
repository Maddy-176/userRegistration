const mysql= require('mysql');
const express= require('express');

const app= express();
const port=5000;
var cors = require('cors')
app.use(cors())

app.use(express.json())
const con= mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'Welcome@123!',
    database:"usser_table",
});

// app.use(express.json());

// app.use(express.urlencoded({
//     extended:true,
// }))

app.get("/",(req,res)=>{
    res.json({message:"ok"})
});

app.listen(port,()=>{
    console.log(`Example of app listening at http`)
})

app.get("/users",(req,res)=>{
    con.query("SELECT * FROM registered_users", (err,data)=>{
        if(err) throw err;
        res.json({
            status:200,
            data,
        })
    })
})
app.post("/register",(req,res)=>{
    var first_name=req.body.first_name;
    var last_name=req.body.last_name;
    var user_name= req.body.user_name;
    var email= req.body.email;
    var tel_number= req.body.tel_number;
    var password= req.body.password;

    con.query("INSERT INTO registered_users (first_name,last_name, user_name,email, tel_number,password) VALUES(?,?,?,?,?,?)",
    [first_name, last_name, user_name,email, tel_number, password],
    (err,result)=>{
        if(err){
        console.log(err)
        }
        
    }
    )
})
con.connect(function(err){
    if(err) throw err;
    console.log("Connected!");
    // var sql = "CREATE TABLE registered_users(user_id int NOT NULL AUTO_INCREMENT, first_name VARCHAR(255) not null, last_name VARCHAR(255),user_name VARCHAR(255) not null UNIQUE,email VARCHAR(255) NOT NULL UNIQUE ,tel_number VARCHAR(255) NOT NULL UNIQUE , password VARCHAR(255), PRIMARY KEY(user_id))";
    // con.query(sql, function(err, result){
    //     if(err) throw err;
    //     console.log("Table created");
    // })
})
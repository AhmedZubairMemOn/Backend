require("dotenv").config()
const express = require("express")
const app = express()
const connectDB = require("./controllers/db/connect")


const PORT = process.env.PORT || 2000

const products_routes = require("./routes/products")

app.get("/",(req,res) =>{
    res.send("hello i am live")
})



app.use("/api/products",products_routes)

const start = async () =>{
    try{
        await connectDB(process.env.mongoDbUrl)
        app.listen(PORT,()=>{
            console.log(`${PORT}yes i am connect`);
            
        })
    }catch(error){
        console.log(error)
        
    }
} 
start()
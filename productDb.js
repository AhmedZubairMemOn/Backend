const connectDB = require("./controllers/db/connect")
const product = require("./models/products")
const ProductJson = require("./product.json")

const start = async () =>{
    try{
        await connectDB(process.env.url)
        await product.create(ProductJson)
        console.log("successfully");
    }catch(error){
        console.log(error);
        
    }
}
start()

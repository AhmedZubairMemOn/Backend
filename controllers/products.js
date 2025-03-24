const Products = require("../models/products")

const getAllProducts = async (req,res) =>{
    const {company} = req.query; 
    const queryObj = {}

    if(company){
        queryObj.company = company;
        console.log(queryObj.company);
    }

    const myData = await  Products.find(queryObj);
    res.status(200).json({myData});
}

const getAllProductsTesting = async(req,res) =>{

    res.status(200).json({
        message:"i am get all post testing"
    })
}

module.exports = { getAllProducts, getAllProductsTesting}
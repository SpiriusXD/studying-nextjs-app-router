import { connectDB2 } from "@/app/server/db-services";
import mongoose from "mongoose";


export async function GET() {

    console.log("Scheme strict");

    await connectDB2();
    
    let ConnectionBot ;
    try {
        
        const scheme = new mongoose.Schema({
            model: String,
            brand: String,
            year: Number


        });
        //getting the collection
        ConnectionBot = mongoose.model("car", new mongoose.Schema(scheme));

        const data = {
            brand: "Fiat",
            model : "Punto",
            year: 2025,
            amount: 9
        };
        //will be document
        const newItem = new ConnectionBot(data);
       await newItem.save();

        // ConnectionBot = mongoose.model(entityName, new mongoose.Schema({}, {strict: false}));
    } catch (err) {
        // If the model doesn't exist, create it
       console.error("err = ", err);
       return Response.json({
        error: err.message
       })
       
    }
    return Response.json({ message: 'Hello Izhar' })
  }

  
export async function POST() {

    console.log("Scheme NOT strict");

    await connectDB2();
    
    let ConnectionBot ;
    try {
        
        const scheme = new mongoose.Schema({
            pen: String,
            price: Number, 
            isNails: Boolean         
            


        });
        //getting the collection
        ConnectionBot = mongoose.model("cosmeticTreatment", new mongoose.Schema(scheme, {strict: false}));

        const data = {
           pen: "black",
            price: 150, 
            isNails: false, 
            size: "xyz"     
        };
        //will be document
        const newItem = new ConnectionBot(data);
       await newItem.save();

        // ConnectionBot = mongoose.model(entityName, new mongoose.Schema({}, {strict: false}));
    } catch (err) {
        // If the model doesn't exist, create it
       console.error("err = ", err);
       return Response.json({
        error: err.message
       })
       
    }
    return Response.json({ message: 'Hello Izhar' })
  }
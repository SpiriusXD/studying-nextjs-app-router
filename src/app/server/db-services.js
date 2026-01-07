const DATABASE_NAME = "NEXTJS_APP_ROUTER";
// const MONGO_URI = "mongodb://lingar:12345678@localhost:27017/" + DATABASE_NAME + "?authSource=admin";
const MONGO_URI = "mongodb://localhost:27017/"
let cached = global.mongoose || {conn: null, promise: null};

let isConnected = false;


//Initial connection to DB
export const connectDB2 = async () => {
    if (isConnected) return;

    try {
        await mongoose.connect(MONGO_URI, {serverSelectionTimeoutMS: 5000});
        isConnected = true;
        await createInitData();
        console.log("db connected by mongoose 222");
    } catch (e) {
        if (e.name === "MongoServerError" && e.code === 18) {
            console.error("Wrong credentials! \n***CHECK THE CREDENTIALS ON THE URI***");
           // alert("wwww");
            throw "Authentication error";
        }
        console.log("Error in mongoose connection 222\n", e);
        throw "error on mongoose";


    }
};



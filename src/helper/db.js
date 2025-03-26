import mongoose from "mongoose";
export const connectDB = async() => {
try {
    const {connection} =await mongoose.connect(process.env.MONGO,{
        dbName:"bloodcare"
    });

    console.log('db connected');
} catch (error) {
    console.log("failed to connect", error);
}
}
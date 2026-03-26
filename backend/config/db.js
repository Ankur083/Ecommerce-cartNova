import mongoose from 'mongoose';
import moongoose from 'mongoose';


const connectDB = async () => {
    mongoose.connection.on('connected', () => {
        console.log("DB Connected")
    })
    await mongoose.connect(`${process.env.MONGO_URI}/e-commerce-cartNova`)
}

export default connectDB;
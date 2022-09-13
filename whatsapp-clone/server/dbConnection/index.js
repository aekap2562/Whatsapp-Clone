import mongoose from 'mongoose'; 

const DB_CONNECTION_URL = 'mongodb+srv://aekap25:UMVZj%2FM8%2Fn6-Y3b@cluster0.xf7ihqa.mongodb.net/?retryWrites=true&w=majority';

const connectDB = () => {
    console.log("DB is trying to connect on " + new Date());

    const options = {
        keepAlive: 1, 
        autoReconnect: true,
        poolSize: 10,
        useNewUrlParse: true, 
        useUnifiedTopology: true
    };
    return mongoose.connect(DB_CONNECTION_URL, options);
}

export default connectDB; 
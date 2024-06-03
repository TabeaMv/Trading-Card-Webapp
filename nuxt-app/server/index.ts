import mongoose from 'mongoose'

export default defineNitroPlugin(() => {
    const config = useRuntimeConfig();
    
    try {
        mongoose.connect(config.mongodbUri);
        console.log("Connected to MongoDB");
    } catch (e) {
        console.error(e);
    }
});
import mongoose from 'mongoose';

const connectDB = async (url) => {
  try {
    await mongoose.connect(url);
    console.log('Connected to MongoDB 🚀');
  } catch (error) {
    console.error('Failed to connect to MongoDB 😞');
    console.error(error);
  }
};

export default connectDB;

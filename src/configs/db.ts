import mongoose from 'mongoose';
import { env } from './config.js';

const connectDB = async (): Promise<void> => {
  try {
    await mongoose.connect(env.MONGO_URI);
    console.log('Connect to DB');
  } catch (error: unknown) {
    console.error(
      'Failed to connect.',
      error instanceof Error ? error.message : String(error)
    );
  }
};

export default connectDB;

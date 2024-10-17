import mongoose, { Mongoose } from 'mongoose';

const mongodb_url = process.env.MONGODB_URI;

interface MongooseConnection {
  conn: Mongoose | null;
  promise: Promise<Mongoose> | null;
}

// Declare a global variable to cache the connection
declare global {
  // eslint-disable-next-line no-var
  var mongoose: MongooseConnection | undefined;
}

// Initialize the cached connection globally if it doesn't exist
let cached: MongooseConnection = global.mongoose || { conn: null, promise: null };

if (!cached) {
  cached = { conn: null, promise: null };
  global.mongoose = cached; // Assign it globally for re-use
}

// Function to connect to the database
export const connectToDb = async () => {
  if (cached.conn) return cached.conn;
  
  if (!mongodb_url) throw new Error('Missing MONGODB_URL');

  // If no promise exists, create a new connection promise
  cached.promise = cached.promise || mongoose.connect(mongodb_url, {
    dbName: 'shopify',
    bufferCommands: false,
  });

  cached.conn = await cached.promise;
  return cached.conn;
};

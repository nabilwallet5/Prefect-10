import mongoose from 'mongoose';

const MONGODB_URI = 'mongodb+srv://perfact10:PerfactAtlas@perfact-10.yfdjevf.mongodb.net/?appName=Perfact-10';

let cached = global.mongoose || (global.mongoose = { conn: null, promise: null });

export default async function dbConnect() {
  if (cached.conn) return cached.conn;
  if (!cached.promise) {
    cached.promise = mongoose.connect(MONGODB_URI, {
      bufferCommands: false,
      dbName: 'Prefect-10', 
    }).then(m => m);
  }
  cached.conn = await cached.promise;
  return cached.conn;
}

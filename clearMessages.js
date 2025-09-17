import dotenv from 'dotenv';
dotenv.config();

import connectDB from './config/db.js';
import Chat from './models/Chat.js';

async function clearAllMessages() {
    try {
        await connectDB();
        const result = await Chat.updateMany({}, { $set: { messages: [] } });
        console.log(`Cleared messages from ${result.modifiedCount} chats.`);
    } catch (error) {
        console.error('Error clearing messages:', error);
    } finally {
        process.exit();
    }
}

clearAllMessages();

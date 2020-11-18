
import mongoose from 'mongoose';
import colors from 'colors';
import dotenv from 'dotenv';
import fakeDB from './FakeDB.js';

dotenv.config();

try {
    await mongoose.connect(process.env.MONGO_URI, {
        useUnifiedTopology: true,
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false
    });
    console.log('> Starting populating DB...')
    await fakeDB.populate();
    await mongoose.connection.close();
    console.log('> DB has been populated...');

} catch (e) {
    console.log(`Error: ${e.message}`.red.underline.bold);
    process.exit(1);
}

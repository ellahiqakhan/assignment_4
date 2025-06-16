const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI, {
      // These options are no longer needed in latest mongoose but keeping for older versions compatibility
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    
    console.log(`MongoDB Connected: ${conn.connection.host}`);
    
    // Test connection by listing collections
    const collections = await conn.connection.db.listCollections().toArray();
    console.log(`Available collections: ${collections.map(c => c.name).join(', ') || 'None yet'}`);
    
  } catch (error) {
    console.error(`Error connecting to MongoDB: ${error.message}`);
    console.error(error);
    process.exit(1);
  }
};

module.exports = connectDB; 
const mongoose = require('mongoose');

const uri = 'mongodb+srv://visionaryvibes2026:visionaryvibes2026@cluster0.qqvrp6f.mongodb.net/symposium?retryWrites=true&w=majority&appName=Cluster0';

async function listCollections() {
  try {
    await mongoose.connect(uri);
    console.log("Connected to MongoDB");

    const collections = await mongoose.connection.db.listCollections().toArray();
    
    console.log("\nExisting Collections:");
    if (collections.length === 0) {
      console.log(" - No collections found.");
    } else {
      collections.forEach(col => {
        console.log(` - ${col.name}`);
      });
    }

    await mongoose.connection.close();
  } catch (error) {
    console.error("Error:", error);
  }
}

listCollections();

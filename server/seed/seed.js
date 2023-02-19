const db = require('../config/connection');
const { Chronicle } = require('../models');
const blogData = require('./blogData.json');

db.once('open', async () => {
  try {
    // await Chronicle.deleteMany({});
    await Chronicle.insertMany(blogData);

    console.log('all done!');
    process.exit(0);
  } catch (err) {
    throw err;
  }
});
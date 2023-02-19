const db = require('../config/connection');
const { Chronicle } = require('../models/Chronicles');
const chronicleSeeds = require('./seed.json');

db.once('open', async () => {
  try {
    // await Chronicle.deleteMany({});
    await Chronicle.create(chronicleSeeds);

    console.log('all done!');
    process.exit(0);
  } catch (err) {
    throw err;
  }
});
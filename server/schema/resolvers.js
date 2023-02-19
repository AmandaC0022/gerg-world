const { Chronicle } = require('../models/Chronicles'); 

const resolvers = {
    Query: {
        chronicle: async () => {
            return Chronicle.find({}); 
        }
    }
}

module.exports = resolvers; 
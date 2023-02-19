const { Chronicle } = require('../models'); 

const resolvers = {
    Query: {
        chronicle: async () => {
            return Chronicle.find({}); 
        }
    }
}

module.exports = resolvers; 
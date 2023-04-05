const { Chronicle } = require('../models'); 

const resolvers = {
    Query: {
        chronicle: async () => {
            return Chronicle.find({}); 
        }
    },
    Mutation: {
        createBlog: async (parent, args) => {
            const blog = await Chronicle.create(args); 
            return blog; 
        }
    }
}

module.exports = resolvers; 
const { Chronicle } = require('../models'); 

const resolvers = {
    Query: {
        getBlogs: async () => {
            return Chronicle.find({}); 
        }
    },
    Mutation: {
        createBlog: async (parent, args) => {
            const blog = await Chronicle.create(args); 
            return blog; 
        }, 
        deleteBlog: async (parent, { blog }) => {
            return await Chronicle.findOneAndDelete({ _id: blog._id }); ç 
        }
    }
}

module.exports = resolvers; 
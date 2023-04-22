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
        deleteBlog: async (parent, { blogId }) => {
            const blog = await Chronicle.findOneAndDelete({ _id: blogId }); 
            return blog; 
        }
    }
}

module.exports = resolvers; 
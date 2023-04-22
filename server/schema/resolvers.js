const { Chronicle } = require('../models'); 

const resolvers = {
    Query: {
        getBlogs: async () => {
            return Chronicle.find({}); 
        }, 
        getSingleBlog: async (parent, { blogId }) => {
            return Chronicle.findOne({ _id: blogId })
        }
    },
    Mutation: {
        createBlog: async (parent, args) => {
            const blog = await Chronicle.create(args); 
            return blog; 
        }, 
        deleteBlog: async (parent, { blogId }) => {
            return await Chronicle.findOneAndDelete({ _id: blogId }); ç 
        }
    }
}

module.exports = resolvers; 
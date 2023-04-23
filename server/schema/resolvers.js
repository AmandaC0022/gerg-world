const { Chronicle } = require('../models'); 

const resolvers = {
    Query: {
        getBlogs: async () => {
            return Chronicle.find({}); 
        }, 
        findBlog: async (parent, args) => {
            return await Chronicle.findById(args.id);
        }
    },
    Mutation: {
        createBlog: async (parent, args) => {
            return await Chronicle.create(args); 
        }, 
        deleteBlog: async (parent, args ) => {
            const { id } = args; 
            const deletedBlog = await Chronicle.findByIdAndDelete(id); 
            if (!deletedBlog) {
                throw new Error(`Blog with ID ${id} is not found.`); 
            }
            return deletedBlog; 
        },
        updateBlog: async (parent, args) => {
            const { id } = args; 
            const updatedBlog = await Chronicle.findByIdAndUpdate(id, args);
            if (!updatedBlog) {
                throw new Error(`Blog with ID ${id} is not found.`); 
            } 
            return updatedBlog; 
        }
    }
}

module.exports = resolvers; 
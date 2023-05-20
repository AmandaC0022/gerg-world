const { Chronicle } = require('../models'); 
const { Gergal } = require('../models'); 

const resolvers = {
    Query: {
        getBlogs: async () => {
            return Chronicle.find({}); 
        }, 
        findBlog: async (parent, args) => {
            return await Chronicle.findById(args.id);
        }, 
        findGergals: async () => {
            return Gergal.find({}); 
        }, 
        findGergal: async(parent, args) => {
            return await Gergal.findById(args.id); 
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
        }, 
        createGergal: async (parent, args) => {
            return await Gergal.create(args); 
        }, 
        deleteGergal: async (parent, args ) => {
            const { id } = args; 
            const deleteGergal = await Gergal.findByIdAndDelete(id); 
            if (!deleteGergal) {
                throw new Error(`Gergal with ID ${id} is not found.`); 
            }
            return deleteGergal; 
        },
        updateGergal: async (parent, args) => {
            const { id } = args; 
            const updatedGergal = await Gergal.findByIdAndUpdate(id, args);
            if (!updatedGergal) {
                throw new Error(`Gergal with ID ${id} is not found.`); 
            } 
            return updatedGergal; 
        }
    }
}

module.exports = resolvers; 
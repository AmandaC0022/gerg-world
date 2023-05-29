const { Chronicle, Gergal, Gergism } = require('../models'); 

const resolvers = {
    Query: {
        getBlogs: async () => {
            return Chronicle.find({}); 
        }, 
        findBlog: async (parent, args) => {
            return await Chronicle.findById(args.id);
        }, 
        findGergals: async () => {
            return await Gergal.find({}); 
        }, 
        findGergal: async(parent, args) => {
            return await Gergal.findById(args.id); 
        }, 
        findGergism: async(parent, args) => {
            return await Gergism.findById(args.id); 
        }, 
        findGergisms: async () => {
            return await Gergism.find({})
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
        }, 
        createGergism: async (parent, args) => {
            return await Gergism.create(args); 
        }, 
        updateGergism: async (parent, args) => {
            const { id } = args; 
            const updatedGergism = await Gergism.findByIdAndUpdate(id, args);
            if (!updatedGergism) {
                throw new Error(`Gergism with ID ${id} is not found.`); 
            } 
            return updatedGergism; 
        }, 
        deleteGergism: async (parent, args ) => {
            const { id } = args; 
            const deleteGergism = await Gergism.findByIdAndDelete(id); 
            if (!deleteGergism) {
                throw new Error(`Gergism with ID ${id} is not found.`); 
            }
            return deleteGergism; 
        }
    }
}

module.exports = resolvers; 
const { Chronicle, Gergal, Gergism, Recipe, Category } = require('../models'); 

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
        },
        findRecipe: async(parent, args) => {
            return await Recipe.findById(args.id); 
        }, 
        findRecipes: async () => {
            return await Recipe.find({})
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
        },
        createRecipe: async (parent, args) => {
            return await Recipe.create(args); 
        }, 
        deleteRecipe: async (parent, args ) => {
            const { id } = args; 
            const deletedRecipe = await Recipe.findByIdAndDelete(id); 
            if (!deletedRecipe) {
                throw new Error(`Recipe with ID ${id} is not found.`); 
            }
            return deletedRecipe; 
        },
        updateRecipe: async (parent, args) => {
            const { id } = args; 
            const updatedRecipe = await Recipe.findByIdAndUpdate(id, args);
            if (!updatedRecipe) {
                throw new Error(`Recipe with ID ${id} is not found.`); 
            } 
            return updatedRecipe; 
        }, 
    }
}

module.exports = resolvers; 
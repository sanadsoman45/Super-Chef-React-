const ingredientsModel = require('../models/ingredients.model');

const getAllingredients = async(req, res)=>{
    try{
        const ingredientsList = await ingredientsModel.getAllIngredients();
        res.status(200).json(ingredientsList);
    }
    catch(error){
        console.error(error);
    }
}

module.exports = {
    getAllingredients
}
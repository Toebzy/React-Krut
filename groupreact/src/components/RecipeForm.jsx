import { useEffect, useState } from "react";

function RecipeForm({blankRecipe, recipesToEdit, updateRecipe, mutateRecipe}) {

    const [recipe, setRecipe] = useState({...recipesToEdit});

    useEffect(() => {
        setRecipe(recipesToEdit)
    }, [recipesToEdit]);

    function handleChange(event) {
        const value = event.target.value;
        const name = event.target.id;
        setRecipe({...recipe, [name]: value});
    }

    function handleSubmit(event) {
        event.preventDefault();
        mutateRecipe(recipe);
    }

    return (
        <div class="recipeForm">
            <div id = "title">
                 <h2>Add Items</h2>
            </div>
               
            <div id = "widthfull">
            <form onSubmit={handleSubmit}>
                <label htmlFor="id">Id:</label>
                <input 
                id="1" 
                type="number" 
                readOnly 
                placeholder="id" 
                value={recipe.id}
                />
                <label htmlFor="item">Item:</label>
                <input 
                id="item" 
                type="text" 
                placeholder="item" 
                value={recipe.item} 
                onChange={handleChange}
                />
                <label htmlFor="amount">Amount:</label>
                <input 
                id="amount" 
                type="number" 
                min="1" 
                placeholder="amount" 
                value={recipe.amount} 
                onChange={handleChange}
                />
                <label htmlFor="price">Price:</label>
                <input 
                id="price" 
                type="number" 
                min="1" 
                placeholder="price" 
                value={recipe.price} 
                onChange={handleChange}
                />

            <div id="buttons">
                <button>Add/Update</button>
            </div>
           
            </form> 
            </div>
        
        </div>
    )
}

export default RecipeForm;
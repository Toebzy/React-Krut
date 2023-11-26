function RecipeList({recipes, deleteRecipeById, editRecipe}) {
    return (
        <div>
        <table className="table table-striped">
    <thead>
        <tr>
        <th>Id</th>
        <th>Item</th>
        <th>Amount</th>
        <th>Price</th>
        <th></th>
        </tr>
    </thead>
    <tbody>
        {recipes.map(recipe => 
            (
            <tr key={crypto.randomUUID()}>
            <td>{recipe.id}</td>
            <td>{recipe.item}</td>
            <td>{recipe.amount}</td>
            <td>{recipe.price}</td>
            <td>
                <button onClick={() => editRecipe(recipe)}>Edit</button>
                <button onClick={() => deleteRecipeById(recipe.id)}>Delete</button>
            </td>
            </tr>
        ))}
    </tbody>
    </table>
    </div>
    );
}

export default RecipeList;
import './styles/App.css'
import RecipeList from './components/RecipeList'
import RecipeForm from './components/RecipeForm'
import { useEffect, useState } from 'react';
import { fetchData } from './util/persistence';

const blankRecipe = { id: '', item: '', amount: '', price: '' };

function App() {
  const [recipes, setRecipes] = useState([]);
  const [recipesToEdit, setRecipesToEdit] = useState(blankRecipe);

  const APIURL = 'http://localhost:3000/api';

  function editRecipe(person) {
    setRecipesToEdit(person);
  }

  function mutateRecipe(recipe) {
    if (recipe.id != "") {
      updateRecipe(recipe);
    } else {
      createRecipe(recipe);
    }
  }

  function updateRecipe(recipe) {
    console.log('update');
    fetchData(`${APIURL}/${recipe.id}`, 
    (recipe) => {
    setRecipes(recipes.map((r) => (r.id === recipe.id ? {...recipe} : r)));
    },
    "PUT", 
    recipe);
  }

  function createRecipe(recipe) {
    console.log('create');
    fetchData(`${APIURL}`, 
    (recipe)=>setRecipes([...recipes, recipe]), 
    "POST", 
    recipe);
  }

  function getRecipes(callback) {
    fetchData(APIURL, callback);
  }

  function deleteRecipeById(recipeId) {
    fetchData(`${APIURL}/${recipeId}`, ()=>{}, "DELETE");
    setRecipes([...recipes.filter(r => r.id != recipeId)]);
  }

  useEffect(() => {
    getRecipes((data) => setRecipes(data));
  }, []);


  return (
    <div>
      <h1>A Recipe App</h1>
      <RecipeList recipes={recipes} deleteRecipeById={deleteRecipeById} editRecipe={editRecipe}/>
      <RecipeForm blankRecipe={blankRecipe} recipesToEdit={recipesToEdit} mutateRecipe={mutateRecipe}/>
    </div>
  )
}

export default App;
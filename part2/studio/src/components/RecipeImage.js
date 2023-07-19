import recipedata from './recipe.json';


function RecipeImage() {
  const recipeImages = recipedata.map((data) => (
    <div key={data.name}>
      <img src={data.recipeImage} alt={data.name} className="recipeImage" />
      {/* Continue rendering other components here */}
    </div>
  ));
   return  <div>{recipeImages}</div>;
 }
 
 export default RecipeImage;
 
 //import json file for the data
 //apply css for className recipeImage
 
import React from 'react';
import styles from './Description.module.css';
function RecipeAuthor(){
    let authorLink = "https://pinchofyum.com/";
    let authorPhoto = "https://pinchofyum.com/wp-content/assets/images/home-lindsay-kitchen-380x480.jpg";
    let authorName = "LINDSAY";
    return (
        <div className = {styles.recipeAuthorBlock}>
            
           <img src={authorPhoto} alt = "Lindsay-Kitchen" className={styles.imageUpdates} />
           <div className = {styles.recipeDescriptionBlock}>
              <h3>{authorName}</h3>
              <a href={authorLink}>Blog name</a> 
           </div>
        </div>
     );
}
class RecipeDescription extends React.Component {
    render() {
        return (
<div> 
<div>
   <h1>Recipe Title</h1>
   <p>Short recipe description</p>
</div>
<RecipeAuthor />
</div>
        );
    };
};

export default RecipeDescription;
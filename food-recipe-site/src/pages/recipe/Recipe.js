import { useParams } from 'react-router-dom';
import { useFetch } from '../../hooks/useFetch';
import { useTheme } from '../../hooks/useTheme';

import './Recipe.css'

const Recipe = () => {

    let { id } = useParams();
    const url = "http://localhost:3000/recipes/" + id;
    const { data: recipe, isPending, error } = useFetch(url);

    const { mode } = useTheme()

    return ( 
        <div className={`recipe ${mode}`}>
            { isPending && <p className="loading">Loading...</p>}
            { error && <p className="error">{error}</p>}
            { recipe && (
                <>
                    <h2 className="page-title">{recipe.title}</h2>
                    <p>Takes {recipe.cookingTime} to cook.</p>
                    <ul>
                        {recipe.ingredients.map(ingredient => <li key={ingredient}>{ingredient}</li>)}
                    </ul>
                    <p className="method">{recipe.method}</p>
                </>
            )}
        </div>
     );
}
 
export default Recipe;
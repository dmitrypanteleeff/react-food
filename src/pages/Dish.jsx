import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getMealById } from "../api";
import { Preloader } from "../components/Preloader";
import { ListIngredients } from '../components/ListIngredients';

function Dish() {
    const { id } = useParams();

    const page = useNavigate(); 

    const moveToBack = () => {
        // console.log('click')
        page(-1);
    }

    const [dish, setDish] = useState();

    const [instruction, setInstruction] = useState(false);

    useEffect(() => {
        getMealById(id).then(data => {
            setDish(data.meals)
            // console.log(dish)
            }   
        );    
    }, [id])

    // console.log(dish);

    const changeInstruction = () => {
        setInstruction(!instruction);
    }

    // let newName = name.slice(1, name.length);

    return (<div>
        <div>
            {(dish === undefined) ? (<Preloader />) : (
                <div className="dish-item" >
                    <div className="card">
                        <div className="card-image card-image-dish">
                            <img src={dish[0].strMealThumb} alt={ dish[0].strMeal } />
                        </div>
                        <div className="card-content">
                            <h3>{ dish[0].strMeal}</h3>
                            <h4>Instructions</h4>
                            {(!instruction) ? (
                                <div>
                                    <p>
                                        {dish[0].strInstructions.slice(0, 110)}...
                                    </p>
                                
                                        <button className="btn btn__instruction" onClick={changeInstruction}>
                                            Show full instuction
                                        </button>           
                                </div>
                            ) : (<div>
                                    <p>{dish[0].strInstructions}</p>
                                        <button className="btn btn__instruction" onClick={changeInstruction}>
                                            Hide instuction
                                        </button>   
                                </div>
                            )}
                            <h4>
                                Ingredients
                            </h4>
                            <ListIngredients dish={dish[0]} />
                            {(!dish[0].strYoutube.length) ?
                                (<span> </span>) :
                                
                            
                                (<div>
                                    <h4>
                                        <a href={dish[0].strYoutube} target="_blank">
                                            Link to video
                                        </a>
                                    </h4>
                                </div>)}
                            
                        </div>
                        <div className="card-action">
                            <button className="btn" onClick={()=>moveToBack()}>Back</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
        
        
    </div>)
}

export { Dish }
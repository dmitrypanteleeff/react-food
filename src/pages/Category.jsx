import { useParams } from 'react-router-dom';
import { getFilteredCategory } from '../api.js';
import { useEffect, useState } from 'react';
import { Preloader } from '../components/Preloader';
import { MealList } from '../components/MealList';


function Category() {
    const { name } = useParams();
    // console.log('name form Category',name)
    const [meals, setMeals] = useState([]);

    let newName = name.slice(1, name.length)
    
    // console.log(newName);

    

    useEffect(() => {
        getFilteredCategory(newName).then(data => {
            setMeals(data.meals)
            // console.log(data)
            // console.log('meals from Category',meals)
        });
        
    }, [name])
    
    return (
        <div>
            {!meals.length ? <Preloader/> : <MealList meals={meals} />}
        </div>
    )
}

export { Category }
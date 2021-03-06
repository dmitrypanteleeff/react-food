import { MealItem } from './MealItem';

function MealList(props) {

    const { meals = [] } = props;

    return (
        <div className="list">
            {meals.map(el => {
                return <MealItem key={el.idMeal} {...el} />
            })}
        </div>
    )

}

export { MealList }
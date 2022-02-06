import { IngredientItem } from "./IngredientItem";

function ListIngredients(props) {
    const { dish } = props;
    // console.log(dish, 'ListIng')
    let obj = [];
    

    for (let key in dish) {

        let keyChange = key.replace(/[^a-z,^A-Z]/g, '');
        if (keyChange === 'strIngredient') {
            if ((dish[key] !== '') && (dish[key] !== null)) {
                let number = key.replace(/[a-z,A-Z]/g, '');
                 // console.log(key)
                 // console.log(number);
                 let stroka = `strMeasure${number}`;

                 obj.push({
                     'id': key,
                     'stroka': stroka,
                     'ingredient': dish[key],
                     'measure': dish[stroka],
                 })

                 //console.log(stroka);
                 //console.log(dish[key])
            }
        }
    }

    // console.log(obj)

    return (<>
        <div className="collection">
            {obj.map(el => {
               return  <IngredientItem key={el.id} {...el} />
            })}
        </div>
    </>)
}

export {ListIngredients}
function IngredientItem(props) {

    const { ingredient, id, measure, stroka } = props;

    return (
        <div className="collection-item">
            <span className="badge red measure__count">{measure}</span>{((ingredient === '') || (ingredient === null)) ? (null) : ( ingredient ) }
        </div>
    )
}

export { IngredientItem }
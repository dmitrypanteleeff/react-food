import { CategoryItem } from './CategoryItem'

function CategoriesList(props) {

    const { catalog = [] } = props;
    // console.log('catalog from CL',catalog)

    return (
        <div className="list">
            {!catalog.length ?
                (<h3>No Result</h3>) :
                (catalog.map(el => {
                    return  <CategoryItem key={el.idCategory} {...el} />
                })
            )}
            
        </div>
    )
}

export  { CategoriesList }
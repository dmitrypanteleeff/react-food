import React, { useContext } from 'react';
import { CustomContext } from './Context';

function BasketItem(props) {
    const { mainId, displayName, price, quantity } = props;
    console.log(props)

    const { removeOrder, addCountOrder, removeCountOrder } = useContext(CustomContext);

    // <div>{ quantity === 1 ? (<span className="secondary-content" onClick={() => removeOrder(mainId)}><i className="material-icons">remove</i></span>) : (<span className="secondary-content" onClick={() => removeCountOrder({ mainId, displayName, price })}><i className="material-icons">remove_circle_outline</i></span>)}&nbsp;x{quantity}<span className="secondary-content" onClick={() =>  addCountOrder({ mainId, displayName, price }) }><i className="material-icons">add_circle_outline</i></span></div>
    // <div><span className="secondary-content" onClick={() => removeCountOrder({ mainId, displayName, price })}><i className="material-icons">remove_circle_outline</i></span>&nbsp;x{quantity}<span className="secondary-content" onClick={() => { addCountOrder({mainId, displayName, price}) } }><i className="material-icons">add_circle_outline</i></span></div>
    return (
        <li className="collection-item product-item-row__wrapper">
            <div className='product-item-row'>
                <div className='product-item-name'>{displayName}&nbsp;</div>
                <div className='product-item-row-2'>
                    <div>{quantity === 1 ? (<span className="secondary-content" onClick={() => removeOrder(mainId)}><i className="material-icons">remove_circle_outline</i></span>) : (<span className="secondary-content" onClick={() => removeCountOrder({ mainId, displayName, price })}><i className="material-icons">remove_circle_outline</i></span>)}</div>
                    <div>&nbsp;x{quantity}&nbsp;</div>
                    <div><span className="secondary-content" onClick={() => addCountOrder({ mainId, displayName, price })}><i className="material-icons">add_circle_outline</i></span></div></div>
                <div>&nbsp;цена {price.finalPrice}</div>
            </div>
            <div><span className="secondary-content" onClick={() => { removeOrder(mainId) }}><i className="material-icons">delete</i></span></div>
    </li>
    )
}

export { BasketItem };
import { BasketItem } from "./BasketItem";


function BasketList(props) {
    const { order = [], handleBasketShow = Function.prototype } = props;

    const totalPrice = order.reduce((sum, elem) => {
        return sum + elem.price.finalPrice * elem.quantity
    },0) 

    //console.log('order', order);
    //console.log('order.length',order.length)

    return (
    <ul className="collection basket-list">
            <li className="collection-item active">Корзина<span className="secondary-content close-btn" onClick={handleBasketShow}><i className="material-icons">close</i></span></li>
            {
                order.length ? (
                    order.map((item) => 
                    <BasketItem key={item.mainId} {...item}/>
                )) : ( <li className="collection-item">Корзина пуста</li> )
            }
            <li className="collection-item active">Общая стоимость { totalPrice }</li>
    </ul>
    )

}

export { BasketList };
import { useState, useEffect, useContext } from 'react'
import { API_KEY, API_URL } from '../config.js'
import { GoodsList } from './GoodsList.jsx';

import { Preloader } from './Preloader';
import { Cart } from './Cart';

import { BasketList } from './BasketList.jsx';

import { CustomContext } from './Context';

import { Alert } from './Alert';


function Shop() {
    const [goods, setGoods] = useState([]);
    const [loading, setLoading] = useState(true);
    // const [order, setOrder] = useState([]);
    const [isBasketShow, setBasketShow] = useState(false);

    const handleBasketShow = () => {
         setBasketShow(!isBasketShow)
    }

    const { order, alertName, handleAlertName } = useContext(CustomContext);
    //console.log(order);

    useEffect(function getGoods() {
        fetch(API_URL, {
            headers: {
                Authorization: API_KEY,
            },
        })
            .then((response) => response.json())
            .then((data) => {
                //console.log(API_URL)
                // console.log(API_KEY)
                // console.log(data);
                data.shop && setGoods(data.shop)
                // console.log(goods)
                // data.featured && setGoods(data.featured)
                setLoading(false);
            
            });
    },[])


    return <main className="container content">
        <Cart quantity={order.length} handleBasketShow={ handleBasketShow }/>
        {loading ? <Preloader /> : <GoodsList goods={goods} />} 
        {isBasketShow && <BasketList order={order} handleBasketShow={handleBasketShow} />}
        {alertName && <Alert name={alertName} handleAlertName={handleAlertName} />}
    </main>
}

export { Shop }
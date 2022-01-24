import React, { createContext, useState } from "react";

export const CustomContext = createContext();

export const Context = (props) => {
    const [order, setOrder] = useState([]);

    const [alertName, setAlertName] = useState('')

    const handleAlertName = () => {
        setAlertName('');
    }

    const addOrder = (good) => {
        // console.log('good.mainId', good.mainId)
        const itemIndex = order.findIndex((orderItem) => orderItem.mainId === good.mainId);
        // console.log('itemIndex', itemIndex)

        if (itemIndex < 0) {
            const newItem = {
                ...good,
                quantity: 1,
            }
            setOrder([newItem, ...order]);
        }
        else {
            //order[itemIndex].quantity = order[itemIndex].quantity+1
            const newOrder = order.map((itemOrder, index) => {
                if (index === itemIndex) {
                    return {
                        ...itemOrder,
                        quantity: itemOrder.quantity + 1
                    }
                }
                else {
                    return itemOrder
                }
            })
            setOrder(newOrder);
        }
        setAlertName(good.displayName)
    }

    const removeOrder = (index) => {
        setOrder(order.filter((item)=>{return item.mainId !== index}))
    }

    const addCountOrder = (good) => {
        //console.log('good', id);
        // console.log('order', order);
        
        const newCountOrder = order.map((itemOrder, index) => {
            if (itemOrder.mainId === good.mainId) {
                const newQuantity = itemOrder.quantity + 1;
                // console.log(good.mainId)
                return {
                    ...itemOrder,
                    quantity: newQuantity
                }
            }
            else {
                return itemOrder;
            }
        })
        setOrder(newCountOrder);
    }

    const removeCountOrder = (good) => {
        // let flag = false;
        // let deleteIndex;
        const newCountOrder = order.map((itemOrder, index) => {
            if (itemOrder.mainId === good.mainId) {
                
                    return {
                        ...itemOrder,
                        quantity: itemOrder.quantity - 1
                    }
                }
                // else if (itemOrder.quantity === 1) {
                //     flag = true;
                //     deleteIndex = index;
                //     // setOrder(order.filter((item)=>{return item.mainId !== index}))
                //     return itemOrder;
                // }
            // }
            else {
                return itemOrder;
            }
            // console.log(itemOrder)
        })
        
        // if (flag) {
        //     console.log('deleteIndex', deleteIndex)
        //     setOrder(order.filter((item)=>{return item.mainId !== deleteIndex}))
        //     // removeOrder(deleteIndex);
        // }
        setOrder(newCountOrder);
    }

    const value = {
        order,
        alertName,
        handleAlertName,
        addOrder,
        removeOrder,
        addCountOrder,
        removeCountOrder,
    }

    return <CustomContext.Provider value={value}>
        {props.children}
    </CustomContext.Provider>
}
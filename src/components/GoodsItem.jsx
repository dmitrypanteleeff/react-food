import React, { useContext, useState } from 'react';
import { CustomContext } from './Context';

function GoodsItem(props) {
    const { mainId, displayName, displayDescription, price, displayAssets } = props;

    const { addOrder } = useContext(CustomContext);

    //const [arrayGood, setArrayGood] = useState({id: '123', price:'asdsad'})

    const [arrayGood, setArrayGood] = useState([])

    const [chislo, setChislo] = useState(0)

    const addChislo = () => {
        // setChislo(prev => prev + 1)
        
        // console.log('chislo',chislo);
        // console.log('arrayGood', arrayGood)
        // setArrayGood([chislo, ...arrayGood] )
        // console.log('arrayGood.id', arrayGood.id);
        // console.log('arrayGood', arrayGood)
        console.log('клик')
        
    }

    const addGood = (id) => {
        // setArrayGood([id, ...arrayGood])
        // console.log(id)
        // setArrayGood(arrayGood.push(id));
         //console.log(arrayGood)
        
        addOrder(id);
    }

    
    //const { mainId, displayDescription} = props;
    // price.finalPrice
    // displayAssets[0].full_background

    return <div className="card" id={mainId}>
        <div className="card-image">
            <img src={displayAssets[0].full_background} alt="displayName"/>
        </div>
        <div className="card-content">
            <span className="card-title">{displayName}</span>
          <p>{displayDescription.length ? displayDescription : 'Тут нет описания, но представьте, как было бы классно, если бы оно существовало'}</p>
        </div>
        <div className="card-action">
            <button className="btn" onClick={() => addGood({ mainId, displayName, price })}>Купить</button>
            <span className="right" style={{fontSize:'1.2rem'}}>{price.finalPrice} руб</span>
        </div>
      </div>
}

export { GoodsItem }
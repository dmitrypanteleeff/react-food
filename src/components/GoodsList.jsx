import { GoodsItem } from "./GoodsItem";

function GoodsList(props) {
    const { goods = [] } = props;
    // console.log(goods.length)
    if (!goods.length) {
        return <h3>Nothing</h3>
    }
    // console.log(goods)
    return <div className="goods">
        {goods.map(item => (
            <GoodsItem key={item.mainId} {...item} />
        ))}
    </div>
    
}

export { GoodsList }

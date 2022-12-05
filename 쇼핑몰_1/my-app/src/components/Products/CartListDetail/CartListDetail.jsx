import { useState } from "react";

const CartListDetail = ({ productData, count }) => {
    const defaultCount = count;
    const [productCount, setProductCount] = useState(defaultCount);
    const onClickCountHandler = (type) => {
        if (type === "increment") {
            if (productData.stockCount > productCount) {
                setProductCount((prev) => prev + 1);
            }
        } else {
            if (productCount > 1) {
                setProductCount((prev) => prev - 1);
            }
        }
    };
    // 최종적으로 구매하기를 누를때, 현재까지의 카운터와 데이터를 dispatch를 통해 갱신해준다.
    return (
        <>
            <div className="quantity-btn-box">
                <button onClick={() => onClickCountHandler("decrement")}>-</button>
                <p>{productCount}</p>
                <button onClick={() => onClickCountHandler("increment")}>+</button>
            </div>
        </>
    );
};
export default CartListDetail;

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
    console.log(productCount);
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

import CartListDetail from "../CartListDetail/CartListDetail";
import { useSelector } from "react-redux";
const CartList = () => {
    const cartData = useSelector((store) => store.addShoppingList);
    console.log(cartData);
    return (
        <>
            <h2 className="hidden">상품 가격 및 정보</h2>
            {cartData.map((item) => (
                <CartListDetail key={item.id} productData={item[0]} count={item[1]} />
            ))}
        </>
    );
};

export default CartList;

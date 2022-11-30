import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { ProductDetailWrapper } from "./styled";
import cartImg from "../../../assets/images/icon-shopping-cart.svg";
import heartImg from "../../../assets/images/icon-heart.svg";
import heartOnImg from "../../../assets/images/icon-heart-on.svg";

const ProductDetail = ({ locationData }) => {
    const [data, setData] = useState();
    const [count, setCount] = useState(1);
    const [isLike, setIsLike] = useState(false);
    const navigate = useNavigate();
    useEffect(() => {
        if (locationData) {
            setData(() => {
                return { ...locationData.state.data };
            });
        }
    }, []);
    const copyData = { ...data };
    const productId = copyData.id;
    const discountPrice = (copyData.price * (100 - copyData.discountRate)) / 100;
    const arrayData = [];
    const [CartList, setCartList] = useState([]);
    const add = () => {
        setCartList(CartList.push(productId));
    };
    const onClickCountHandler = (type) => {
        if (type === "increment") {
            if (data.stockCount > count) {
                setCount((prev) => prev + 1);
            }
        } else {
            if (count > 1) {
                setCount((prev) => prev - 1);
            }
        }
    };
    const onClickPageHandler = () => {
        add();
        navigate("/credit", {
            state: {
                cartListId: { CartList },
                productCount: { count },
            },
        });
    };
    return (
        <ProductDetailWrapper>
            <h2 className="hidden">상품 가격 및 정보</h2>
            {data && (
                <div className="detail-main">
                    <img src={`https://test.api.weniv.co.kr/${data.thumbnailImg}`} alt="" />
                    <ul>
                        <li className="product-title">{data.productName}</li>
                        <li className="product-price">
                            <strong>{discountPrice.toLocaleString()}</strong> 원
                        </li>
                        <li className="delivery">택배배송 / {data.shippingFee.toLocaleString()}원</li>
                        <li className="quantity">
                            <div className="quantity-btn-box">
                                <button onClick={() => onClickCountHandler("decrement")}>-</button>
                                <p>{count}</p>
                                <button onClick={() => onClickCountHandler("increment")}>+</button>
                            </div>
                        </li>
                        <li className="product-result-box">
                            <strong className="result-title">총 상품 금액</strong>
                            <span className="result-quantity">
                                총 수량
                                <strong> {count}</strong>개
                            </span>
                            <span className="result-price">
                                <strong>{(discountPrice * count).toLocaleString()}</strong>원
                            </span>
                        </li>
                        <li className="product-btn-box">
                            <button className="buy-btn">바로 구매</button>
                            <button onClick={onClickPageHandler} className="cart-btn">
                                <img src={cartImg} alt="장바구니" />
                            </button>
                            <button
                                className="like-btn"
                                onClick={() => {
                                    setIsLike((prev) => !prev);
                                }}
                            >
                                <img src={isLike ? heartOnImg : heartImg} alt="좋아요" />
                            </button>
                        </li>
                    </ul>
                </div>
            )}
        </ProductDetailWrapper>
    );
};

export default ProductDetail;

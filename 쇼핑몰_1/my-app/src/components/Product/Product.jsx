import { useState } from "react";
import { ProductWrapper } from "./styled";
import HeartOnIcon from "../../assets/images/icon-heart-on.svg";
import HeartIcon from "../../assets/images/icon-heart.svg";
import { useNavigate } from "react-router-dom";

const Product = ({ data, onClickLikeBtn }) => {
    const { thumbnailImg, price, productName, discountRate, id } = data;
    const navigate = useNavigate();
    const [isLike, setIsLike] = useState(false);

    const onClickHandler = () => {
        navigate(`/product/${id}`, {
            state: {
                data: { ...data },
            },
        });
    };

    return (
        <ProductWrapper onClick={onClickHandler}>
            <img src={`https://test.api.weniv.co.kr/${thumbnailImg}`} alt="" />
            <p className="product-name">{productName}</p>
            <button
                className="like-btn"
                onClick={(event) => {
                    onClickLikeBtn(setIsLike);
                    event.stopPropagation();
                }}
            >
                <img src={isLike ? HeartOnIcon : HeartIcon} alt="좋아요 버튼" />
            </button>
            <p>
                <strong>{((price * (100 - discountRate)) / 100).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</strong> 원
                {!!discountRate && (
                    <>
                        <span className="discount">{price}원</span>
                        <span className="percent">{discountRate}%</span>
                    </>
                )}
            </p>
        </ProductWrapper>
    );
};
export default Product;

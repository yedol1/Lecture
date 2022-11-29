import { ProductWrapper } from "./styled";
import heartIcon from "../../../assets/images/icon-heart.svg";
import onheartIcon from "../../../assets/images/icon-heart-on.svg";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Product = ({ data, onClickLikeBtn }) => {
    const { thumbnailImg, price, productName, discountRate, id } = data;
    const [isLike, setIsLike] = useState(false);
    const navigate = useNavigate();
    const discountPrice = (price * (100 - discountRate)) / 100;

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
            <p className="product-title">{productName}</p>
            <button
                className="like-btn"
                onClick={(event) => {
                    onClickLikeBtn(setIsLike);
                    event.stopPropagation();
                }}
            >
                <img src={isLike ? onheartIcon : heartIcon} alt="찜 아이콘" />
            </button>
            <p>
                <strong>{discountPrice.toLocaleString()}</strong> 원
                {!!discountRate && (
                    <>
                        <span className="discount">{price.toLocaleString()}원</span>
                        <span className="percent">{discountRate}%</span>
                    </>
                )}
            </p>
        </ProductWrapper>
    );
};

export default Product;

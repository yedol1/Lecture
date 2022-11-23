import { ProductWrapper } from "./styled";

const Product = ({ data }) => {
    const { thumbnailImg, price, productName, discountRate } = data;
    return (
        <ProductWrapper>
            <img src={`http://test.api.weniv.co.kr/${thumbnailImg}`} alt="" />
            <p className="product-title">{productName}</p>
            <p>
                <strong>{(price * (100 - discountRate)) / 100}</strong>원
                {!!discountRate && (
                    <>
                        <span className="discount">{price}원</span>
                        <span className="percent">할인율 : {discountRate}%</span>
                    </>
                )}
            </p>
        </ProductWrapper>
    );
};
export default Product;

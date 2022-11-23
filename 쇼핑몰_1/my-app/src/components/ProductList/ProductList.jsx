import { useEffect, useState } from "react";
import { getProductData } from "../../API/api";
import Product from "../Product/Product";
import { ProductListWrapper } from "./styled";

const ProductList = () => {
    const [productData, setProductData] = useState([]);
    useEffect(() => {
        getProductData().then((data) => {
            setProductData(data);
        });
    }, []);
    return (
        <ProductListWrapper>
            {productData.map((item) => (
                <Product key={item.id} data={item} />
            ))}
        </ProductListWrapper>
    );
};
export default ProductList;

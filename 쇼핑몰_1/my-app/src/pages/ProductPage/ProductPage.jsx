import { useLocation } from "react-router-dom";
import ProductDetail from "../../components/Products/ProductDetail/ProductDetail";
import ProductDetailImage from "../../components/Products/ProductDetailImage/ProductDetailImage";

const ProductPage = () => {
    const location = useLocation();
    console.log(location);
    return (
        <>
            <ProductDetail locationData={location} />
            <ProductDetailImage locationData={location} />
        </>
    );
};

export default ProductPage;

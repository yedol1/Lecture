import { useLocation } from "react-router-dom";
import ProductDetail from "../../components/ProductDetail/ProductDetail";

const ProductDetailPage = () => {
    const location = useLocation();
    return <ProductDetail location={location} />;
};

export default ProductDetailPage;

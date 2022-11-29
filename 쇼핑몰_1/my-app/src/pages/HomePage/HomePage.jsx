import { Link } from "react-router-dom";
import ProductList from "../../components/Products/ProductList/ProductList";
import { HomePageWrapper } from "./styled";
import { useState } from "react";
import Header from "../../components/Header/Header";

const HomePage = () => {
    const [cartData, setCartData] = useState([]);

    return (
        <HomePageWrapper>
            <h1 className="hidden">메인페이지</h1>
            <Header />
            <ProductList setCartData={setCartData} />
        </HomePageWrapper>
    );
};

export default HomePage;

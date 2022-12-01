import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import heartImg from "../../assets/images/icon-heart.svg";
import heartOnImg from "../../assets/images/icon-heart-on.svg";
import { CreditPageWrapper } from "./styled";
import { useSelector } from "react-redux";
const CreditPage = () => {
    const cart = useSelector((store) => store.addShoppingList);
    console.log();
    const location = useLocation();
    console.log(cart);
    return (
        <CreditPageWrapper>
            <p>크레딧페이지</p>
        </CreditPageWrapper>
    );
};

export default CreditPage;

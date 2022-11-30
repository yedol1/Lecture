import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import heartImg from "../../assets/images/icon-heart.svg";
import heartOnImg from "../../assets/images/icon-heart-on.svg";
import { CreditPageWrapper } from "./styled";
const CreditPage = () => {
    const location = useLocation();
    console.log(location);
    // const copyData = { ...location };
    // // console.log(copyData.state.productId);
    // const arrayData = Object.entries(copyData.state.productId);
    // const [CartList, setCartList] = useState([]);
    // const add = () => {
    //     setCartList(CartList.concat(arrayData));
    // };
    return (
        <CreditPageWrapper>
            <p>크레딧페이지</p>
        </CreditPageWrapper>
    );
};

export default CreditPage;

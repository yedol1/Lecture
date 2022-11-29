import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
const CreditPage = () => {
    const location = useLocation();
    console.log(location);
    return (
        <>
            <p>크레딧페이지</p>
        </>
    );
};

export default CreditPage;

import React from "react";
import "./productPrice.css";
export default function ProductPrice({ price }) {
    return <strong className="price m-price">{price} 원</strong>;
}

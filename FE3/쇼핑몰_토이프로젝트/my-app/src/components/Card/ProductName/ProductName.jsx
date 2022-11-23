import React from "react";
import "../ProductName/productName.css";
export default function ProductName({ productName }) {
    return <strong className="product-name sl-ellipsis">{productName}</strong>;
}

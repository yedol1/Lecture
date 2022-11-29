import React from "react";
import { Link } from "react-router-dom";
import logoutImg from "../../../assets/images/my-page.svg";

export default function Login() {
    return (
        <>
            <li>
                <Link to="*" className="button">
                    <img src={logoutImg} alt="마이페이지" />
                </Link>
            </li>
        </>
    );
}

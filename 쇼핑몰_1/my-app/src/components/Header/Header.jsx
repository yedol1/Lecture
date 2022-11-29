import { Link } from "react-router-dom";
import imgLogo from "../../assets/images/Logo-hodu.svg";
// import "./header.css";
import shoppingCartImg from "../../assets/images/shopping-cart.svg";
import Login from "./Login/Login";
import Logout from "./Logout/Logout";
import { HeaderWrapper } from "./styled";

export default function Header() {
    return (
        <>
            <HeaderWrapper>
                <div className="max-width">
                    <h1>
                        <Link to="/">
                            <img src={imgLogo} alt="My Blog" />
                        </Link>
                    </h1>
                    {/* <ul>{isLogin ? <Login /> : <Logout />}</ul> */}
                    <ul>
                        <Login />
                        <li>
                            <Link to="/" className="button">
                                <img src={shoppingCartImg} alt="쇼핑카트" />
                            </Link>
                        </li>
                    </ul>
                </div>
            </HeaderWrapper>
        </>
    );
}

import { useState } from "react";

const Login = () => {
    const [id, setId] = useState("");
    const [pw, setPw] = useState("");

    const handleLoginSubmit = (e) => {
        console.log("제출하였습니다.");
        e.preventDefault();
    };
    const handleIdInput = (e) => {
        console.log("수정완료");

        // console.log(e);
        // console.log(e.target);
        setId(e.target.value);
    };
    const handlePwInput = (e) => {
        console.log("수정완료");
        setPw(e.target.value);
    };
    return (
        <form action="" onChange={handleLoginSubmit}>
            <label>
                아이디 :
                <input type="text" onChange={handleIdInput} />
            </label>
            <label>
                패스워드 :
                <input type="password" onChange={handlePwInput} />
            </label>
            <button type="submit">확인</button>
        </form>
    );
};
function App() {
    return (
        <div>
            <Login />
        </div>
    );
}

export default App;

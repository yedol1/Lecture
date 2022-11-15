import React, { useState } from "react";

function Resume(props) {
    const [like, setLike] = useState(0);
    const [message, setMessage] = useState("hello");
    const likeString = String(like);
    let heart = ~likeString.indexOf("3") || ~likeString.indexOf("6") || ~likeString.indexOf("9") ? "❤️" : "";

    function handleClickLike() {
        // setLike(like + 1)
        // console.log(like);
        setLike(like + 1);
    }
    function handleMouseOver() {
        console.log("gkgk");
        setMessage("");
    }
    return (
        <div>
            <button onClick={handleClickLike}>number : {like}</button>;<button onMouseOver={handleMouseOver}>오버하셈</button>
            {/* <button onMouseOver={}}>오버하셈</button> */}
            <p>{message}</p>
            <span>{heart ? heart : ""}</span>
        </div>
    );
}

function App() {
    return (
        <div>
            <h1>App.js test1</h1>
            <p>App.js test2</p>
            <Resume />
        </div>
    );
}

export default App;

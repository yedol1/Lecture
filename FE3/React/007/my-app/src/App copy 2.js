import { useState } from "react";

function Resume({ name, hoby, introduce }) {
    const [like, setLike] = useState(0);

    function clickLike() {
        setLike(like + 1);

        console.log(like);
    }
    return (
        <section>
            <h2>{name}</h2>
            <p>{hoby}</p>
            <p>{introduce}</p>
            <button onClick={clickLike}>{like}</button>
        </section>
    );
}
function App() {
    return (
        <main>
            <Resume name="이광렬" hoby="야구" introduce="안녕하세요" />
        </main>
    );
}

export default App;

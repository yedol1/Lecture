import { useState } from "react";

import original from "./assets/Original_Cola.png";
import violet from "./assets/Violet_Cola.png";
import yellow from "./assets/Yellow_Cola.png";
import cool from "./assets/Cool_Cola.png";
import green from "./assets/Green_Cola.png";
import orange from "./assets/Orange_Cola.png";
import VendingMachine from "./components/VendingMachine/VendingMachine";
import "./App.css";
function App() {
    const [drinkData, setDrinkData] = useState([
        { title: "Original_Cola", price: 1000, image: original },
        { title: "Violet_Cola", price: 1000, image: violet },
        { title: "Yellow_Cola", price: 1000, image: yellow },
        { title: "Cool_Cola", price: 1000, image: cool },
        { title: "Green_Cola", price: 1000, image: green },
        { title: "Orange_Cola", price: 1000, image: orange },
    ]);
    return (
        <>
            <VendingMachine drinkData={drinkData} />
        </>
    );
}
export default App;

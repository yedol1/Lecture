import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { GlobalStyle } from "./GlobalStyle";
import { createStore } from "redux";
import { Provider } from "react-redux";
import RootReducer from "./store/modules";

const store = createStore(RootReducer);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <GlobalStyle />
            <App />
        </Provider>
    </React.StrictMode>
);

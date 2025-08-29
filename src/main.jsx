import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import SearchContext from './Context/SearchContext.jsx';
import { Provider } from 'react-redux';
import { store } from './Store/Store.js';
import { ToastContainer, Slide } from "react-toastify";


createRoot(document.getElementById("root")).render(
    <Provider store={store}>
        <SearchContext>
            <ToastContainer/>
            <App />
        </SearchContext>
    </Provider>
);

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import SearchContext from './Context/SearchContext.jsx';

createRoot(document.getElementById("root")).render(
    <SearchContext>
        <App />
    </SearchContext>
);

import React, { createContext, useState } from "react";
import { food_items } from "../food";

export const catgData = createContext();

function SearchContext({ children }) {
    const [catg, setCatg] = useState(food_items);
    const [input, setInput] = useState("")
    const [showCart, setShowCart] = useState(false)
    const data = { input, setInput, catg, setCatg, showCart, setShowCart };


    return <catgData.Provider value={data}>{children}</catgData.Provider>;
}

export default SearchContext;

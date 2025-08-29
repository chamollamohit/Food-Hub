import React, { useContext, useEffect } from "react";
import { Salad, ShoppingBag } from "lucide-react";
import { catgData } from "../Context/SearchContext";
import { food_items } from "../food";
import { useSelector } from "react-redux";
function Nav() {

    const cartItem = useSelector((state) => state.cart);
    const { showCart, setShowCart, input, setInput, setCatg } = useContext(catgData);
    useEffect(() => {
        const newList = food_items.filter(
            (item) =>
                item.food_name.includes(input) || item.food_name.toLowerCase().includes(input)
        );
        setCatg(newList)
    },[input])
    
    return (
        <div className=" fixed w-full h-[100px] flex flex-row justify-between items-center px-8 py-3 z-10">
            <div className="w-[65px] h-[65px] bg-[#F1F0E8] rounded-xl flex justify-center items-center drop-shadow-xl">
                <Salad size={50} />
            </div>

            <form
                onSubmit={(e) => e.preventDefault()}
                className="w-[40%] md:w-[60%] drop-shadow-xl"
            >
                <label className="input w-full h-[50px]">
                    <svg
                        className="h-[1em] opacity-50"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                    >
                        <g
                            strokeLinejoin="round"
                            strokeLinecap="round"
                            strokeWidth="2.5"
                            fill="none"
                            stroke="currentColor"
                        >
                            <circle cx="11" cy="11" r="8"></circle>
                            <path d="m21 21-4.3-4.3"></path>
                        </g>
                    </svg>
                    <input
                        className="text-[15px]"
                        type="search"
                        required
                        placeholder="Search"
                        onChange={(e) => setInput(e.target.value)}
                        value={input}
                    />
                </label>
            </form>

            <div
                className=" w-[65px] h-[65px] bg-[#F1F0E8] rounded-xl flex justify-center items-center drop-shadow-xl"
                onClick={() => {
                    setShowCart((prev) => !prev);
                }}
            >
                {cartItem.length >1 ? <span className="indicator-item badge bg-amber-200 absolute top-0 right-1 font-semibold">
                    {cartItem.length}
                </span> : null}
                <div className="bg-base-300 grid">
                    <ShoppingBag size={45} />
                </div>
            </div>
        </div>
    );
}

export default Nav;

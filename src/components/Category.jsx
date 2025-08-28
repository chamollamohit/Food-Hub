import React, { useContext } from "react";
import { food_items } from "../food";
import { catgData } from "../Context/SearchContext";
function Category({ cateName, cateImage}) {

    const { catg, setCatg } = useContext(catgData);

    const handleCategory = (category) => {
        if (category == "All") {
            setCatg(food_items);
        } else {
            let newList = food_items.filter((cat) => cat.food_category === category);
            setCatg(newList)
        }
    };

    return (
        <div onClick={() => {handleCategory(cateName);}} className="flex flex-col h-[150px] w-[150px] flex-shrink-0 justify-center items-center bg-[#EEE0C9] rounded-xl gap-3 text-xl font-semibold hover:bg-[#F1F0E8] transition-all duration-250  cursor-pointer">
            {cateImage}
            {cateName}
        </div>
    );
}

export default Category;

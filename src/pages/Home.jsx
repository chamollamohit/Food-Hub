import React, { useContext } from "react";
import Nav from "../components/Nav";
import { categories } from "../Category/Category";
import Category from "../components/Category";
import FoodCard from "../components/FoodCard";
import { food_items } from "../food";
import { useState } from "react";
import { catgData } from "../Context/SearchContext";

function Home() {
    const {input, catg, setCatg } = useContext(catgData);

    return (
        <div className="bg-[] w-full min-h-screen bg-[#96B6C5]">
            <Nav />
            <div className="pt-30">
                {!input ? (
                    <div className="flex flex-wrap sm:flex-nowrap sm:overflow-x-auto justify-center gap-4  sm:pl-10">
                        {categories.map((category) => (
                            <Category
                                key={category.id}
                                cateName={category.name}
                                cateImage={category.image}
                                category={[catg, setCatg]}
                            />
                        ))}
                    </div>
                ) : null}

                <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-4 justify-items-center-safe ">
                    {catg.map((food) => (
                        <FoodCard
                            key={food.id}
                            name={food.food_name}
                            image={food.food_image}
                            type={food.food_type}
                            price={food.price}
                            id={food.id}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Home;

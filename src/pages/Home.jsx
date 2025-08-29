import React, { useContext } from "react";
import Nav from "../components/Nav";
import { categories } from "../Category/Category";
import Category from "../components/Category";
import FoodCard from "../components/FoodCard";
import { useState } from "react";
import { catgData } from "../Context/SearchContext";
import { CircleX } from "lucide-react";
import Cart from "../components/Cart";
import { useDispatch, useSelector } from "react-redux";
import { toast, Slide } from "react-toastify";
import { orderPlaced } from "../Store/CartSlice";


function Home() {
    const { input, catg, setCatg, showCart, setShowCart } =
        useContext(catgData);
    const cartItem = useSelector((state) => state.cart);
    const dispatch = useDispatch()

    const subTotal = cartItem.reduce((total, cart) => total + (cart.price * cart.qty), 0);
    const deliveryFee = 20;
    const tax = Number((subTotal * 0.12).toFixed(2));
    const grandTotal = (subTotal + deliveryFee + tax).toFixed(2);

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
                    {catg.length > 1 ? (
                        catg.map((food) => (
                            <FoodCard
                                key={food.id}
                                name={food.food_name}
                                image={food.food_image}
                                type={food.food_type}
                                price={food.price}
                                id={food.id}
                            />
                        ))
                    ) : (
                        <div className="flex mt-10 font-bold text-xl justify-center">
                            No Dish Found
                        </div>
                    )}
                </div>
            </div>
            <div
                className={`md:w-[30%] w-[100%] h-[100%] fixed overflow-auto top-0 right-0 shadow-2xl bg-[#EEE0C9] transition-all duration-400 z-10 p-5 ${
                    showCart ? "translate-x-0" : " translate-x-full"
                }`}
            >
                <header className="w-[100%] border-2 py-2 mb-4 px-2 border-dashed rounded-lg flex justify-between items-center">
                    <span className="font-semibold text-xl">Order Item</span>
                    <CircleX
                        className="cursor-pointer"
                        size={25}
                        onClick={() => {
                            setShowCart((prev) => !prev);
                        }}
                    />
                </header>
                {cartItem.length > 0 ? (
                    <div>
                        <div>
                            {cartItem.map((cart) => (
                                <Cart
                                    key={cart.id}
                                    data={{
                                        name: cart.name,
                                        image: cart.image,
                                        price: cart.price,
                                        id: cart.id,
                                        qty: cart.qty,
                                    }}
                                />
                            ))}
                        </div>
                        <div className="border-t-2 mt-7 border-dashed w-full text-[18px] font-semibold">
                            <div className="flex justify-between items-center mt-2">
                                <span>Subtotal</span>
                                <span>{subTotal}</span>
                            </div>
                            <div className="flex justify-between items-center mt-2">
                                <span>Delivery Fee</span>
                                <span>{deliveryFee}</span>
                            </div>
                            <div className="flex justify-between items-center mt-2">
                                <span>Tax</span>
                                <span>{tax}</span>
                            </div>
                            <div className="flex justify-between items-center border-t-2 pt-2 mt-5 text-2xl">
                                <span>Total</span>
                                <span>{grandTotal}</span>
                            </div>
                            <button className="btn btn-primary w-full mt-3"
                            onClick={() => {
                                dispatch(orderPlaced());
                                setShowCart(false)
                                toast.success("Order Placed !", {
                                    position: "top-right",
                                    autoClose: 2000,
                                    hideProgressBar: false,
                                    closeOnClick: true,
                                    pauseOnHover: true,
                                    draggable: true,
                                    progress: undefined,
                                    theme: "colored",
                                    transition: Slide,
                                });
                            }}>
                                Place Order
                            </button>
                        </div>
                    </div>
                ) : (
                    <div className="flex mt-10 font-bold text-xl justify-center">
                        Add items to cart
                    </div>
                )}
            </div>
        </div>
    );
}

export default Home;

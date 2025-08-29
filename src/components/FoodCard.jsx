import React from "react";
import { LeafyGreen, Drumstick } from "lucide-react";
import { useDispatch } from "react-redux";
import { addToCart } from "../Store/CartSlice";
import { toast,Slide } from "react-toastify";

function FoodCard({ name, image, type, price, id }) {
    const dispatch = useDispatch();

    return (
        <div className=" flex shrink-0 card bg-[#F1F0E8] w-65 h-85 shadow-xl m-4 hover:bg-[#EEE0C9]">
            <figure className="relative w-full h-53 px-2 pt-5">
                <img
                    src={image}
                    alt="Shoes"
                    className="rounded-xl w-[80%] h-[90%]"
                />
            </figure>
            <div className="card-body p-5 pt-0">
                <h2 className="font-medium text-xl text-center">{name}</h2>
                <div className="flex justify-between">
                    <div>{`Rs ${price}`}</div>
                    {type == "veg" ? (
                        <div className="flex">
                            <LeafyGreen color="green" />
                            <div className="ml-1">Veg</div>
                        </div>
                    ) : (
                        <div className="flex">
                            <Drumstick color="red" />
                            <div className="ml-1">Non Veg</div>
                        </div>
                    )}
                </div>
                <div className="card-actions w-full">
                    <button
                        className="btn btn-primary w-full"
                        onClick={() => {
                            dispatch(
                                addToCart({
                                    id: id,
                                    image: image,
                                    price: price,
                                    name: name,
                                    qty: 1,
                                })
                            )
                            toast.success("Item Added!", {
                                position: "top-right",
                                autoClose: 1000,
                                hideProgressBar: false,
                                closeOnClick: true,
                                pauseOnHover: true,
                                draggable: true,
                                progress: undefined,
                                theme: "light",
                                transition: Slide,
                            });
                        }}
                    >
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    );
}

export default FoodCard;

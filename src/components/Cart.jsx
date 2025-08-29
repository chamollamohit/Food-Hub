import React from "react";
import { Trash2 } from "lucide-react";
import { useDispatch } from "react-redux";
import { decreaseQty, increaseQty, removeItem } from "../Store/CartSlice";

function Cart({ data }) {
    const dispatch = useDispatch();

    return (
        <div className="w-full h-[120px] bg-[#F1F0E8] shadow-xl border-1 border-dashed rounded-xl flex justify-between ov p-2 mb-2 mt-2">
            <div className="w-[70%] h-full  flex overflow-hidden">
                <div className="w-[130px] h-[100px] rounded-lg relative overflow-hidden">
                    <img
                        className="w-full h-full object-cover"
                        src={data.image}
                        alt={data.name}
                    />
                </div>
                <div className="w-[50%] h-full flex flex-col gap-5 ml-2 p-1 justify-between font-semibold">
                    <div>{data.name}</div>
                    <div className="w-full h-[30%] rounded-xl font-semibold border-1 border-dashed flex justify-between items-center shadow-lg overflow-hidden">
                        <button
                            className="w-[35%] rounded-lg h-full hover:shadow-2xl cursor-pointer bg-white"
                            onClick={() => {
                                dispatch(decreaseQty(data.id));
                            }}
                        >
                            -
                        </button>
                        <span className="">{data.qty}</span>
                        <button
                            className="w-[35%] h-full hover:shadow-2xl cursor-pointer rounded-lg bg-white"
                            onClick={() => dispatch(increaseQty(data.id))}
                        >
                            +
                        </button>
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-10 items-center mr-2 font-semibold ">
                <div>Rs {data.price * data.qty}/-</div>
                <div>
                    <Trash2
                        color="red"
                        className="cursor-pointer"
                        size={30}
                        onClick={() => {
                            dispatch(removeItem(data.id));
                        }}
                    />
                </div>
            </div>
        </div>
    );
}

export default Cart;

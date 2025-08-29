import { createSlice } from "@reduxjs/toolkit";



export const cartSlice = createSlice({
    name: "carts",
    initialState: { cart: [] },
    reducers: {
        addToCart: (state, action) => {

            const itemExist = state.cart.find((cart) => cart.id == action.payload.id)
            
            if (itemExist) {
                itemExist.qty +=1
            } else {
                state.cart.push(action.payload)
            }
        },
        increaseQty: (state, action) => {
            state.cart = state.cart.map((cart) => {
                if (cart.id == action.payload && cart.qty > 0) {
                    cart.qty += 1
                }
                return cart
            })
        },
        decreaseQty: (state, action) => {
            state.cart = state.cart.map((cart) => {
                if (cart.id == action.payload && cart.qty > 1) {
                    cart.qty -= 1
                }
                return cart
            })
        },
        removeItem: (state, action) => { state.cart = state.cart.filter((cart) => (cart.id !== action.payload)) },
        orderPlaced: (state, action) => {state.cart= []}

    }
}
)

export const { addToCart, removeItem, increaseQty, decreaseQty, orderPlaced } = cartSlice.actions

export default cartSlice.reducer
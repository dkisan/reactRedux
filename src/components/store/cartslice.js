import { createSlice } from "@reduxjs/toolkit"

const initialstate = {
    show: false,
    cart: [],
    noofItem: 0
}

const cartslice = createSlice({
    name: 'cart',
    initialState: initialstate,
    reducers: {
        cartToggle: (state) => {
            state.show = !state.show
        },
        addtoCart: (state, action) => {
            let cart = JSON.parse(JSON.stringify(state.cart))
            const isIndex = cart.findIndex(c => c.title === action.payload.title)
            const item = cart[isIndex]
            if (item) {
                item.quantity += 1
                item.total += item.price
            } else {
                action.payload.quantity = 1
                action.payload.total = action.payload.price
                cart.push(action.payload)
            }
            state.cart = cart
            state.noofItem += 1
        },
        removefromCart: (state, action) => {
            let cart = JSON.parse(JSON.stringify(state.cart))
            const isIndex = cart.findIndex(c => c.title === action.payload.title)
            const item = cart[isIndex]
            if (item.quantity > 1) {
                item.quantity -= 1
                item.total -= item.price
            } else {
                cart = cart.filter(c => c.title !== action.payload.title)
            }
            state.cart = cart
            state.noofItem = state.noofItem > 1 ? state.noofItem - 1 : 0
        }
    }
})

export const cartactions = cartslice.actions;
export default cartslice.reducer;
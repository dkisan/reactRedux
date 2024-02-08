import { createSlice } from "@reduxjs/toolkit"

const initialstate = {
    show: false
}

const cartslice = createSlice({
    name: 'cart',
    initialState: initialstate,
    reducers: {
        cartToggle: (state) => {
            state.show = !state.show
        },
        showCart: (state) => {
            state.show = true
        },
        hideCart: (state) => {
            state.show = false
        }
    }
})

export const cartactions = cartslice.actions;
export default cartslice.reducer;
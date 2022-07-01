import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    lang: ''
}

const reducer = createSlice({
	name: 'main',
	initialState,
	reducers: {
		setLang(state, action) {
			state.lang = action.payload
		},
	},
})
export const {setLang  } = reducer.actions


export default reducer.reducer
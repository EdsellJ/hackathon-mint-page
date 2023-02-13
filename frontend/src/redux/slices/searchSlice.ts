import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	search: {
		title: "",
		location: "",
	},
};

export const SearchSlice = createSlice({
	name: "searchSlice",
	initialState,
	reducers: {
		searchJobs(state, action) {
			state.search = action.payload;
		},
		clearSearch(state) {
			state.search = {
				title: "",
				location: "",
			};
		},
	},
});

export const { searchJobs, clearSearch } = SearchSlice.actions;
export default SearchSlice.reducer;

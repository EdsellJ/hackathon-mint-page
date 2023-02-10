import { useState } from "react";
import Button from "components/Button";
import { useAppDispatch, useAppSelector } from "hooks/useRedux";
import { clearSearch, searchJobs } from "redux/slices/searchSlice";

export default function Search() {
	const dispatch = useAppDispatch();
	const { search } = useAppSelector((state) => state.searchSlice);
	const [searchJob, setSearchJob] = useState({
		title: "",
		location: "",
	});

	const searchQuery = search.title || search.location;

	const searchText = searchQuery ? "Clear" : "Search";
	const searchStyle = searchQuery
		? "bg-primary text-white"
		: "text-primary hover-bg-light-blue";

	function handleInput(e: any) {
		setSearchJob({
			...searchJob,
			[e.target.name]: e.target.value,
		});
	}

	function handleSubmit(e: any) {
		e.preventDefault();
		if (searchQuery) {
			setSearchJob({ title: "", location: "" });
			dispatch(clearSearch());
		} else {
			dispatch(searchJobs(searchJob));
		}
	}

	return (
		<div className="search mb-4 flex w-full justify-between items-center">
			<Button
				className="bg-primary text-white py-2 px-6 rounded-full hover-bg-primary"
				text="Post a Job"
			/>
			<form
				className="search space-x-6 w-9/12 flex items-center my-4"
				onSubmit={handleSubmit}
			>
				<div className="input w-11/12 relative">
					<img
						src="/images/search.svg"
						alt="search"
						className="absolute top-3.5 w-4 left-8"
					/>
					<input
						className="rounded border-blue w-full py-2 pl-16"
						placeholder="Search by company, role"
						name="title"
						value={searchJob.title}
						onChange={handleInput}
					/>
				</div>
				<div className="input w-11/12 relative">
					<img
						src="/images/location.svg"
						alt="search"
						className="absolute top-3.5 w-4 left-8"
					/>
					<input
						className="rounded w-full border-blue py-2 pl-16"
						placeholder="City, state or zipcode"
						name="location"
						value={searchJob.location}
						onChange={handleInput}
					/>
				</div>
				<Button
					className={`py-2 px-6 border-blue rounded-full ${searchStyle}`}
					type="submit"
					text={searchText}
				/>
			</form>
		</div>
	);
}

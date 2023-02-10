import { useQuery } from "@tanstack/react-query";
import FuzzySearch from "fuzzy-search";

import { getWeb3Jobs } from "utils/job";
import type { jobType } from "@types";
import { useAppSelector } from "hooks/useRedux";

export default function useSearch() {
	const { search } = useAppSelector((state) => state.searchSlice);
	const { data, status } = useQuery<{ data: jobType[][] }>(["getWeb3Jobs"], getWeb3Jobs);

	const jobs = status === "success" ? data.data[2] : [];
	const searcher = new FuzzySearch(jobs, ["title", "company", "location", "tags"]);

	const searchString = search.title
		? search.title
		: search.location
		? search.location
		: "";

	const result = search.title || search.location ? searcher.search(searchString) : jobs;

	return { status, result };
}

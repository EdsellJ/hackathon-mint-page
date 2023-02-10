import Layout from "layouts";
import Filter from "components/Filter";
import JobGrid from "components/JobGrid";
import Search from "components/Search";
import useScroll from "hooks/useScroll";
import useSearch from "hooks/useSearch";

export default function JobBoard() {
	const { scroll } = useScroll();
	const { status, result } = useSearch();
	return (
		<Layout title="Job board" className="jobboard pb-14">
			<section className="container mt-2">
				<Search />
				<div className="view space-x-10 mt-2 flex relative items-start justify-between">
					<Filter scroll={scroll} />
					<JobGrid scroll={scroll} status={status} jobs={result} />
				</div>
			</section>
		</Layout>
	);
}

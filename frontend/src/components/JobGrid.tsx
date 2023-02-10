import JobCard from "components/JobCard";
import JobCardLoader from "components/JobCardLoader";
import type { jobType } from "types";

interface Props {
	scroll: number;
	jobs: Array<jobType>;
	status: "success" | "loading" | "error";
}

export default function JobGrid({ scroll, jobs, status }: Props) {
	const jobGridPosition =
		Number(scroll) > 300 ? "absolute right-0 w-9/12 pl-14" : "w-9/12";

	return (
		<div className={`jobgrid ${jobGridPosition} pb-10 flex flex-col`}>
			<div className="wrapper mx-auto justify-center flex">
				{status === "error" ? (
					<p>Unable to fetch job due to an error</p>
				) : status === "loading" ? (
					<JobCardLoader />
				) : jobs.length > 0 ? (
					<div className="grid gap-x-8 gap-y-8 grid-cols-2 w-full">
						{jobs.map((job) => (
							<JobCard key={job.id} job={job} />
						))}
					</div>
				) : (
					<h4 className="font-bold flex mx-auto justify-center text-center">
						Oops, No job found for this search query
					</h4>
				)}
			</div>
		</div>
	);
}

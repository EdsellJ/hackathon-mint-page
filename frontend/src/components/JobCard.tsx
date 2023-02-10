import Link from "next/link";

import { getJobPostDate } from "utils/getTimeDifference";
import toSlug from "utils/toSlug";
import type { jobType } from "@types";

interface Props {
	job: jobType;
}

export default function JobCard({ job }: Props) {
	const jobSlug = toSlug(`${job.title}-at-${job.company}`);
	const postedDaysAgo = getJobPostDate(job.date);
	return (
		<Link href={`/job-board/${jobSlug}`}>
			<div className="jobcard border h-52 bg-white border-gray rounded-xl py-5 px-4 hover:bg-lightgrey">
				<div className="top flex items-start justify-between">
					<div className="w-full">
						<h5 className="text-lg text-primary font-bold truncate">{job.title}</h5>
						<p className="font-light text-primary mt-2">{job.company}</p>
						<ul className="space-x-3 w-full flex overflow-scroll  mt-4">
							{job.tags.map((item) => (
								<li
									key={item}
									className="rounded-full my-1 whitespace-nowrap text-primary font-light border border-blue px-2 hover-bg-light-blue"
								>
									{item}
								</li>
							))}
						</ul>
					</div>
				</div>
				<div className="bottom mt-6 flex justify-between items-center">
					<p className="text-primary font-thin">{postedDaysAgo}</p>
					<img src="/images/bookmark.png" alt="bookmark this job" className="w-3.5" />
				</div>
			</div>
		</Link>
	);
}

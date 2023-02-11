import Link from "next/link";

import { getJobPostDate } from "utils/getTimeDifference";
import toSlug from "utils/toSlug";
import type { jobType } from "types";

interface Props {
  job: jobType;
}

export default function JobCard({ job }: Props) {
  const jobSlug = toSlug(`${job.title}-at-${job.company}`);
  const postedDaysAgo = getJobPostDate(job.date);
  return (
    <Link
      href={`/job-board/${jobSlug}`}
      className="text-decoration-none col-5 job-link"
    >
      <div className="jobcard  border bg-white rounded-4 border-gray py-5 px-4 hover:bg-lightgrey">
        <div className="top flex items-start justify-between">
          <div className="w-full">
            <h5 className="text-lg fw-bold text-deep-blue font-bold truncate">
              {job.title}
            </h5>
            <p className="font-light text-deep-blue mt-2">{job.company}</p>
            <ul className="gap-3 list-unstyled w-full d-flex overflow-scroll mt-4">
              {job.tags.map((item: string) => (
                <li
                  key={item}
                  className="rounded-pill my-1 text-deep-blue font-light border px-2"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="bottom mt-6 d-flex justify-content-between align-items-center">
          <p className="text-deep-blue font-thin">{postedDaysAgo}</p>
          <img src="/assets/bookmark.png" alt="bookmark this job" />
        </div>
      </div>
      <style jsx>{`
        .jobcard {
          height: 260px;
        }
        .jobcard:hover {
          opacity: 0.7;
        }
        ul.list-unstyled {
          overflow-x: scroll;
        }
        ul.list-unstyled li {
          text-decoration: none;
          display: flex;
          align-items: center;
          width: fit-content;
          white-space: nowrap;
        }
      `}</style>
    </Link>
  );
}

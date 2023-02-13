import JobCard from "components/JobCard";
import JobCardLoader from "components/JobCardLoader";
import type { jobType } from "types";

interface Props {
  scroll: number;
  jobs: Array<jobType>;
  status: "success" | "loading" | "error";
}

export default function JobGrid({ scroll, jobs, status }: Props) {
  return (
    <div className={`jobgrid position-relative end-0 d-flex col-9 flex-column`}>
      {status === "error" ? (
        <p>Unable to fetch job due to an error</p>
      ) : status === "loading" ? (
        <JobCardLoader />
      ) : typeof jobs === "object" && jobs.length > 0 ? (
        <div className="justify-content-center d-flex gap-4 flex-wrap position-  end-0 pb-5">
          {jobs?.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>
      ) : (
        <h4 className="fw-bold d-flex mx-auto justify-content-center text-center">
          Oops, No job found for this search query
        </h4>
      )}
    </div>
  );
}

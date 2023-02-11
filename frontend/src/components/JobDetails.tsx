import Button from "components/Button";
import { getJobPostDate } from "utils/getTimeDifference";
import type { jobType } from "types";

interface Props {
  jobDetails: jobType;
}

export default function JobDetails({ jobDetails }: Props) {
  return (
    <div className="job-details">
      <div className="button-group mt-4 d-flex align-items-center justify-content-between">
        <div className="company d-flex align-items-center">
          <img
            src="/assets/company.png"
            className="w-1/5 mr-1"
            alt="job role"
          />
          <h3>{jobDetails.company}</h3>
        </div>
        <a
          className="bg-primary border flex items-center justify-center px-4 py-2 text-white rounded-full hover-bg-primary"
          href={jobDetails.apply_url}
          target="_blank"
          rel="noreferrer"
        >
          Apply with My Profile
        </a>
      </div>
      <div className="title-row flex items-center">
        <img
          src="/assets/briefcase.png"
          className="w-1/12 mr-4"
          alt="job role"
          height="50px"
          width="50px"
        />
        <h3 className="text-primary my-4">{jobDetails.title}</h3>
      </div>
      <h4 className="flex items-center mb-4">
        <img src="/assets/location.svg" alt="location" className="mr-2" />
        {jobDetails.location}
      </h4>
      <div className="row-tag flex justify-between items-center">
        <div className="tags  space-x-4 mb-4">
          {jobDetails.tags.map((item) => (
            <Button
              key={item}
              text={item}
              className="border-blue px-4 py-0.5 rounded-full text-primary hover-bg-light-blue"
            />
          ))}
        </div>
        <p className="font-bold">Posted {getJobPostDate(jobDetails.date)}</p>
      </div>
      <div dangerouslySetInnerHTML={{ __html: jobDetails.description }} />
    </div>
  );
}

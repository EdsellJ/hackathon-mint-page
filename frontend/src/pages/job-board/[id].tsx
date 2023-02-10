import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";

import Layout from "layouts";
import toSlug from "utils/toSlug";
import { getWeb3Jobs } from "utils/job";
import SpinnerRipple from "components/SpinnerRipple";
import JobDetails from "components/JobDetails";
import type { jobType } from "types";

export default function JobboardDetailsView() {
  const router = useRouter();
  const { data, status } = useQuery<{ data: jobType[][] }>(
    ["getWeb3Jobs"],
    getWeb3Jobs
  );

  const jobDetails =
    status === "success"
      ? data.data[2].filter((item) => {
          const jobSlug = toSlug(`${item.title}-at-${item.company}`);
          return router.asPath.includes(jobSlug);
        })[0]
      : null;

  return (
    <Layout title="Job board" className="jobboard pb-14">
      <section className="container py-8 text-primary">
        {status === "error" ? (
          <p>unable to fetch job details</p>
        ) : status === "loading" ? (
          <SpinnerRipple centerRipple />
        ) : (
          jobDetails && <JobDetails jobDetails={jobDetails} />
        )}
      </section>
    </Layout>
  );
}

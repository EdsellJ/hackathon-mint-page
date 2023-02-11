import CheckboxGroup from "components/CheckboxGroup";
import jobFilter from "json/jobfilter.json";

interface Props {
  scroll: number;
}

export default function Filter({ scroll }: Props) {
  const fixedSidebar = Number(scroll) > 300 ? "position-fixed" : "";
  return (
    <aside
      className={`${fixedSidebar} bg-white p-4 border col-3 text-black  border-gray rounded-3 position-static`}
    >
      <h4 className="fs-3 fw-bold text-deep-blue ">Filter</h4>
      <h5 className="fw-4 fw-bold my-3 text-deep-blue">Salary</h5>
      <input type="range" className="w-full my-1 bg-deep-blue" />
      <CheckboxGroup
        title="Job Type"
        name="jobType"
        group={jobFilter.jobType}
      />
      <CheckboxGroup
        title="Work Style"
        name="workStyle"
        group={jobFilter.workStyle}
      />
    </aside>
  );
}

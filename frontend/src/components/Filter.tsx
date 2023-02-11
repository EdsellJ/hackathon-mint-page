import CheckboxGroup from "components/CheckboxGroup";
import jobFilter from "json/jobfilter.json";

interface Props {
  scroll: number;
}

export default function Filter({ scroll }: Props) {
  const fixedSidebar =
    Number(scroll) > 300
      ? "start-65 position-fixed border py-4 ps-4 border col-3 wrapper"
      : "";

  return (
    <aside className="bg-white filter p-4 border col-3 position-relative text-black border-gray rounded-3">
      <div className={`${fixedSidebar}  bg-white  rounded-3`}>
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
      </div>
    </aside>
  );
}

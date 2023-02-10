import CheckboxGroup from "components/CheckboxGroup";
import jobFilter from "json/jobfilter.json";

interface Props {
	scroll: number;
}

export default function Filter({ scroll }: Props) {
	const fixedSidebar = Number(scroll) > 300 ? "fixed" : "";
	return (
		<aside
			className={`${fixedSidebar} bg-white p-8 w border w-72 border-gray rounded-xl static`}
		>
			<h4 className="text-xl font-bold text-primary ">Filter</h4>
			<h5 className="text-lg font-bold my-4 text-primary ">Salary</h5>
			<input type="range" className="w-full my-1" />
			<CheckboxGroup title="Job Type" name="jobType" group={jobFilter.jobType} />
			<CheckboxGroup title="Work Style" name="workStyle" group={jobFilter.workStyle} />
		</aside>
	);
}

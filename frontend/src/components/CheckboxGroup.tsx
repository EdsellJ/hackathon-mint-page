import Checkbox from "components/Checkbox";

interface Props {
	group: Array<{ label: string }>;
	name: string;
	title: string;
}

export default function CheckboxGroup({ group, name, title }: Props) {
	return (
		<div className="checkboxGroup">
			<h5 className="text-lg fw-bold my-4 text-deep-blue">{title}</h5>
			{group.map((item) => (
				<Checkbox label={item.label} key={item.label} name={name} />
			))}
		</div>
	);
}

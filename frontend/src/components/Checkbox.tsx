interface Props {
  label: string;
  name: string;
}

export default function Checkbox({ label, name }: Props) {
  return (
    <div className="d-flex items-center text-deep-blue  gap-2 my-4">
      <input type="checkbox" name={name} className="mr-4" />
      <label>{label}</label>
    </div>
  );
}

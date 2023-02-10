interface Props {
	className: string;
	text: string;
	onClickHandler?: () => void;
	type?: "button" | "submit" | "reset";
}

export default function Button({
	className,
	text,
	onClickHandler,
	type = "button",
}: Props) {
	return (
		<button className={className} onClick={onClickHandler} type={type}>
			{text}
		</button>
	);
}

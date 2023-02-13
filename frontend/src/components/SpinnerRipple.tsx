interface Props {
	centerRipple?: boolean;
}

export default function SpinnerRipple({ centerRipple }: Props) {
	const ripplePosition = centerRipple
		? "container mx-auto justify-center h-44 items-center flex"
		: "";
	return (
		<div className={ripplePosition}>
			<div className="lds-ripple">
				<div></div>
				<div></div>
			</div>
		</div>
	);
}

export function SpinnerRoller() {
	return (
		<span className="lds-ellipsis">
			<div></div>
			<div></div>
			<div></div>
			<div></div>
		</span>
	);
}

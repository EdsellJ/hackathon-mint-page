import ContentLoader from "react-content-loader";

function JobCardLoaderItem(props: any) {
	return (
		<ContentLoader
			speed={2}
			width={350}
			height={200}
			viewBox="0 0 400 200"
			backgroundColor="#b5a6a6"
			foregroundColor="#ecebeb"
			{...props}
		>
			<rect x="0" y="0" rx="10" ry="10" width="100%" height="200" />
		</ContentLoader>
	);
}

export default function JobCardLoader() {
	const fourArray = new Array(6).fill(0);
	return (
		<div className="grid gap-x-8 grid-cols-2 w-full">
			{fourArray.map((_, index) => (
				<JobCardLoaderItem key={index} />
			))}
		</div>
	);
}

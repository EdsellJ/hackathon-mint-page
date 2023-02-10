import homeContent from "json/home.json";
import FeatureCategory from "components/FeatureCategory";

export default function HomepageDetails() {
	return (
		<div className="content bg-white py-8">
			<div className="container">
				<h2 className="mt-4 mb-2 font-lora text-primary ">{homeContent.main.question}</h2>
				<p className="mt-2 mb-8 text-primary font-dmsans">{homeContent.main.answer}</p>
				<FeatureCategory category="students" />
				<FeatureCategory category="teachers" />
			</div>
		</div>
	);
}

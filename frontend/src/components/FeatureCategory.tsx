import homeContent from "json/home.json";

interface Props {
	category: "students" | "teachers";
}

export default function FeatureCategory({ category }: Props) {
	const titleOrder =
		category === "students"
			? { img: "order-1", title: "order-2 ml-4" }
			: { img: "order-2", title: "order-1 mr-4" };
	return (
		<div className="category my-8">
			<div className="category-title flex items-center my-8">
				<img
					className={titleOrder.img}
					src={homeContent[category].icon}
					alt={homeContent[category].title}
					height="76px"
					width="60px"
				/>
				<h3 className={`${titleOrder.title} font-lora text-xl font-bold text-primary`}>
					{homeContent[category].title}
				</h3>
			</div>
			<ul className="list flex  space-x-20">
				{homeContent[category].features.map((item, index) => {
					const listIndex = index + 1;
					return (
						<li key={item.icon} className="relative hover-element">
							<span className="bg-secondary flex justify-center items-center h-8 w-8 text-white rounded-full">
								{listIndex}
							</span>
							<img src={item.icon} alt={item.title} />
							<p className="font-dmsans text-center my-3">{item.title}</p>
						</li>
					);
				})}
			</ul>
		</div>
	);
}

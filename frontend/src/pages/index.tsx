import Layout from "layouts";
import HeroBanner from "components/HeroBanner";
import HomepageDetails from "components/HomepageDetails";

export default function HomePage() {
	return (
		<Layout title="Welcome, start learning, earning NFTs">
			<section className="w-full bg-primary">
				<HeroBanner />
				<HomepageDetails />
			</section>
		</Layout>
	);
}

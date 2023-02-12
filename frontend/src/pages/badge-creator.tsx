import NFTHeroBanner from "components/NFTHeroBanner";
import UpcomingEvents from "components/UpcomingEvents";
import Layout from "layouts/";

export default function BadgeCreator() {
	return (
		<Layout title="Mint NFT's">
			<NFTHeroBanner />
			<UpcomingEvents />
		</Layout>
	);
}

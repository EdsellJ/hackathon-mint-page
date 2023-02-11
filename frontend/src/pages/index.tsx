import Layout from "layouts";
import HeroBanner from "components/HeroBanner";
import HomepageDetails from "components/HomepageDetails";

export default function HomePage() {
  return (
    <Layout title="Welcome, start learning, earning NFTs">
      <HeroBanner />
      <HomepageDetails />
    </Layout>
  );
}

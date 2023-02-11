import Layout from "layouts";
import HeroBanner from "components/HeroBanner";
import HomepageDetails from "components/HomepageDetails";

export default function HomePage() {
  return (
    <Layout title="Welcome, start learning, earning NFTs">
      <section className="w-full">
        <HeroBanner />
        <HomepageDetails />
      </section>
      <style jsx>
        {`
          section.w-full {
            background-color: var(--deep-blue);
          }
        `}
      </style>
    </Layout>
  );
}

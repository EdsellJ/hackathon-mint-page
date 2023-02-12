import homeContent from "json/home.json";
import FeatureCategory from "components/FeatureCategory";

export default function HomepageDetails() {
  return (
    <section className="content bg-white py-5 text-deep-blue">
      <div className="container ">
        <h2 className="mt-4 mb-2 font-lora fs-1 fw-bolder">
          {homeContent.main.question}
        </h2>
        <p className="mt-2 fs-5 font-dmsans">{homeContent.main.answer}</p>
        <FeatureCategory category="students" />
        <FeatureCategory category="teachers" />
      </div>
    </section>
  );
}

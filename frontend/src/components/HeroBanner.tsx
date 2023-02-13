import Button from "components/Button";
import Link from "next/link";

export default function HeroBanner() {
  return (
    <section className="w-full">
      <div className="container mx-auto">
        <div className="hero-banner align-items-center d-flex justify-content-between py-5">
          <div className="text-white col-7">
            <h1 className="my-2 font-lora fs-1 fw-bold w-100">
              A Learning Management System <br />
              for a Decentralized World
            </h1>
            <p className="col-8 mt-3 font-dmsans">
              <span className="font-bold">EduCoin</span> is a transformational
              way to register for classes and earn credentials
              via NFTs.
            </p>
            <Link href="/badge-creator" className="startNow">
              <Button
                className="font-dmsans rounded-pill px-4 my-4 py-2"
                text="Start Now"
              />
            </Link>
          </div>
          <div className="images d-flex flex-column col-5">
            <img
              src="/assets/banner-icon-2.svg"
              className="img-1 col-6"
              alt="banner-2"
            />
            <img src="/assets/banner-icon.svg" className="col-6" alt="banner" />
          </div>
        </div>
      </div>
      <div className="border-banner-gradient" />
      <style jsx>
        {`
          .border-banner-gradient {
            background: linear-gradient(
              90deg,
              #f7623f 13.54%,
              rgba(244, 161, 0, 0.8) 98.18%
            );
            height: 30px;
          }
          .img-1 {
            margin-left: 200px;
          }
          .startNow:hover {
            color: var(--deep-blue);
          }
          section.w-full {
            background-color: var(--deep-blue);
          }
        `}
      </style>
    </section>
  );
}

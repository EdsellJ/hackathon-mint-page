import Button from "components/Button";

export default function NFTHeroBanner() {
  return (
    <section className="container d-flex  align-items-center gap-4 mt-4 mb-5">
      <div className="col-6">
        <h2 className="fs-1 fw-bold text-deep-blue my-2">
          EduCoin Badge Creator
        </h2>
        <p>
          By clicking “Mint a Badge” you are creating a non-fungible token which
          can be used to certify skills on the NEAR blockchain.
          <br />
          <br />
          This token can be used to check references and validate proof of work
          and learned skills.
        </p>
        <Button
          text="Mint a Badge"
          className="rounded-pill fw-bold bg-deep-blue py-3 text-white border px-5 text-secondary-500 mt-4"
        />
      </div>
      <div className="image col-6">
        <img src="/assets/woman.png" alt="woman minting nft" />
      </div>
    </section>
  );
}

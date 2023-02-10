import Button from "components/Button";

export default function NFTHeroBanner() {
  return (
    <section className="container mt-2">
      <div className="flex items-center px-16">
        <div className="text-content left w-1/2">
          <h2 className="text-xl text-primary my-2">EduCoin Badge Creator</h2>
          <p>
            By clicking “Mint a Badge” you are creating a non-fungible token
            which can be used to certify skills on the NEAR blockchain.
            <br />
            <br />
            This token can be used to check references and validate proof of
            work and learned skills.
          </p>
          <Button
            text="Mint a Badge"
            className="rounded-full font-bold bg-primary py-3 text-white border px-8 text-secondary-500 mt-6 hover-bg-primary"
          />
        </div>
        <div className="image w-1/2">
          <img src="/assets/woman.png" alt="woman minting nft" />
        </div>
      </div>
    </section>
  );
}

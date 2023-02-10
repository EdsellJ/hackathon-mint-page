import Button from "components/Button";
import Link from "next/link";

export default function HeroBanner() {
	return (
		<>
			<div className="container mx-auto">
				<div className="hero-banner flex justify-between py-20">
					<div className="left text-white w-1/2">
						<h2 className="my-2 font-lora font-bold">
							A Learning Management <br /> System for a Decentralized <br />
							World
						</h2>
						<p className="w-1/2 mt-6 font-dmsans">
							<span className="font-bold">EduCoin</span> is a transformational way to
							register for classes, sell content, and earn credentials via NFTs.
						</p>
						<Link href="/badge-creator">
							<Button
								className="bg-white font-dmsans rounded-full text-primary px-6 my-10 border py-2 hover:border-white hover-bg-light-blue"
								text="Start Now"
							/>
						</Link>
					</div>
					<div className="right images flex flex-col w-1/2 ">
						<img src="/images/banner-icon-2.svg" className="w-1/2 ml-60" alt="banner-2" />
						<img
							src="/images/banner-icon.svg"
							className="w-1/2 -mt-14 ml-14"
							alt="banner"
						/>
					</div>
				</div>
			</div>
			<div className="h-8 border-banner-gradient w-full"></div>
		</>
	);
}

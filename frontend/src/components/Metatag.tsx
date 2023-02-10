import Head from "next/head";

interface Props {
	title: string;
}
export default function Metatag({ title }: Props) {
	return (
		<Head>
			<title>{title} | EduCoin </title>
			<meta
				name="title"
				content="Welcome to Educoin - A Learning Management System for a Decentralized World"
			/>
			<meta
				name="description"
				content="EduCoin is a transformational way to register for classes, sell content, and earn credentials via NFTs. Start learning & earninig NFT's"
			/>
			<meta
				name="viewport"
				content="width=device-width,initial-scale=1,shrink-to-fit=no,viewport-fit=cover"
			/>
			<meta
				name="keywords"
				content="NFT, mint, Decentralized, LMS,  Learning Management System"
			/>
			<meta
				property="og:image"
				content="https://res.cloudinary.com/verrb-inc/image/upload/v1675178401/logo_v8jn7m.png"
			/>

			{/* Twitter meta */}
			<meta name="twitter:site" content="@https://edu-near.vercel.app/." />
			<meta name="twitter:card" content="summary" />
			<meta name="twitter:url" content="https://edu-near.vercel.app/" />
			<meta
				name="twitter:image"
				content="https://res.cloudinary.com/verrb-inc/image/upload/v1675178401/logo_v8jn7m.png"
			/>
			<meta
				name="twitter:description"
				content="EduCoin is a transformational way to register for classes, sell content, and earn credentials via NFTs. Start learning & earninig NFT's"
			/>
			<meta
				name="twitter:title"
				content="Welcome to Educoin - A Learning Management System for a Decentralized World"
			/>

			<link rel="icon" href="/favicon.ico" />
		</Head>
	);
}

import Link from "next/link";

interface Props {
	noLink?: boolean;
}

export default function Logo({ noLink }: Props) {
	return (
		<>
			{noLink ? (
				<img src="/images/logo.png" alt="Logo" />
			) : (
				<Link href="/" className="w-1/6">
					<img src="/images/logo.png" alt="Logo" />
				</Link>
			)}
		</>
	);
}

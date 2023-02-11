import Link from "next/link";
import { useRouter } from "next/router";

interface Props {
	menu: {
		link: string;
		text: string;
	};
}

export default function MenuLink({ menu }: Props) {
	const router = useRouter();
	const activeStyle = {
		padding: "8px",
		borderBottom: "3px solid black",
	};

	const styles = router.asPath.includes(menu.link) ? activeStyle : {};

	return (
		<li className="text-decoration-none mx-3">
			<Link href={menu.link} className="text-decoration-none fs-5 text-black" style={styles}>
				{menu.text}
			</Link>
		</li>
	);
}

import Logo from "components/Logo";
import Menu from "components/Menu";
import useScroll from "hooks/useScroll";

export default function NFTHeader() {
	const { scroll } = useScroll();
	const fixedHeader = Number(scroll) > 120 ? "fixed z-40 top-0" : "";
	return (
		<header className={`w-full ${fixedHeader} bottom-shadow bg-white`}>
			<div className="container mx-auto align-items-center">
				<div className="d-flex w-full align-items-center justify-content-between py-3">
					<Logo />
					<Menu />
				</div>
			</div>
		</header>
	);
}

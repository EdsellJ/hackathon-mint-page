import Logo from "components/Logo";
import Menu from "components/Menu";
import useScroll from "hooks/useScroll";

export default function NFTHeader() {
  const { scroll } = useScroll();
  console.log("scroll", scroll);
  const fixedHeader = Number(scroll) > 120 ? "position-fixed w-100 top-0" : "";

  return (
    <header className={`w-full ${fixedHeader} z-50 shadow-sm bg-white`}>
      <div className="container mx-auto align-items-center">
        <div className="d-flex w-full align-items-center justify-content-between py-3">
          <Logo />
          <Menu />
        </div>
      </div>
    </header>
  );
}

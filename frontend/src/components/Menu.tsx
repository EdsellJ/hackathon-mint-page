// import Button from "components/Button";
import menuContent from "json/menu.json";
import MenuLink from "components/MenuLink";

export default function Menu() {
  return (
    <nav className="d-flex align-items-center col-2">
      <ul className="p-0 list-unstyled d-flex justify-content-between w-100">
        <MenuLink menu={menuContent.link} />
        <MenuLink menu={menuContent.auth} />
      </ul>
      {/* <Button
        className="mx-8 border rounded-full px-6 py-1.5 hover:bg-primary hover:text-white"
        text="Login"
      /> */}
    </nav>
  );
}

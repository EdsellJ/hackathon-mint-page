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

  const activeClassName = router.asPath.includes(menu.link) ? "active" : "";

  return (
    <>
      <li className={`text-decoration-none mx-3 ${activeClassName}`}>
        <Link href={menu.link} className="text-decoration-none fs-5">
          <span>{menu.text}</span>
        </Link>
      </li>
      <style jsx>{`
        li.active span {
          padding: 8px;
          border-bottom: 3px solid #404471;
          color: #404471;
        }
        li span {
          color: black;
        }
      `}</style>
    </>
  );
}

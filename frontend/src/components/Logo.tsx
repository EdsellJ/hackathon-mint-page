import Link from "next/link";

interface Props {
  noLink?: boolean;
}

export default function Logo({ noLink }: Props) {
  return (
    <>
      {noLink ? (
        <img src="../assets/png/navLogo.png" alt="Logo" className="col-1" />
      ) : (
        <Link href="/" className="col-2">
          <img src="/assets/logo.png" alt="Logo" className="w-100" />
        </Link>
      )}
    </>
  );
}

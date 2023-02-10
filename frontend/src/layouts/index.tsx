import type { PropsWithChildren } from "react";

import Header from "components/Header";
import Footer from "components/Footer";
import Metatag from "components/Metatag";

interface Props {
  title: string;
  className?: string;
  showFooter?: boolean;
}

export default function Layout({
  title,
  className,
  children,
  showFooter = false,
}: PropsWithChildren<Props>) {
  return (
    <>
      <Metatag title={title} />
      <Header />
      <main className={className}>{children}</main>
      {showFooter && <Footer />}
    </>
  );
}

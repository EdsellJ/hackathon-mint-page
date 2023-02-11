import type { NextPage } from "next";

import { Mint } from "view";
import NavBar from "../components/NavBar";

//--------------------------------------------------------------------

const Home: NextPage = () => {
  return (
    <div>
      <NavBar />
      {typeof window !== "undefined" && <Mint />}
    </div>
  );
};

export default Home;

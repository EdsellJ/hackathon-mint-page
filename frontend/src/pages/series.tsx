import type { NextPage } from "next";

import Series from "view/Mint/Series";
import NavBar from '../components/NavBar';

//--------------------------------------------------------------------

const Home: NextPage = () => {
    return (
        <div>
            <NavBar />
            <Series />
        </div>
    );
};

export default Home;

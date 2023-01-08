import React from "react";
import Image from "next/image";
import { login, logout } from "near/utils";
import { useRouter } from "next/router";

// @assets
import Logo from "assets/png/navLogo.png";
//--------------------------------------------------------------------

const NavBar = (props: any) => {

    const router = useRouter();

    const classes = {
        button: {
            width: "150px",
            height: "40px",
            borderRadius: "10px",
            backgroundColor: '#404471',
            color: 'white',
            marginLeft: 10,
        },
    }

    return (
        <nav className="navbar navbar-expand-sm shadow">
            <div className="container-fluid">
                <a className="navbar-brand" onClick={() => router.reload()} href={'#'}>
                    <Image src={Logo} alt="EduCoin Logo" width={150} height={45} />
                </a>
                <ul className="navbar-nav ms-auto">
                    <li className="nav-item">
                        <a className="nav-link" href={'#'}>Badge Creator</a>
                    </li>
                    <button style={classes.button} onClick={window?.walletConnection?.isSignedIn() ? logout : login}>
                        {window?.walletConnection?.isSignedIn()
                            ? window.accountId.substr(0, 5) +
                            "..." +
                            window.accountId.substr(
                                window.accountId.length - 4,
                                window.accountId.length
                            )
                            : "Wallet Connect"}
                    </button>
                </ul>
            </div>
        </nav>
    );
};



export default NavBar;

import Image from "next/image";
import { login, logout } from "near/utils";
import { useRouter } from "next/router";
import Link from "next/link";

// @assets
import Logo from "assets/png/youniLogo.png";
//--------------------------------------------------------------------
declare const window: any;
const NavBar = (props: any) => {
  const router = useRouter();

  const classes = {
    button: {
      width: "150px",
      height: "40px",
      borderRadius: "10px",
      backgroundColor: "#404471",
      color: "white",
      marginLeft: 10,
    },
    navLink: {},
  };
  // 
  return (
    <nav className="navbar navbar-expand-sm shadow">
      <div className="container-fluid">
        
        <a className="navbar-brand" onClick={() => router.reload()} href={"/"}>
          <Image src={Logo} alt="Youni Logo" width={116} height={51} />
        </a>
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <Link style={classes.navLink} href="/mint">
              <button className="btn">Send Badge</button>
            </Link>
          </li>
          <li className="nav-item">
            <Link style={classes.navLink} href="/series">
              <button className="btn">Design Badge</button>
            </Link>
          </li>
          {
            <button
              style={classes.button}
              onClick={window?.walletConnection?.isSignedIn() ? logout : login}
            >
              {window?.walletConnection?.isSignedIn()
                ? window.accountId.substr(0, 5) +
                  "..." +
                  window.accountId.substr(
                    window.accountId.length - 4,
                    window.accountId.length
                  )
                : "Wallet Connect"}
            </button>
          }
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;

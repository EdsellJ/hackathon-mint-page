import Link from "next/link";
import { useEffect, useState } from "react";
import { setupNearWallet } from "@near-wallet-selector/near-wallet";
import axios from "axios";
// import * as buffer from "buffer";

import { setupWalletSelector } from "@near-wallet-selector/core";
import { setupModal } from "@near-wallet-selector/modal-ui";
import { useAppDispatch } from "hooks/useRedux";
import { setBadges } from "redux/slices/jobSlice";

// (window as any).Buffer = buffer.Buffer;

const Header = () => {
	const dispatch = useAppDispatch();
	const [accountId, setAccountId] = useState("");
	useEffect(() => {
		set();
	}, []); //eslint-disable-line
	const set = async () => {
		const selector = await setupWalletSelector({
			network: process.env.REACT_APP_NEAR_ENV as any,
			modules: [setupNearWallet()],
		});
		if (selector?.isSignedIn()) {
			const wallet = await selector.wallet();
			const accounts = await wallet.getAccounts();
			setAccountId(accounts[0].accountId);
			const { data } = await axios.post("http://localhost:8080/api/contract/getNFTs", {
				accountId: accounts[0].accountId,
				contractId: process.env.REACT_APP_CONTRACT_ID,
			});
			console.log("data", data);
			const temp = [];
			for (let item of data) {
				const title = item.metadata.title;
				temp.push(title.slice(0, title.indexOf("#")));
			}
			dispatch(setBadges(temp));
			return;
		}
		const modal = setupModal(selector, {
			contractId: process.env.REACT_APP_CONTRACT_ID as any,
		});
		modal.show();
	};
	const handleConnectWallet = async () => {
		set();
	};
	const handleLogout = async () => {
		const selector = await setupWalletSelector({
			network: process.env.REACT_APP_NEAR_ENV as any,
			modules: [setupNearWallet()],
		});
		const wallet = await selector.wallet();
		await wallet.signOut();
		setAccountId("");
	};

	return (
		<header>
			<div className="flex items-center justify-start shadow-md h-16 px-4">
				<Link href="/">
					<img src="/images/near_logo.png" alt="Logo" className="w-32 lg:w-24" />
				</Link>
				<div className="">
					<Link href="/register/company" className="p-2.5 ml-[1vw]">
						Register company
					</Link>
				</div>
			</div>

			<div className="flex justify-end">
				<nav className="mt-[-2.5%] mr-[2%]">
					<button className="font-bold" onClick={handleLogout}>
						Log out
					</button>
				</nav>
			</div>
			<div className="flex justify-end">
				<button className="secondary mt-[2%] mr-[2%]" onClick={handleConnectWallet}>
					{accountId !== "" ? accountId : "Connect Wallet"}
				</button>
			</div>
		</header>
	);
};

export default Header;

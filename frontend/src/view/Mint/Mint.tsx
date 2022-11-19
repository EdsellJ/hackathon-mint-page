import React, { useState, useEffect } from "react";
import Image from "next/image";
import skills from './skills.json';
import Select from 'react-select';

import { transactions } from "near-api-js";
import { login, logout } from "near/utils";

import { useSupplyContext } from "context/SupplyContext";
import { FileUploader } from "react-drag-drop-files";
import { NFTStorage, File, Blob } from 'nft.storage'
const BN = require("bn.js");
// ----------------------------------------------------------
const fileTypes = ["JPG", "PNG", "GIF"];
export default function Mint() {

    const { totalSupply } = useSupplyContext();
    const [mintable, setMintable] = useState(5777);

    const [file, setFile] = useState(null);
    const [newBlob, setNewBlob] = useState<any>(undefined);
    const [roles, setRoles] = useState('');

    let num: any = 0;
    let nft: any;
    let role: any;
    let mrole: any;
    let nftUrl: any;
    useEffect(() => {
        setMintable(5777 - totalSupply);
    }, [totalSupply]);

    async function dataURItoBlob(dataURI: any) {
        // convert base64 to raw binary data held in a string
        // doesn't handle URLEncoded DataURIs - see SO answer #6850276 for code that does this
        var byteString = atob(dataURI.split(',')[1]);

        // separate out the mime component
        var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0]

        // write the bytes of the string to an ArrayBuffer
        var ab = new ArrayBuffer(byteString.length);

        // create a view into the buffer
        var ia = new Uint8Array(ab);

        // set the bytes of the buffer to the correct values
        for (var i = 0; i < byteString.length; i++) {
            ia[i] = byteString.charCodeAt(i);
        }

        // write the ArrayBuffer to a blob, and you're done
        var blob = new Blob([ab], { type: mimeString });
        return blob;
    }

    const handleChange = (file: any) => {
        setFile(file);
        nft = file;
        console.log("nft", nft);
        var reader = new FileReader();
        reader.onload = async () => {
            setNewBlob(await dataURItoBlob(reader.result));
        };
        reader.readAsDataURL(file);
    };

    const getRole = (e: any) => {
        // role = e.target.value;

        let role = e.value;

        if (role) {
            setRoles(role)
            mrole = role;
        } else {
            mrole = "";
        }
    }

    async function mintNFT() {
        const NFT_STORAGE_TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDQ5NWZmODcwNGQ4QThkMmEyNkViQ0JkQzU5ZEY4QTkxNjg4MjlEM2MiLCJpc3MiOiJuZnQtc3RvcmFnZSIsImlhdCI6MTY2NzU1MjA5Nzc0OSwibmFtZSI6ImRlZ2VucGlnIn0.W0q6lIgDEhrwH3TaB32-SJx_8h2dsxKoLJD4PB6PfHw';
        const client = new NFTStorage({ token: NFT_STORAGE_TOKEN });
        console.log("sdfsdfs", newBlob);
        const cid = await client.storeBlob(newBlob);

        nftUrl = "https://" + String(cid) + ".ipfs.nftstorage.link";

        let status = window?.walletConnection?.isSignedIn();
        console.log(nftUrl);
        console.log(mrole, 'mrole');
        console.log(roles, 'roles')
        if (status == true) {
            if (roles == "") {
                alert("Please Select a Skill");
            } else {
                let content = [];
                for (let i = 0; i < 1; i++) {
                    content[i] = transactions.functionCall(
                        "nft_mint",
                        Buffer.from(JSON.stringify({ role: roles, image: nftUrl })),
                        3000000000000,
                        new BN("4000000000000000000000000")
                    );
                }
                await window.contract.account.signAndSendTransaction({
                    receiverId: window.contract.contractId,
                    actions: content,
                });
            }
        } else {
            alert("Please connect Wallet");
        }
    }

    let skillCategories = [];
    let skillTitles = [];

    for (let skill of skills.skills) {
        skillCategories.push(skill);
    }

    if (skillCategories) {
        for (let i = 0; i < skillCategories.length; i++) {
            skillTitles.push({ value: skillCategories[i].skillName, label: skillCategories[i].skillName })
        }
    }

    const classes = {
        card: {
            backgroundColor: '#f1f1f1',
            border: '3.5px solid black',
            marginLeft: '10px'
        },
        button: {
            width: "150px",
            height: "50px",
            borderRadius: "10px",
            backgroundColor: "#dcd0ff",
            fontFamily: 'Gill Sans',
            float: 'right'
        },
        mintButton: {
            width: "150px",
            height: "50px",
            borderRadius: "10px",
            backgroundColor: "#aaf0d1",
            fontFamily: 'Gill Sans',
            marginTop: '2.5%',
            marginBottom: '10%',
        },
        h3: {
            fontFamily: 'Gill Sans',
            fontWeight: 'bold'
        },
        h4: {
            fontFamily: 'Gill Sans',
        },
        img1: {
            border: '2px solid black',
            width: '50%',
            marginBottom: '10%',
            marginTop: '2%'
        },
        img2: {
            width: '70%',
            marginTop: '2%',
            marginBottom: '10%'
        }
    }

    return (
        <div className="container">
            <div className="row header" style={{ textAlign: "center", marginBottom: "100px", marginTop: "20px" }}>
                <div className="col-lg-5"></div>
                <div className="col-lg-1">
                    {/* <h2><a href="/">MINT</a></h2> */}
                </div>
                <div className="col-lg-1">
                    {/* <h2><a href="/Job">JOBS</a></h2> */}
                </div>
                <div className="col-lg-5">
                    <div style={{ textAlign: "center", marginTop: "20px" }}>
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
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="d-flex justify-content-center">
                    <div className="col-sm-6">
                        <div className="card align-items-center" style={classes.card}>
                            <div className="card-body">
                                <div className="card-block text-center">
                                    <h3 className="card-title" style={classes.h3}>Upload Badge Art</h3>
                                    <br />
                                    <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/1362px-Placeholder_view_vector.svg.png?20220519031949' style={classes.img1} />
                                    <h4 className="card-text" style={classes.h4}>Upload an image to show as badge art to your students</h4>
                                    <br />
                                    <div id="imageUpload">
                                        <FileUploader handleChange={handleChange} name="file" types={fileTypes} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="card align-items-center" style={classes.card}>
                        <div className="card-body">
                            <div className="card-block text-center">
                                <h3 className="card-title" style={classes.h3}>Hard skills</h3>
                                <br />
                                <img src='https://preply.com/wp-content/uploads/2022/07/Soft-Skills.png' style={classes.img2} />
                                <h4 className="card-text" style={classes.h4}>Select a skill associated with this class below</h4>
                                <br />
                                <div>
                                    {/* <input className="form-control" type="text" onKeyDown={getRole} id="skills" placeholder="Add skill here" /> */}
                                    <Select options={skillTitles} onChange={getRole} id="skills" />
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <br />
            <div className="mint text-center">
                <button style={classes.mintButton} onClick={mintNFT}>MINT</button>
            </div>
        </div>
    );
}


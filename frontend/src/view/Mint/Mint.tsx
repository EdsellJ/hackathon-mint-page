import React, { useState, useEffect } from "react";
import Image from "next/image";
import skills from './skills_updated.json';
import Select from 'react-select';

import { transactions } from "near-api-js";

import { useSupplyContext } from "context/SupplyContext";
import { FileUploader } from "react-drag-drop-files";
import { NFTStorage, File, Blob } from 'nft.storage'

import imageHolder from 'assets/png/imageHolder.png';
import one from 'assets/png/One.png';
import two from 'assets/png/two.png';
import three from 'assets/png/three.png';
import smallLogo from 'assets/png/small.png';

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
        title: {
            color: '#404471',
            fontWeight: 'bold',
            fontFamily: 'Dm Sans',
        },
        mintButton: {
            width: "150px",
            height: "50px",
            borderRadius: "10px",
            backgroundColor: "#F7623F",
            marginTop: '2.5%',
            marginBottom: '10%',
            color: 'white',
            border: 'none',
        },
        uploadImgDiv: {
            padding: 20,
            margin: 'auto',
            alignItems: 'center'
        },
        uploadContentDiv: {
            border: '2px solid black',
            padding: 50,
        },
        dragFileText: {
            marginBottom: '15%'
        },
        inputName: {
            marginBottom: '5%',
            width: '100%',
            padding: 15,
            borderRadius: 25,
            border: '1px solid grey'
        },
        inputPrice: {
            margin: '5%',
            width: '50%',
            padding: 12,
            borderRadius: 25,
            border: '1px solid grey'
        },
        form: {
            marginTop: '5%'
        },
        info: {
            fontFamily: 'Dm Sans',
            color: '#404471',
            marginTop: '-5%',
            marginLeft: '5%'
        }
    }

    return (
        <div>
            {/* <Image src={smallLogo} /> */}
            <div className="d-flex justify-content-center">
                <div className="col-sm-6">
                    <div className="card mt-5">
                        <div className="card-body">
                            <div className="card-block">
                                <h1 className="card-title mt-2" style={classes.title}>Mint a Badge</h1>
                                <br />
                                <div className="row">
                                    <Image src={one} height={30} width={30} />
                                    <h4 style={classes.info}>Information</h4>
                                </div>

                                <form action="" method="post" style={classes.form}>
                                    <label>Badge Name</label>
                                    <input type='text' id="badgeName" name="badgeName" placeholder="Type a Badge Name" style={classes.inputName} />
                                    <br />
                                    <label>Assessment</label>
                                    <br />
                                    <textarea id="description" name="description" placeholder="What actions were performed to earn this badge..." rows="8" cols="50" />
                                </form>

                                <br />
                                <div className="row">
                                    <Image src={two} height={30} width={30} />
                                    <h4 style={classes.info}>Add Associated Skill</h4>
                                </div>

                                <div style={classes.form}>
                                    <Select options={skillTitles} onChange={getRole} id="skills" styles={{ control: (baseStyles) => ({ ...baseStyles, border: '2px solid #404471' }), }} placeholder="Select a skill..." />
                                </div>

                                <br />
                                <div className="row">
                                    <Image src={three} height={30} width={30} />
                                    <h4 style={classes.info}>Upload</h4>
                                </div>

                                <br />
                                <div>
                                    <h4 style={{ color: '#404471', fontFamily: 'Dm Sans', }}>Upload Badge Art</h4>
                                </div>

                                <div style={classes.uploadContentDiv}>
                                    <div style={classes.uploadImgDiv}>
                                        <Image src={imageHolder} alt="Image Placeholder" height={50} width={50} />
                                    </div>
                                    <h4 style={classes.dragFileText}>Drag and Drop Files</h4>
                                    <div id="imageUpload">
                                        <FileUploader handleChange={handleChange} name="file" types={fileTypes} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <br />
            <div className="mint text-center">
                <button style={classes.mintButton} onClick={mintNFT}>Mint Badge</button>
            </div>
        </div>
    );
}


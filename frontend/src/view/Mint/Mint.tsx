import React, { useState, useEffect } from "react";
import Image from "next/image";
import skills from './skills_updated.json';
import Select from 'react-select';
import { TagsInput } from "react-tag-input-component";

import { transactions } from "near-api-js";

import { useSupplyContext } from "context/SupplyContext";
import { FileUploader } from "react-drag-drop-files";
import { NFTStorage, File, Blob } from 'nft.storage'

import imageHolder from 'assets/png/imageHolder.png';
import one from 'assets/png/One.png';
import two from 'assets/png/two.png';
import three from 'assets/png/three.png';
import smallLogo from 'assets/png/small.png';

// import styles from '../../styles/Mint.module.css';

const BN = require("bn.js");
// ----------------------------------------------------------
const fileTypes = ["JPG", "PNG", "GIF"];
export default function Mint() {

    const { totalSupply } = useSupplyContext();
    const [mintable, setMintable] = useState(5777);

    const [file, setFile] = useState(null);
    const [newBlob, setNewBlob] = useState<any>(undefined);
    const [roles, setRoles] = useState('');
    const [idTags, setIdTags] = useState<any>(undefined);
    const [links, setLinks] = useState<any>(undefined);


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

    console.log(links)

    const classes = {
        title: {
            color: '#404471',
            fontWeight: 'bold',
        },
        mintButton: {
            width: 150,
            height: 50,
            borderRadius: 25,
            backgroundColor: "#F7623F",
            marginTop: '2.5%',
            marginBottom: '10%',
            color: 'white',
            border: 'none',
        },
        uploadImgDiv: {
            padding: 20,
            margin: 'auto',

        },
        uploadContentDiv: {
            border: '1px solid grey',
            padding: 50,
        },
        dragFileText: {
            marginBottom: '15%',
        },
        inputName: {
            marginBottom: '5%',
            width: '100%',
            padding: 12,
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
            color: '#404471',
            fontWeight: 'bold',
        },
        label: {
            color: '#404471',
            fontWeight: 'bold',
            marginBottom: '2%'
        },
        textarea: {
            maxWidth: '100%'
        },
        span: {
            fontSize: 14,
            fontWeight: 'normal',
            color: '#404471'
        }
    }

    return (
        <div>
            <div className="d-flex justify-content-center">
                <div className="container-fluid" style={{ maxWidth: '50%' }}>
                    <div className="card mt-5 p-2 shadow shadow-intensity-xl">
                        <div className="card-body">
                            <div className="card-block">
                                <div className="row">
                                    <h1 className="card-title mt-3 col-md-9" style={classes.title}>Create a Badge</h1>
                                    <Image src={smallLogo} className="col-md-6 p-2" width={100} height={85} style={{ opacity: .5, maxWidth: '100%' }} />
                                </div>

                                <div className="container-fluid">
                                    <div className="row gx-0 mt-5">
                                        <div className="col-1">
                                            <Image src={one} height={30} width={30} />
                                        </div>
                                        <div className="col-md-6">
                                            <h4 style={classes.info}>Information</h4>
                                        </div>
                                    </div>
                                </div>

                                <form action="" method="post" style={classes.form}>
                                    <label style={classes.label}>Badge Name</label>
                                    <input type='text' id="badgeName" name="badgeName" placeholder="Type a badge name..." style={classes.inputName} />
                                    <br />
                                    <label style={classes.label}>Assessment</label>
                                    <br />
                                    <textarea style={classes.textarea} id="description" name="description" placeholder=" What actions were performed to earn this badge..." rows={8} cols={70} />
                                    <br />
                                    <br />
                                    <label style={classes.label}>NEAR IDs <span style={classes.span}>(Please enter students' NEAR IDs)</span></label>
                                    <TagsInput
                                        value={idTags}
                                        onChange={setIdTags}
                                        name="tags"
                                        placeHolder="example.testnet"
                                    />
                                    <p className="m-2" style={classes.span}>press enter to add multiple IDs</p>
                                </form>

                                <div className="container-fluid">
                                    <div className="row gx-0 mt-5">
                                        <div className="col-1">
                                            <Image src={two} height={30} width={30} />
                                        </div>
                                        <div className="col-md-6">
                                            <h4 style={classes.info}>Add Associated Skill</h4>
                                        </div>
                                    </div>
                                </div>

                                <div style={classes.form}>
                                    <Select options={skillTitles} onChange={getRole} id="skills" styles={{ control: (baseStyles) => ({ ...baseStyles, border: '1px solid grey', borderRadius: 25 }), }} placeholder="Select a skill..." />
                                </div>


                                <div className="container-fluid">
                                    <div className="row gx-0 mt-5">
                                        <div className="col-1">
                                            <Image src={three} height={30} width={30} />
                                        </div>
                                        <div className="col-md-6">
                                            <h4 style={classes.info}>Upload</h4>
                                        </div>
                                    </div>
                                </div>

                                <br />
                                <div>
                                    <label style={classes.label}>Upload Badge Art</label>
                                </div>

                                <div style={classes.uploadContentDiv}>
                                    <div style={classes.uploadImgDiv} className="d-flex justify-content-center">
                                        <Image src={imageHolder} alt="Image Placeholder" height={50} width={50} />
                                    </div>
                                    <br />
                                    <h4 style={classes.dragFileText} className="text-center">Drag and Drop Files</h4>
                                    <div id="imageUpload" className="d-flex justify-content-center">
                                        <FileUploader handleChange={handleChange} name="file" types={fileTypes} />
                                    </div>
                                </div>

                                <br />
                                <div>
                                    <form>
                                        <label style={classes.label}>Upload Associated Work <span style={classes.span}>(Documentation of materials used in class)</span></label>
                                        <TagsInput
                                            value={links}
                                            onChange={setLinks}
                                            name="links"
                                            placeHolder="github.com/example"
                                        />
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <br />
            <div className="mint text-center">
                <button style={classes.mintButton} onClick={mintNFT}>Create Badge</button>
            </div>
        </div>
    );
}


import React, { useState, useEffect } from "react";
import Image from "next/image";
import skills from "./skills_updated.json";
import Select from "react-select";
import { TagsInput } from "react-tag-input-component";

import { transactions } from "near-api-js";

import { useSupplyContext } from "context/SupplyContext";
import { NFTStorage, File, Blob } from "nft.storage";

import one from "assets/png/One.png";
import smallLogo from "assets/png/small.png";

const BN = require("bn.js");
// ----------------------------------------------------------

declare const window: any;

export default function Mint() {
  const { totalSupply } = useSupplyContext();
  const [mintable, setMintable] = useState(5777);

    const [file, setFile] = useState(null);
    const [newBlob, setNewBlob] = useState<any>(undefined);
    const [roles, setRoles] = useState('');
    const [idTags, setIdTags] = useState<any>([]);
    const [links, setLinks] = useState<any>(undefined);

  let nft: any;
  let mrole: any;
  let nftUrl: any;
  useEffect(() => {
    setMintable(5777 - totalSupply);
  }, [totalSupply]);

    //todo:
    //fucntion that views all series and grabs their title and ID then
    //stores them in a touple

  const getRole = (e: any) => {
    let role = e.value;

        if (role) {
            setRoles(role)
            mrole = role;
        } else {
            mrole = "";
        }
    }


    async function mintNFT() {
        let status = window?.walletConnection?.isSignedIn();
        console.log(nftUrl);
        console.log(mrole, 'mrole');
        console.log(roles, 'roles')
        if (status == true) {
            if (roles == "") {
                alert("Please Select a Skill");
            } 
            else if (!idTags.length){
                alert("Please enter a Near Student ID")
            }
            else if (wrongIdSyntax()){
                alert("One or more of the Student IDs does not contain .testnet")
            }
            else {
                console.log(idTags)
                let content = [];
                for (let i = 0; i < idTags.length; i++) {
                    content[i] = transactions.functionCall(
                        "nft_mint",
                        Buffer.from(JSON.stringify({ id: roles.toString(), receiver_id: idTags[i] })),
                        8000000000000,
                        new BN("20000000000000000000000")
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

    class theSeries {
        series_id: string;
        metadata: {
            title: string;
        }

    }

    //function to get nft series from the contract
    function getSeries(){
        
        const data = window.contract.get_series().then((data) => {
           for (let i = 0; i < data.length; i++){
            let value = data[i].series_id;
            let label = data[i].metadata.title;
            series.push({ value , label })
        }
        });
        
    }
    
    //get series and populate the skill list
    let series = [];
    getSeries();

    
    /*
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
    */
    function wrongIdSyntax(){
        for (let i = 0; i < idTags.length; i++){
            //check if the idTags contain testnet
            if (!idTags[i].includes("testnet")){
                //if not return true
                return true;
            }
        }
        return false;
    }
    async function addIdTag(e: any){
        setIdTags(e);
        /*
        console.log(idTags);
        console.log(idTags.length)
        console.log(await window.contract.get_series());
        */
    }
    console.log(links);
    
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
        <div className="container-fluid" style={{ maxWidth: "50%" }}>
          <div className="card mt-5 p-2 shadow shadow-intensity-xl">
            <div className="card-body">
              <div className="card-block">
                <div className="row">
                  <h1
                    className="card-title mt-3 col-md-9"
                    style={classes.title}
                  >
                    Send a Badge
                  </h1>
                  <Image
                    src={smallLogo}
                    className="col-md-6 p-2"
                    width={100}
                    height={85}
                    alt="badge"
                    style={{ opacity: 0.5, maxWidth: "100%" }}
                  />
                </div>

                <div className="container-fluid">
                  <div className="row gx-0 mt-5">
                    <div className="col-1">
                      <Image alt="skill" src={one} height={30} width={30} />
                    </div>
                    <div className="col-md-6">
                      <h4 style={classes.info}>Add Associated Skill</h4>
                    </div>
                  </div>
                </div>

                                <div style={classes.form}>
                                    <Select options={series} onChange={getRole} id="skills" styles={{ control: (baseStyles) => ({ ...baseStyles, border: '1px solid grey', borderRadius: 25 }), }} placeholder="Select a skill..." />
                                </div>

                                <form action="" method="post" style={classes.form}>
                                    <br />
                                    <label style={classes.label}>STUDENT NEAR IDs <span style={classes.span}>(press enter to add multiple IDs)</span></label>
                                    <TagsInput
                                        value={idTags}
                                        //todo: create a function that is called here that creates an array of the idTags
                                        onChange={addIdTag}
                                        name="tags"
                                        placeHolder="example.testnet"
                                    />
                                </form>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

      <br />
      <div className="mint text-center">
        <button style={classes.mintButton} onClick={mintNFT}>
          Send Badge
        </button>
      </div>
    </div>
  );
}

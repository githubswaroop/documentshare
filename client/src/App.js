// import FileUpload from "./components/FileUpload";
// import Display from "./components/Display";
// import Modal from "./components/Modal";
// import "./App.css";
// import Upload from "./artifacts/contracts/Upload.sol/Upload.json";
// import { useState, useEffect } from "react";
// const ethers = require("ethers")


// function App() {
//   const [account, setAccount] = useState("");
//   const [contract, setContract] = useState(null);
//   const [provider, setProvider] = useState(null);
//   const [modalOpen, setModalOpen] = useState(false);

//   useEffect(() => {
//     const provider = new ethers.BrowserProvider(window.ethereum);

//     const wallet = async () => {
//       if (provider) {
//         window.ethereum.on("chainChanged", () => {
//           window.location.reload();
//         });

//         window.ethereum.on("accountsChanged", () => {
//           window.location.reload();
//         });
//         await provider.send("eth_requestAccounts", []);
//         const signer = await provider.getSigner();
//         const address = (await signer).address;
//         setAccount(address);
//         let contractAddress = "0xD80CebD65a93B0E35fC1532Ab98cC93cE1a88B63";

//         const contract = new ethers.Contract(
//           contractAddress,
//           Upload.abi,
//           signer
//         );
//         //console.log(contract);
//         setContract(contract);
//         setProvider(signer);
//       } else {
//         console.error("Metamask is not installed");
//       }
//     };
//     provider && wallet();
//   }, []);
//   return (
//     <>
    
//       {!modalOpen && (
//         <button className="share" onClick={() => setModalOpen(true)}>
//           Share
//         </button>
//       )}
//       {modalOpen && (
//         <Modal setModalOpen={setModalOpen} contract={contract}></Modal>
//       )}

//       <div className="App">
//         <h1 style={{ color: "white" }}>ShareSphere</h1>
//         <div class="bg"></div>
//         <div class="bg bg2"></div>
//         <div class="bg bg3"></div>

//         <p style={{ color: "white" }}>
//           Account : {account ? account : "Not connected"}
//         </p>
//         <FileUpload
//           account={account}
//           provider={provider}
//           contract={contract}
//         ></FileUpload>
//         <Display contract={contract} account={account}></Display>
//       </div>
//     </>
//   );
// }

// export default App;


import "./App.css";
import videobg from "./components/video/video.mp4"
import FileUpload from "./components/FileUpload";
import Display from "./components/Display";
import Modal from "./components/Modal";
import Upload from "./artifacts/contracts/Upload.sol/Upload.json";
import { useState, useEffect } from "react";
const ethers = require("ethers");

function App() {
  const [account, setAccount] = useState("");
  const [contract, setContract] = useState(null);
  const [provider, setProvider] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const provider = new ethers.BrowserProvider(window.ethereum);

    const wallet = async () => {
      if (provider) {
        window.ethereum.on("chainChanged", () => {
          window.location.reload();
        });

        window.ethereum.on("accountsChanged", () => {
          window.location.reload();
        });
        await provider.send("eth_requestAccounts", []);
        const signer = await provider.getSigner();
        const address = (await signer).address;
        setAccount(address);
        let contractAddress = "0xD80CebD65a93B0E35fC1532Ab98cC93cE1a88B63";

        const contract = new ethers.Contract(
          contractAddress,
          Upload.abi,
          signer
        );
        //console.log(contract);
        setContract(contract);
        setProvider(signer);
      } else {
        console.error("Metamask is not installed");
      }
    };
    provider && wallet();
  }, []);

  return (
    <>
      {!modalOpen && (
        <button className="share" onClick={() => setModalOpen(true)}>
          Share
        </button>
      )}
      {modalOpen && (
        <Modal setModalOpen={setModalOpen} contract={contract}></Modal>
      )}
      {/* only this added */}
      <div className="video-container">
        <video src={videobg} autoPlay loop muted />
         
      </div>

      <div className="App">
        <h1 style={{ color: "white" }}>ShareSphere</h1>
        <p style={{ color: "white" }}>
          Account : {account ? account : "Not connected"}
        </p>
        <FileUpload
          account={account}
          provider={provider}
          contract={contract}
        ></FileUpload>
        <Display contract={contract} account={account}></Display>
      </div>
    </>
  );
}

export default App;

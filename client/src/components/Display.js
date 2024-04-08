// import { useState } from "react";
// import "./Display.css";

// const Display = ({ contract, account }) => {
//   const [data, setData] = useState("");

//   const getdata = async () => {
//     let dataArray = [];
//     let dataArray1 = []; // Initialize with an empty array as default
//     const otherAddress = document.querySelector(".address").value;
//     try {
//       if (otherAddress) {
//         dataArray = await contract.display(otherAddress) || [];
//         // dataArray1 = await contract.displayName(otherAddress,dataArray) || [];
//       } else {
//         dataArray = await contract.display(account) || [];
//         dataArray1 = await contract.displayName(account,dataArray) || [];
//         console.log(dataArray);
//       }
//     } catch (e) {
//       console.error(e); // More detailed logging for debugging
//       alert(e.message); // Display a more user-friendly message
//       return; // Early return to stop further execution
//     }
  
//     // Now we can safely check the length since dataArray is guaranteed to be an array
//     if (dataArray.length > 0) {
//       const images = dataArray.map((item, i) => (
//         <a href={item} key={`a-${i}`} target="_blank" rel="noopener noreferrer">
//           <img key={`img-${i}`} src={item} alt="new" className="image-list" />
//           <h1>{dataArray}</h1>
//         </a>
//       ));
//       setData(images);
//       setData(images);
//     } else {
//       alert("No File to Display");
//     }
//   };
  
//   return (
//     <>
//       <div className="image-list">{data}</div>
//       <input
//         type="text"
//         placeholder="Enter Address"
//         className="address"
//       ></input>
//       <button className="center button" onClick={getdata}>
//         Get Data
//       </button>
//     </>
//   );
// };

// export default Display;
// import { useState } from "react";
// import "./Display.css";

// const Display = ({ contract, account }) => {
//   const [data, setData] = useState("");

//   const getdata = async () => {
//     let dataArray = [];
//     let dataArray1=[]; // Initialize with an empty array as default
//     const otherAddress = document.querySelector(".address").value;
//     try {
//       if (otherAddress) {
//         dataArray = await contract.display(otherAddress) || [];
//         dataArray1 = await contract.displayName(otherAddress) || [];
//       } else {
//         dataArray = await contract.display(account) || [];
//         //dataArray1 = await contract.displayName(account) || [];
        
//         console.log(dataArray);
//       }
//     } catch (e) {
//       console.error(e); // More detailed logging for debugging
//       alert(e.message); // Display a more user-friendly message
//       return; // Early return to stop further execution
//     }
  
//     // Now we can safely check the length since dataArray is guaranteed to be an array
//     if (dataArray.length > 0) {
//       const images = dataArray.map((item, i) => (
//         <a href={item} key={`a-${i}`} target="_blank" rel="noopener noreferrer">
//           <img key={`img-${i}`} src={item} alt="new" className="image-list" />
//           <h1>{dataArray}</h1>
//         </a>
//       ));
//       setData(images);
//       setData(images);
//     } else {
//       alert("No File to Display");
//     }
//   };
  
//   return (
//     <>
//       <div className="image-list">{data}</div>
//       <input
//         type="text"
//         placeholder="Enter Address"
//         className="address"
//       ></input>
//       <button className="center button" onClick={getdata}>
//         Get Data
//       </button>
//     </>
//   );
// };

// export default Display;

// import { useState } from "react";
// import "./Display.css";

// const Display = ({ contract, account }) => {
//   const [data, setData] = useState([]);

//   const getFileType = (url) => {
//     // This function determines the file type based on the file extension
//     const extension = url.split(".").pop().toLowerCase();
//     if (['png', 'jpg', 'jpeg', 'gif', 'bmp', 'webp'].includes(extension)) {
//       return 'image';
//     } else {
//       // You can add more cases here for different file types
//       return 'other'; // Default to 'other' for non-image types
//     }
//   };

//   const renderFile = (url, index) => {
//     const type = getFileType(url);
//     if (type === 'image') {
//       return (
//         <div className="file-item" key={`file-item-${index}`}>
//           <a href={url} target="_blank" rel="noopener noreferrer">
//             <img src={url} alt="file" className="file-image" />
//           </a>
//         </div>
//       );
//     } else {
//       return (
//         <div className="file-item" key={`file-item-${index}`}>
//           <a href={url} target="_blank" rel="noopener noreferrer" className="file-link">
//             <span className="file-icon" role="img" aria-label="file">📄</span>
//             <span className="download-text">Download Now</span>
//           </a>
//         </div>
//       );
//     }
//   };
  

//   const getdata = async () => {
//     let dataArray = [];
//     const otherAddress = document.querySelector(".address").value;
//     try {
//       if (otherAddress) {
//         dataArray = await contract.display(otherAddress) || [];
//       } else {
//         dataArray = await contract.display(account) || [];
//         console.log(dataArray);
//       }
//     } catch (e) {
//       alert("No file to display");
//       console.error(e);
      
//       // Update the UI to show an error message
//       setData([]);
//       return;
//     }

//     if (dataArray.length > 0) {
//       const files = dataArray.map((item, i) => renderFile(item, i));
//       setData(files);
//     } else {
//       // Update the UI to show a message when no files are available
//       setData([]);
//     }
//   };

//   return (
//     <>
      
//       <input
//         type="text"
//         placeholder="Enter Address"
//         className="address"
//       ></input>
//       <button className="center button" onClick={getdata}>
//         Get Data
//       </button>
//       <div className="file-list">{data}</div>
//     </>
//   );
// };

// export default Display;
import { useState } from "react";
import "./Display.css";

const Display = ({ contract, account }) => {
  const [data, setData] = useState([]);

  const getFileType = (url) => {
    // This function determines the file type based on the file extension
    const extension = url.split(".").pop().toLowerCase();
    if (['png', 'jpg', 'jpeg', 'gif', 'bmp', 'webp'].includes(extension)) {
      return 'image';
    } else {
      // You can add more cases here for different file types
      return 'other'; // Default to 'other' for non-image types
    }
  };

  const renderFile = (url, index) => {
    const type = getFileType(url);
    if (type === 'image') {
      return (
        <div className="file-item" key={`file-item-${index}`}>
          <a href={url} target="_blank" rel="noopener noreferrer">
            <img src={url} alt="file" className="file-image" />
          </a>
        </div>
      );
    } else {
      return (
        <div className="file-item" key={`file-item-${index}`}>
          <a href={url} target="_blank" rel="noopener noreferrer" className="file-link">
            <span className="file-icon" role="img" aria-label="file">📄</span>
            <span className="download-text">Download Now</span>
          </a>
        </div>
      );
    }
  };
  

  const getdata = async () => {
    let dataArray = [];
    const otherAddress = document.querySelector(".address").value;
    try {
      if (otherAddress) {
        dataArray = await contract.display(otherAddress) || [];
      } else {
        dataArray = await contract.display(account) || [];
        console.log(dataArray);
      }
    } catch (e) {
      console.error(e);
      alert("You don't have access"); 
      setData([]);
      return;
    }

    // Now we can safely check the length since dataArray is guaranteed to be an array
    if (dataArray.length > 0) {
      const files = dataArray.map((item, i) => renderFile(item, i));
      setData(files);
    } else {
      alert("No File to Display");
      setData([]);
    }
  };

  return (
    <>
      <input
        type="text"
        placeholder="Enter Address"
        className="address"
      ></input>
      <button className="center button" onClick={getdata}>
        Get Data
      </button>
      <div className="file-list">{data}</div>
    </>
  );
};

export default Display;

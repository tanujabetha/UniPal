// import styles from "./UploadTranscripts.module.css";

// const UploadTranscripts = () => {
//   return (
//     <div className={styles.uploadTranscripts}>
//       <section className={styles.uploadTranscriptsInner}>
//         <div className={styles.dragNDropParent}>
//           <div className={styles.dragNDrop}>
//             <div className={styles.dragNDropChild} />
//             <div className={styles.frameParent}>
//               <div className={styles.frameWrapper}>
//                 <img
//                   className={styles.frameChild}
//                   loading="lazy"
//                   alt=""
//                   src="/group-1.svg"
//                 />
//               </div>
//               <div className={styles.dragAndDrop}>
//                 Drag and drop files to upload
//               </div>
//             </div>
//             <div className={styles.orWrapper}>
//               <div className={styles.or}>OR</div>
//             </div>
//             <div className={styles.dragNDropInner}>
//               <button className={styles.rectangleParent}>
//                 <div className={styles.frameItem} />
//                 <div className={styles.browse}>Browse</div>
//               </button>
//             </div>
//           </div>
//           <div className={styles.frameGroup}>
//             <div className={styles.componentlottiehttpsassetWrapper}>
//               <img
//                 className={styles.componentlottiehttpsassetIcon}
//                 loading="lazy"
//                 alt=""
//                 src="/componentlottiehttpsassets8lottiefilescompackageslf20-komemhfljson@2x.png"
//               />
//             </div>
//             <b className={styles.filesUploaded}>Files Uploaded</b>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default UploadTranscripts;

import React, { useState } from "react";
import axios from "axios";
import styles from "./UploadTranscripts.module.css";

const UploadTranscripts = () => {
  const [files, setFiles] = useState([]);
  const [uploadedFiles, setUploadedFiles] = useState([]);

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const formData = new FormData();
      formData.append("file", file);

      axios.post("http://127.0.0.1:5000/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data"
        },
          withCredentials:true,
      })
      .then(response => {
        setUploadedFiles([...uploadedFiles, response.data.file_info]);
      })
      .catch(error => {
        console.error("Error uploading file:", error);
      });
    }
  };

  const handleFileDelete = (fileName) => {
    axios.post("http://127.0.0.1:5000/deleteFile", { fileName}, {withCredentials:true })
      .then(response => {
        setUploadedFiles(uploadedFiles.filter(file => file.filename !== fileName));
      })
      .catch(error => {
        console.error("Error deleting file:", error);
      });
  };

  const handleFileView = (fileName) => {
    axios.get(`http://127.0.0.1:5000//viewFile/${fileName}`, { responseType: "arraybuffer", withCredentials:true })
      .then(response => {
        const file = new Blob([response.data], { type: response.headers['content-type'] });
        const fileURL = URL.createObjectURL(file);
        window.open(fileURL, '_blank');
      })
      .catch(error => {
        console.error("Error viewing file:", error);
      });
  };
  

  return (
    // <div className={styles.uploadTranscripts}>
    //   <section className={styles.uploadTranscriptsInner}>
    //     <div className={styles.dragNDropParent}>
    //       <div className={styles.dragNDrop}>
    //         <input
    //           type="file"
    //           onChange={handleFileUpload}
    //           className={styles.dragNDropChild}
    //         />
    //         <div className={styles.frameParent}>
    //           <div className={styles.frameWrapper}>
    //             <img
    //               className={styles.frameChild}
    //               loading="lazy"
    //               alt=""
    //               src="/group-1.svg"
    //             />
    //           </div>
    //           <div className={styles.dragAndDrop}>
    //             Drag and drop files to upload
    //           </div>
    //         </div>
    //         <div className={styles.orWrapper}>
    //           <div className={styles.or}>OR</div>
    //         </div>
    //         <div className={styles.dragNDropInner}>
    //           <button className={styles.rectangleParent}>
    //             <div className={styles.frameItem} />
    //             <div className={styles.browse}>Browse</div>
    //             <input type="file" onChange={handleFileUpload} />
    //           </button>
    //         </div>
    //       </div>
    //       <div className={styles.frameGroup}>
    //         <div className={styles.componentlottiehttpsassetWrapper}>
    //           <img
    //             className={styles.componentlottiehttpsassetIcon}
    //             loading="lazy"
    //             alt=""
    //             src="/componentlottiehttpsassets8lottiefilescompackageslf20-komemhfljson@2x.png"
    //           />
    //         </div>
    //         <b className={styles.filesUploaded}>Files Uploaded</b>
    //         <ul>
    //           {uploadedFiles.map(file => (
    //             <li key={file.file_id}>
    //               {file.filename}
    //               <button onClick={() => handleFileView(file.filename)}>View</button>
    //               <button onClick={() => handleFileDelete(file.filename)}>Delete</button>
    //             </li>
    //           ))}
    //         </ul>
    //       </div>
    //     </div>
    //   </section>
    // </div>
      <div className={styles.uploadTranscripts}>
        <a href="/" >
          <img src="/Logo_White.png" className={styles.homeButton} alt="Home"/> {/* Make sure you have an icon */}
        </a>
        <section className={styles.uploadTranscriptsInner}>
          <div className={styles.dragNDropParent}>
            <div type="file"
                 onChange={handleFileUpload} className={styles.dragNDrop}>
              <input
                  type="file"
                  onChange={handleFileUpload}
                  className={styles.dragNDropChild}
              />
              <div className={styles.frameParent}>
                <div className={styles.frameWrapper}>
                  <img
                      className={styles.frameChild}
                      loading="lazy"
                      alt=""
                      src="/group-1.svg"
                  />
                </div>
                <div className={styles.dragAndDrop}>
                  Drag and drop files to upload
                </div>
              </div>
              <div className={styles.orWrapper}>
                <div className={styles.or}>OR</div>
              </div>
              <div className={styles.dragNDropInner}>
                <button className={styles.rectangleParent}>
                  <div className={styles.frameItem}/>
                  {/* <div className={styles.browse}>Browse</div> */}
                  <input type="file" onChange={handleFileUpload}/>
                </button>
              </div>
            </div>
            <div className={styles.frameGroup}>
              <div className={styles.componentlottiehttpsassetWrapper}>
                <img
                    className={styles.componentlottiehttpsassetIcon}
                    loading="lazy"
                    alt=""
                    src="/componentlottiehttpsassets8lottiefilescompackageslf20-komemhfljson@2x.png"
                />
              </div>
              <b className={styles.filesUploaded}>Files Uploaded</b>
              <ul>
                {uploadedFiles.map(file => (
                    <li key={file.file_id}>
                      {file.filename}
                      <button onClick={() => handleFileView(file.filename)}>View</button>
                      <button onClick={() => handleFileDelete(file.filename)}>Delete</button>
                    </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </div>
  );
};

export default UploadTranscripts;


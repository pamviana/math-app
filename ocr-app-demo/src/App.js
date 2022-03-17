import React, { useState } from "react";
import "./App.css";
import Dropzone from "react-dropzone";
import cloud from "./resources/cloud.svg";
import uploaded from "./resources/uploaded.svg";
//import ReactFileReader from "react-file-reader";

function App() {
  const [base, setFile] = useState(null);


  // async function getBase64(file, cb){
  //   let reader = new ReactFileReader();
  //   reader.readAsDataURL(file);
  //   reader.onload = function () {
  //     cb(reader.result)
  //   };
  //   reader.onerror = function(error){
  //     console.log("error: ", error)
  //   }    
  // }

  // async function fileUpload(file) {
  //   try{
  //     await getBase64(file, (base64string) => {
  //       console.log(base64string)
  //     })
  //   } catch(e){
  //     console.log(e.message);
  //   }
  // }

  async function onAcceptedDrop(acceptedFile){
    console.log(acceptedFile[0]);
    //await fileUpload(acceptedFile);
  }

  return (
    <div className="App">
      <h1>CEN4010 - Project Demo - Team 8</h1>
      <div>
        <Dropzone
          minSize={1}
          maxSize={5000000}
          noKeyboard={true}
          accept="image/png, image/jpeg, image/pdf, image/tiff, image/webp"
          onDrop={(file) => {
            console.log(file);
          }}
          onDropAccepted={onAcceptedDrop}
        >
          {({ getRootProps, getInputProps, isDragActive, isDragReject }) => (
            <section>
              <div {...getRootProps()}>
                <input {...getInputProps()} />
                <div className="box-input-image">
                  {!isDragActive && <img alt="cloud" src={cloud} />}
                  {isDragActive && !isDragReject && (
                    <img alt="uploaded" src={uploaded} />
                  )}
                  <p>Drag 'n' drop here, or click to select a file</p>
                </div>
              </div>
            </section>
          )}
        </Dropzone>
      </div>
    </div>
  );
}

export default App;

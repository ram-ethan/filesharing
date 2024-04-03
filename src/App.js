
import { useState } from 'react';
import './App.css';
import { useRef } from 'react';
import { useEffect } from 'react';
import { uploadFile } from './services/api';
function App() {
  const [file, setFile] = useState('');
  const [result, setResult] = useState('');
  const fileInputRef = useRef();
  useEffect(() => {
    const getImage = async () => {
      if (file) {
        const data = new FormData();
        data.append('name', file.name);
        data.append('file', file);
        let response = await uploadFile(data);
        setResult(response.path);

      }
    }
    getImage();
  }, [file])



  const onUpload = () => {
    fileInputRef.current.click();
  }
  console.log(file);

  return (
    <div className="App">

      <div className="container imgg">

        <div className="main">
          <div className="heading">
            <h1>Ready To Upload</h1>
          </div>
          <div className="para">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, eveniet.
          </div>
          <button className="btn" onClick={onUpload}>
            Upload
          </button>
          <input type="file" ref={fileInputRef} style={{ display: "none" }} onChange={(e) => {
            setFile(e.target.files[0]);

          }} />
          <div className="card" >

            <a style={{ color: "#130072" }} href={result}>{result}</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

// import { useState, useEffect, useRef } from 'react';
// import './App.css';
// import { uploadFile } from './services/api';

// function App() {
//   const [file, setFile] = useState('');
//   const [result, setResult] = useState('');

//   const fileInputRef = useRef();

//   const url = 'https://i.pinimg.com/originals/16/46/24/1646243661201a0892cc4b1a64fcbacf.jpg';

//   useEffect(() => {
//     const getImage = async () => {
//       if (file) {
//         const data = new FormData();
//         data.append("name", file.name);
//         data.append("file", file);

//         const response = await uploadFile(data);
//         // setResult(response.path);
//       }
//     }
//     getImage();
//   }, [file])

//   const onUploadClick = () => {
//     fileInputRef.current.click();
//   }
//   return (
//     <div className="App">

//       <div className="container imgg">

//         <div className="main">
//           <div className="heading">
//             <h1>Ready To Upload</h1>
//           </div>
//           <div className="para">
//             Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, eveniet.
//           </div>
//           <button className="btn" onClick={onUploadClick}>
//             Upload
//           </button>
//           <input type="file" ref={fileInputRef} style={{ display: "none" }} onChange={(e) => {
//             setFile(e.target.files[0]);

//           }} />

//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;
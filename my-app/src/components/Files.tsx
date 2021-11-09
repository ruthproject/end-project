import React, {useRef} from 'react'

// import "./styles.css";

import axios from "axios";
import Api from "../Api";

const File = () => {
//   const { handleSubmit, register } = useForm({
//     mode: "onBlur"
//   });

  // const [imageFile, setImageFile] = useState(null);

  // const handleChange = e => {
  //   e.persist(); // per ParmentierChristophe react-hook-form/issues/274
  //   // console.log("e: ", e);
  //   setImageFile(e.target.files[0]); // oops. Nothing is there..
  //   console.log(imageFile);
  // };

//   const fileInput:any = React.createRef();
const inputFile = useRef<any>(null)
  const onSubmitFn = (data:File[]) => {
    // event.preventDefault();  // I believe react-hook-form handles this
    // console.log(
    //   "onSubmitFn:",
    //   data,
    //   "  imageFile: ",
    //   fileInput.current.files[0].name
    // );
    // const fd = new FormData();
    // for (var key in data) {
    //   fd.append(key, data[key]); // formdata doesn't take objects
    // }

    // fd.append(
    //   "image",
    //   fileInput.current.files[0],
    //   fileInput.current.files[0].name
    // );
    // axios
    //   .post("https://httpbin.org/post", fd, {
    //     onUploadProgress: ProgressEvent => {
    //       console.log(
    //         "Upload Progress: " +
    //           Math.round((ProgressEvent.loaded / ProgressEvent.total) * 100) +
    //           "%"
    //       );
    //     }
    //   })
    Api({url:"Files/UploadFile",method:"POST",body:data[0]})
      .then(res => {
        console.log("response from server: ", res);
        console.log(data.length);
      });
  };

  return (
    <>
      <h2>Basic Example of File Upload, using React.createRef</h2>
      
        <div>
          <label htmlFor="avatar">Select a Photo</label>
          <input
            type="file"
            id="avatar"
            name="avatar"
            multiple
            ref={inputFile}
            onChange={()=>{
               onSubmitFn(inputFile.current.files)
            }}
            // value={inputFile.current.files}
          />
        </div>

        <div>
          <label htmlFor="firstName">First Name</label>
          {/* <input
            type="text"
            placeholder="First Name"
            className="form-control"
            name="firstName"
            id="firstName"
            ref={register({ required: true, maxLength: 80 })}
          /> */}
        </div>
        <button type="submit" onClick={()=>onSubmitFn(inputFile?.current.files)} className="btn btn-primary">
          Submit
          {console.log(inputFile)}
        </button>
    
    </>
  );
};

export default File;

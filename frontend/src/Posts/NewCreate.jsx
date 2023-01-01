import {useState} from "react";
import {posterData,sendFile} from "../api/api.js";
import "./NewPost.css";

const initialData = {
    title:"",
    description:"",
}

const NewCreate = ()=>{

    const [data,setData] = useState(initialData);
    const [file,setFile] = useState(null)



    const handleChange = (e)=>{
        setData({...data,[e.target.name]:e.target.value})
    }


    const handleSubmit =async()=>{
       const response =  await posterData(data);
       console.log(response.data);
    }


    const handleFile = (e)=>{
        

        const fileData = new FormData();
        fileData.append("image",e.target.files[0]);
      
        setFile(fileData);
    }

    const handleFileSubmit =async()=>{

        await sendFile(file);
        
    }
  

    const getImage = ()=>{

    }
    return (
        <form action="/upload" method="post" enctype="multipart/form-data">
        <h1>Create Your Poster</h1>
        <div class="form-group">
          <label for="title">Title:</label>
          <input type="text" id="title" name="title" onChange = {handleChange}/>
        </div>
        <div class="form-group">
          <label for="description">Description:</label>
          <textarea id="description" name="description" onChange = {handleChange}></textarea>
        </div>
        <div class="form-group">
          <label for="image">Upload Image:</label>
          <input type="file" id="image" name="image"  onChange = {handleFile}/>
        </div>
        <div class="form-group">
          <button type="submit" onClick = {handleFileSubmit}>Submit</button>
          <button type="button" onClick = {getImage}>Get Image</button>
        </div>
      </form>
      
    )
}

export default NewCreate;
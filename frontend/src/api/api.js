import axios from "axios";

 const backendUrl = "http://localhost:8000"
 export const posterData = async(posterInfo)=>{
    await axios.post(`${backendUrl}/post/sendData`,posterInfo)
}


export const getData = async()=>{
    return await axios.get(`${backendUrl}/post/getData`);
}

export const sendFile = async(file)=>{
    return await axios.post(`${backendUrl}/fileupload`,file)
}
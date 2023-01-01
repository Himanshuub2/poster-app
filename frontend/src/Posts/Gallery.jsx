
import {getData} from "../api/api";
import {useState,useEffect} from "react"



const Gallery = ()=>{
    
    const [posterData,setPosterData] = useState([]);

    const [search,setSearch] =useState("");


     const fetchData = async()=>{
        const res = await getData();
        // console.log(res.data);
    
        setPosterData(res.data)
    }



    console.log(posterData);
    useEffect(()=>{
     
        fetchData();
    },[])

    const searchData = ()=>{
        setPosterData(posterData.filter(item=>item.title.includes(search)))
    }

    return (
        <div> 
              <input placeholder = "search post" onChange = {(e)=>setSearch(e.target.value)}></input>
              <button onClick = {searchData}>Search</button>
            {
                posterData.map(item=>(
                    <h1>{item.title}</h1>
                ))
            }
        </div>
    )
}
export default Gallery;
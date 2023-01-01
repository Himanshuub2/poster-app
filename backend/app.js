const express = require('express')
var mongoose = require('mongoose');
var multer = require("multer");
const app = express()
const path = require("path");

const cors = require('cors')
const dotenv = require("dotenv");

dotenv.config();
const port = process.env.PORT || 8000;

mongoose.connect(process.env.MONGODB_URI);


app.use(cors());
app.use(express.json());

app.use(require("./routes"));

app.listen(port, () => {
    console.log(`Listening on port: ${port}`)
})

process.on('SIGINT', async function () {
    await mongoose.disconnect();
    process.exit(0)
});




const storage = multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,"assets")
    },
    
    filename:(req,file,cb)=>{
        cb(null,Date.now()+"-"+file.originalname)
    }
})

const upload = multer({storage:storage}).single("image");


app.post("/fileupload",upload,(req,res)=>{
    res.status(201).json(req.file)
})


app.get("/fileget",)

//-----PRODUCTION----------//
if(process.env.NODE_ENV==="production"){
    
    console.log(__dirname);
    app.use(express.static(path.join(__dirname,"../frontend","build")));
    app.get("/*",(req,res)=>{
        res.sendFile (path.join(__dirname,"../frontend","build","index.html"))
    })

}

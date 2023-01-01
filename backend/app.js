const express = require('express')
var mongoose = require('mongoose');
var multer = require("multer");
const app = express()
const port = 8000
const cors = require('cors')

mongoose.connect("mongodb+srv://admin:himanshu@cluster0.thkmk.mongodb.net/?retryWrites=true&w=majority");

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

// exports.upload =upload; 
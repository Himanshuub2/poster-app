const Post = require("../../models/Post");

var router = require("express").Router();

// @AssetPlus: This is a sample get request
router.get("/getData", async (req, res) => {
    var posts = await Post.find({});
    return res.send(posts);
});

// @AssetPlus: Add other routes here
// router.post("/add")


router.post("/sendData",async(req,res)=>{
    const title = req.body.title;
    console.log(title)
   const data = req.body;
    const dupCheck = await Post.find({title})
    console.log(dupCheck)
 
    if(dupCheck !==[]){

        const newData = new Post(data);
        try{
             await newData.save();
            res.status(201).json(newData)
        }
         catch(err){
            res.status(409).json(err);
         }
    }
    else{
        res.status(201).json({message:"user already exists"})
    }
});


router.delete("/deletePoster",async(req,res)=>{

    const item = req.body;



    try{

        await Post.deleteOne({title:item.title})
        res.status(201).json({message:"item deleted"})
    }
    catch(err){
        res.status(409).json({message:"erroer with deletion"})
    }
})







module.exports = router;
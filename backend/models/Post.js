var mongoose = require("mongoose");

var postSchema = mongoose.Schema(
    {
        // @AssetPlus: Describe schema here

        title:{type:String},
        description:{type:String},

    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model("Post", postSchema)
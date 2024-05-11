const { Schema, model } = require("mongoose")
const { schema } = require("./user")

const blogSchema = new Schema({
    title:{
        type: String,
        required: true,
    },
    body:{
        type: String,
        required: true,

    },
    coverImageUrl:{
        type: String,
        required: false,
    },
    createdBy:{
        type: Schema.Types.ObjectId,
        ref: "users"
    },
},
{timestamps: true});

const BLOG = model("blogs", blogSchema)

module.exports = BLOG;
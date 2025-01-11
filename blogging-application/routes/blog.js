const { Router } = require("express");
const multer = require("multer")
const path = require("path")
const router = Router();
const Blog = require("../models/blog")
const Comments = require("../models/comments")

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.resolve(`./public/uploads`));
    },
    filename: function (req, file, cb) {
      const fileName = `${Date.now()}-${file.originalname}`;
      cb(null, fileName);
    },
  });
  
const upload = multer({ storage: storage })
  
router.get("/add-new",(req, res)=>{
    return res.render("addBlog",{
        user:req.user,
    })
})
.post("/", upload.single("coverImage"),async (req, res)=>{
    const { title, body} = req.body;
    const blog = await Blog.create({

        body:body,
        title:title,
        createdBy: req.user._id,
        coverImageUrl: `/uploads/${req.file.filename}`
    })
    return res.redirect(`/blog/${blog._id}`);

})
router.get("/:id", async (req, res)=>{
    const blog = await Blog.findById(req.params.id).populate("createdBy");
    const comments = await Comments.find({blogId:req.params.id}).populate("createdBy");
    return res.render("blog", {
        user: req.user,
        blog: blog,
        comments: comments,

    })
})
router.post("/comment/:blogId", async(req ,res )=>{
    await Comments.create({
        content: req.body.content,
        blogId: req.params.blogId,
        createdBy:req.user._id,
    })
    return res.redirect(`/blog/${req.params.blogId}`)
})

module.exports = router;
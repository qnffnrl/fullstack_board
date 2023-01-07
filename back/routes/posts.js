const router = require("express").Router();
const Post = require("../models/Post");
const moment = require("moment");

/**
 * create
 */
router.post("/", (req, res) => {
    const post = new Post();
    post.title = req.body.title;
    post.content = req.body.content;
    post.writer = req.body.writer;
    post.createAt = moment().format("YYYY-MM-DD hh:mm:ss");

    post.save((err, result) => {
        if (err) res.json(err);
        res.json(result);
    });
});

/**
 * read
 */
router.get("/", (req, res) => {
    Post.find({})
        .sort("-createdAt")
        .exec((err, posts) => {
            if (err) return res.json(err);
            res.json(posts);
        });
});

/**
 * read one
 */
router.get("/:post_id", (req, res) => {
    Post.findOne({ _id: req.params.post_id }, (err, result) => {
        if (err) return res.json(err);
        res.json(result);
    });
});

/**
 * put (update)
 */
router.put("/:post_id", (req, res) => {
    req.body.updatedAt = moment().format("YYYY-MM-DD hh:mm:ss");
    Post.findByIdAndUpdate(
        { _id: req.params.post_id },
        req.body,
        (err, result) => {
            if (err) return res.json(result);
            res.json({ message : "post updated" });
        }
    )
});

/**
 * delete
 */
router.delete("/:post_id", (req, res) => {
    Post.deleteOne({ _id: req.params.post_id }, (err) => {
        if (err) return res.json(err);
        res.status(204).end();
    });
});


module.exports = router;







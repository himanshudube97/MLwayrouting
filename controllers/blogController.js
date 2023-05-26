const Errorhandler = require("../utils/errorHandler");
const Blog = require("../models/blogModel");
class BlogControllers {
    static async getAllBlogs(req, res, next) {
        try {

            let page = req.query.page || 1;   // while searching kya hoga ki if we are on 3rd page and search something and the document is single only, it will not be seen on 3rd page. so what we need we need to set pageNum too 1 from frontend only. Backend se karenge to problem ho jayega, we cannot access next page.
            let search = {};
            let category = {};

            if (req.query.search) {
                search = {
                    $or: [
                        { title: { $regex: req.query.search, $options: "i" } },
                        { description: { $regex: req.query.search, $options: "i" } },
                    ],
                };

            };

            if (req.body.category.length !== 0) {
                category = { category: { $in: req.body.category } }
            };

            let query = { $and: [search, category] }
            //   console.log(query, "query");

            const result = await Blog.find(query)
                .skip((page - 1) * 5)
                .limit(5);
            res.status(200).json({
                result,
            });
        } catch (error) {
            next(error);
        }
    }
    static async createBlog(req, res, next) {
        const result = await Blog.create(req.body);
        res.json({
            result,
        });
    }
}

module.exports = BlogControllers;

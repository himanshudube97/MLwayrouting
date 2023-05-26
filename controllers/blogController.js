const Errorhandler = require("../utils/errorHandler");
const Blog = require("../models/blogModel");
class BlogControllers {
  static async getAllBlogs(req, res, next) {
    try {
      console.log(req.query.page, "query");
      let page = req.query.page || 1;
      let search = {};
      if (req.query.search) {
        search = {
          $or: [
            { title: { $regex: req.query.search, $options: "i" } },
            { description: { $regex: req.query.search, $options: "i" } },
          ],
        };
      }
      console.log(search, "serach")
      const result = await Blog.find(search)
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

// const app = require("../app");
const resolvedPromise = require("../utils/promiseResolver");
const BlogControllers = require("../controllers/blogController");

// console.log(BlogControllers.getAllBlogs(), "djk");
// console.log(resolvedPromise(BlogControllers.getAllBlogs()), "great")

// async function name(){
//     const result  = await resolvedPromise(BlogControllers.getAllBlogs())
//     console.log(result,"hima")
// }
// name();


async function blogRoutes(app) {
    app.post("/getAllBlogs", await resolvedPromise(BlogControllers.getAllBlogs))
    app.post("/createBlog", await resolvedPromise(BlogControllers.createBlog))
}



module.exports = blogRoutes;
const express = require("express")
const router = express.Router()
const {postDetails,getRequest,getTask} = require("../controllers/tasks")
router.route("/").post(postDetails).get(getRequest)
router.route("/:id").get(getTask)


module.exports = {
    router
}

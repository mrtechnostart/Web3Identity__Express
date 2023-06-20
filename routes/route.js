const express = require("express")
const router = express.Router()
const {postDetails,getRequest,getTask,getChainData} = require("../controllers/tasks")
router.route("/").post(postDetails).get(getRequest)
router.route("/:id").get(getTask)
router.route("/chainid/:id").get(getChainData)


module.exports = {
    router
}

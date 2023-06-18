const express = require("express")
const router = express.Router()
const {postDetails,getRequest} = require("../controllers/tasks")
router.route("/").post(postDetails).get(getRequest)

module.exports = {
    router
}
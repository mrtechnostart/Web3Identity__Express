const express = require("express")
const router = express.Router()
const {postDetails} = require("../controllers/tasks")
router.route("/").post(postDetails).get(postDetails)

module.exports = {
    router
}
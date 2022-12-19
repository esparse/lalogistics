const express = require("express")
const {SendReminder} =require("../controller/Reminder_Controller")
const {update} =require("../middleware/d0b")
const router = express.Router()
router.route("/SendReminder").get( SendReminder)
// @url => http://192.168.43.220:37234/api/v1/getStateWithCity
// @method => GET
router.route("/update").get( update)
// @url => http://192.168.43.220:37234/api/v1/update
// @method => GET
module.exports = router
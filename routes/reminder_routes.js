const express = require("express")
const {SendReminder} =require("../controller/Reminder_Controller")
const router = express.Router()
router.route("/SendReminder").get( SendReminder)
// @url => http://192.168.43.220:37234/api/v1/getStateWithCity
// @method => GET



module.exports = router
const express = require("express")
const{CreateDeliveryBoyMappingDetails,getDeliveryBoyMapping,deleteDeliveryBoyMappingDetails,updateDeliveryBoyMappingDetails}=require("../controller/deliveryMapping_controller")
const router = express.Router()
router.route("/CreateDeliveryBoyMappingDetails").post(CreateDeliveryBoyMappingDetails)
// route http://192.168.43.220:5000/api/v1/CreateDeliveryBoyMappingDetails
//method post
router.route("/getDeliveryBoyMapping").get(getDeliveryBoyMapping)
// route http://192.168.43.220:5000/api/v1/getDeliveryBoyMapping
//method get
router.route("/deleteDeliveryBoyMappingDetails/:DeliveryBoyId").delete(deleteDeliveryBoyMappingDetails)
// route http://192.168.43.220:5000/api/v1/deleteDeliveryBoyMappingDetails
//method delete
router.route("/updateDeliveryBoyMappingDetails").put(updateDeliveryBoyMappingDetails)
// route http://192.168.43.220:5000/api/v1/updateDeliveryBoyMappingDetails
//method put


module.exports = router
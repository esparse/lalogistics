const express = require("express")
const{createDeliveryAllocation,getDeliveryAllocation,DeleteDeliveryBoyAllocation,updateDeliveryAllocation}=require("../controller/DeliveryAllocation_controller")
const router = express.Router()
router.route("/createDeliveryAllocation").post(createDeliveryAllocation )
// route http://192.168.43.220:5000/api/v1/createDeliveryAllocation
//method post
router.route("/getDeliveryAllocation").get(getDeliveryAllocation)
// route http://192.168.43.220:5000/api/v1/getDeliveryBoyDetails
//method get
router.route("/DeleteDeliveryBoyAllocation/:DeliveryBoyAllocationId").delete(DeleteDeliveryBoyAllocation)
// route http://192.168.43.220:5000/api/v1/DeleteDeliveryBoyAllocation
//method delete
router.route("/updateDeliveryAllocation").put(updateDeliveryAllocation)
// route http://192.168.43.220:5000/api/v1/updateDeliveryAllocation
//method put


module.exports = router
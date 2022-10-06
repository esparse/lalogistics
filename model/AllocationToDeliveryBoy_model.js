const mongoose = require("mongoose")

const DeliveryBoyAllocationSchema = mongoose.Schema({
    DeliveryBoyAllocationId:{
        type:Number
    },
    BranchId:{
        type:String,
        
    },
    DeliveryBoyId:{
        type:Number,
        
    },
    Date:{
        type:String
    },
    Time:{
        type:String
    },
    Remark:{
        type:String
    }
},{
timestamps:true
})
module.exports = mongoose.model("DeliveryAllocation",DeliveryBoyAllocationSchema)
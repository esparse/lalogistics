const mongoose = require("mongoose")

const deliveryBoyMappingSchema = mongoose.Schema({
    DeliveryBoyMappingId:{
        type:Number
    },
    DeliveryBoyId:{
        type:Number,
        
    },
    lattitude:{
        type:String,
      
    },
    longitude:{
        type:String,
        
    },
},{
timestamps:true
})
module.exports = mongoose.model("deliveryBoyMapping",deliveryBoyMappingSchema)
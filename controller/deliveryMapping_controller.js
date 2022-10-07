const DeliveryBoyMapping =require("../model/deliveryBoyMapping")

exports.CreateDeliveryBoyMappingDetails = async(req,res)=>{
    try {
        const result = await DeliveryBoyMapping.create({
            DeliveryBoyMappingId:Math.floor((Math.random()*100000)+1),
            DeliveryBoyId:req.body.DeliveryBoyId,
            lattitude:req.body.lattitude,
            longitude:req.body.longitude,
           
        })
        res.json({
            success:true,
            message:"Create Delivery Boy Mapping Details",
            data:result
        })
    } catch (error) {
        res.json({
            success:false,
            message:`Something  went wrong `+{error},
            data:null
        })  
    }
}
exports.getDeliveryBoyMapping = async(req,res)=>{
    try {
        const result = await DeliveryBoyMapping.aggregate([
            {
                
                $lookup:{
                    from:'deliveryboys',
                    localField:'DeliveryBoyId',
                    foreignField:'DeliveryBoyId',
                    as:"DeliveryBoy"
                }
            
        },
           
            
        ])
        res.json({
            count:result.length,
            success:true,
            message:"get Delivery Boy Mapping Details",
            data:result
        })
    } catch (error) {
        res.json({
            success:false,
            message:"Something  went wrong",
            data:null
        })  
    }
}
exports.deleteDeliveryBoyMappingDetails = async(req,res)=>{
    try {
        const result = await DeliveryBoyMapping.findOneAndDelete({DeliveryBoyMappingId:req.params.DeliveryBoyMappingId})
        res.json({
            success:true,
            message:"Delete Delivery Boy Mapping Details",
            data:null
        })
    } catch (error) {
        res.json({
            success:false,
            message:"Something  went wrong",
            data:null
        })  
    }
}
exports.updateDeliveryBoyMappingDetails = async(req,res)=>{
    try {
        const result = await DeliveryBoyMapping.findOneAndUpdate({DeliveryBoyMappingId:req.body.DeliveryBoyMappingId},req.body, {
            new: true,
            runValidators: true,})
        res.json({
            success:true,
            message:"update Delivery Boy Mapping by DeliveryBoyMappingId",
            data:result
        })
    } catch (error) {
        res.json({
            success:false,
            message:"Something  went wrong"+error,
            data:null
        })  
    }
}

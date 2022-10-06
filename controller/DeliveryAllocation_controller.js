const DeliveryAllocation = require("../model/AllocationToDeliveryBoy_model")
exports.createDeliveryAllocation = async(req,res)=>{
try {
    const result = await DeliveryAllocation.create({
        DeliveryBoyAllocationId:Math.floor((Math.random()*100000)+1),
        BranchId:req.body.BranchId,
        DeliveryBoyId:req.body.DeliveryBoyId,
        Date:req.body.Date,
        Time:req.body.Time,
        Remark:req.body.Remark,

    })
    res.json({
        success: true,
        message:"Create DeliveryBoy Alloction Successfully",
        data:result
    })
} catch (error) {
    res.json({
        success: false,
        message:`Something Went worng` + {error},
        data:result
    })
}
}
exports.getDeliveryAllocation = async(req,res)=>{
    try {
        const result = await DeliveryAllocation.aggregate([
            {
                $lookup:{
                    from:'officeadmins',
                    localField:'BranchId',
                    foreignField:'BranchId',
                    as:"Branch"
                }
            },  
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
            success: true,
            message:"get Delivery Boy Allocation",
            data:result
        })
    } catch (error) {
        res.json({
            success: false,
            message:`Something Went worng` + {error},
            data:result
        })
    }
    }
exports.DeleteDeliveryBoyAllocation =async(req,res)=>{
try {
    const result = await DeliveryAllocation.findOneAndDelete({DeliveryBoyAllocationId:req.params.DeliveryBoyAllocationId})
    res.json({
        success: true,
        message:"Delete DeliveryBoy Alloction Successfully",
        data:null
    })
} catch  {
    res.json({
        success: true,
        message:"Something went Worng",
        data:null
    })
}
    }
    exports.updateDeliveryAllocation = async(req,res)=>{
        try {
            const result = await DeliveryAllocation.findOneAndUpdate({DeliveryBoyAllocationId:req.body.DeliveryBoyAllocationId},req.body , {
                new: true,
                runValidators: true,})
            res.json({
                success:true,
                message:"update DeliveryBoy Allocation Details",
                data:result
            })
        } catch (error) {
            res.json({
                success:false,
                message:"Something  went wrong"+Error,
                data:null
            })  
        }
    }
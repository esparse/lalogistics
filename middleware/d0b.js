const billing = require("../model/billing_model")
const cron = require('node-cron');

exports.update = async (req,res)=>{
const data = await billing.aggregate([
    {
      $lookup:{
          from:'customers',
          localField:'CustomerId',
          foreignField:'CustomerId',
          as:"Customer"
      }
  },
  {
      $lookup:{
          from:'billingitems',
          localField:'INVOICE',
          foreignField:'INVOICE',
          as:"BillingItem"
      }
  },
//   {
//     $match:{"Customer.Email": "mr.narwade24@gmail.com",}
//   }
  ])
  res.json({result:data})
}

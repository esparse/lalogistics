const cron = require('node-cron');
  const billing1 = require("../model/billing_model")
exports.SendReminder =async(req,res)=>{
  
  cron.schedule(' * * 12 * * *', function()  {
   console.log("hi");
  })
 
}
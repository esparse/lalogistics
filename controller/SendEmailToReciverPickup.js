const pickupDetails = require("../model/PickupDetails_model")
const nodemailer = require("nodemailer")
exports.SendPickupToReciverDetails = async(req,res) =>{
        let result = await pickupDetails.aggregate([
          {
              $lookup:{
                  from:'contents',
                  localField:'ContentId',
                  foreignField:'ContentId',
                  as:"contents"
              }
             
          },
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
                  from:'customers',
                  localField:'ConsignerId',
                  foreignField:'CustomerId',
                  as:"Consigner"
              }
          },
          {
              $lookup:{
                  from:'customers',
                  localField:'ConsigneeId',
                  foreignField:'CustomerId',
                  as:"Consignee"
              }
          },
          {
              $lookup:{
                  from:'cities',
                  localField:'OriginId',
                  foreignField:'Cityid',
                  as:"Origin"
              }
          },
          {
              $lookup:{
                  from:'cities',
                  localField:'DestinationId',
                  foreignField:'Cityid',
                  as:"Destination"
              }
          },
          {
              $lookup:{
                  from:'packagedetails',
                  localField:'RequestedId',
                  foreignField:'RequestedId',
                  as:"PackageDetails"
              }
          },
          {
              $lookup:{
                  from:'allocations',
                  localField:'RequestedId',
                  foreignField:'RequestedId',
                  as:"Allocation"
              }
          },
          {
              $match:{ReceiverEmail:req.body.ReceiverEmail}
          }
      ])    
        const responseType = {};
        if(result){
            var  transporter = nodemailer.createTransport({
              service: "gmail",
              auth: {
                user:"icaet20@nmiet.edu.in",
                pass:"Bonybaba125@",
              },
            });
          var mailOption = {
              from:"icaet20@nmiet.edu.in",
              to :req.body.SenderEmail ,
              subject :"Sample Pickup",
              text:`Subject: ${result[0].contents[0].ContentName} on ${result[0].Date} at ${result[0].Time} from
              ${result[0].Consignee[0].BillingAddress}
            ------------------------------------------------------

            PICKUP Time : ${result[0].PickupTime},
            PACKAGING REQUIRED :   Required ,
            PICKUP LOCATION :${result[0].Consigner[0].BillingAddress}
            CONTACT PERSON NAME :${result[0].PickupRegistered},
            CONTACT PERSON NUMBER :${result[0].PickupRegisteredNumber},
            DELIVERY LOCATION : ${result[0].Customer[0].BillingAddress}

            -------------------------------------------------------

            Thanks & Regards,
            Team- LAlogistics
        `

          }
              transporter.sendMail(mailOption, error => {
                  error
                  ? console.log(`EMAIL NOT SEND ${error}`)
                  : console.log("EMAIL SEND");
                
              });
              responseType.statusText ='Success'
             responseType.message = `Please check Your Email Id`;
            }
            else{
                responseType.statusText ='error'
                responseType.message = 'Email Id not Exit'; 
            }
            res.json(responseType)
   
}
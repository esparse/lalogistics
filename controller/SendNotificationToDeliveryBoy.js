const DeliveryBoy = require("../model/DeliveryBoyDetails_model")
const nodemailer = require("nodemailer");
exports.SendNotificationToDeliveryBoy =async(req,res)=>{
  let data = await DeliveryBoy.findOne({Email:req.body.Email});
  console.log(req.body.Email);
  const responseType = {};
  if(data){
      var  transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user:"icaet20@nmiet.edu.in",
          pass:"Bonybaba125@",
        },
      });
    var mailOption = {
        from:"icaet20@nmiet.edu.in",
        to :req.body.Email ,
        subject :"Alert DeliveryBoy",
        text:``
    }
        transporter.sendMail(mailOption, error => {
            error
            ? console.log(`EMAIL NOT SEND ${error}`)
            : console.log("EMAIL SEND");
          
        });
    
      console.log(otpcode);
      responseType.statusText ='Success'
      responseType.message = `Please check Your Email Id`;

  }
  else{
      responseType.statusText ='error'
      responseType.message = 'Email Id not Exit'; 
  }
 res.json(responseType)
 
}





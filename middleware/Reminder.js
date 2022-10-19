const sgMail = require('@sendgrid/mail');
const env = require("dotenv")
env.config({path:"./config/.env"})
sgMail.setApiKey("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");
const msg = {
  to: 'vipul@sparsematrix.co.in',
  from: 'narwadegovind1@gmail.com',
  subject: 'Sending with Twilio SendGrid is Fun',
  text: 'and easy to do anywhere, even with Node.js',
  html: '<strong>and easy to do anywhere, even with Node.js</strong>',
};
sgMail
  .send(msg)
  .then(() => console.log('send mail success'))
  .catch(console.log);
  
  exports.SendReminder = async(req,res) =>{
   
          
          const responseType = {};
          if(data){
            const msg = {
              to: req.body.Email,
              from: '',
              subject: 'Sending with Twilio SendGrid is Fun',
              text: 'and easy to do anywhere, even with Node.js',
              html: '<strong>and easy to do anywhere, even with Node.js</strong>',
            };
             
           
               
                responseType.statusText ='Success'
               responseType.message = `Please check Your Email Id`;
              }
              else{
                  responseType.statusText ='error'
                  responseType.message = 'Email Id not Exit'; 
              }
              res.json(responseType)
              console.log(responseType);
     
  }
const pickupDetails = require("../model/PickupDetails_model")
const nodemailer = require("nodemailer")
const fs = require("fs")
exports.SendPickupDetails = async(req,res) =>{
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
              $match:{SenderEmail:req.body.SenderEmail}
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
              attachments :[
                {
                    filename: 'mainlogo.png',
                    path:"../SenderImages/mainlogo.png",
                    cid:'mainlogo.ee'
                },
                {
                    filename:'calender.png',
                    Path :"../SenderImages/calender.png",
                    cid:'calender.png.ee'
                },
                {
                    filename:'facebook2x.png',
                    Path :"../SenderImages/facebook2x.png",
                    cid:'facebook2x.png.ee'
                },
                {
                    filename:'twitter2x.png',
                    Path :"../SenderImages/twitter2x.png",
                    cid:'twitter2x.png.ee'
                },
                {
                    filename:'instagram2x.png',
                    Path :"../SenderImages/instagram2x.png",
                    cid:'instagram2x.png.ee'
                },
                {
                    filename:'space.png',
                    Path :"../SenderImages/space.png",
                    cid:'space.png.ee'
                },
                {
                    filename:'esparelogo.jpg',
                    Path :"../SenderImages/esparelogo.jpg",
                    cid:'esparelogo.jpg.ee'
                },
              ],
              html:`<!DOCTYPE html>

              <html lang="en" xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:v="urn:schemas-microsoft-com:vml">
              <head>
              <title></title>
              <meta content="text/html; charset=utf-8" http-equiv="Content-Type"/>
              <meta content="width=device-width, initial-scale=1.0" name="viewport"/>
              <!--[if mso]><xml><o:OfficeDocumentSettings><o:PixelsPerInch>96</o:PixelsPerInch><o:AllowPNG/></o:OfficeDocumentSettings></xml><![endif]-->
              <!--[if !mso]><!-->
              <link href="https://fonts.googleapis.com/css?family=Montserrat" rel="stylesheet" type="text/css"/>
              <!--<![endif]-->
              <style>
                      * {
                          box-sizing: border-box;
                      }
              
                      body {
                          margin: 0;
                          padding: 0;
                      }
              
                      a[x-apple-data-detectors] {
                          color: inherit !important;
                          text-decoration: inherit !important;
                      }
              
                      #MessageViewBody a {
                          color: inherit;
                          text-decoration: none;
                      }
              
                      p {
                          line-height: inherit
                      }
              
                      .desktop_hide,
                      .desktop_hide table {
                          mso-hide: all;
                          display: none;
                          max-height: 0px;
                          overflow: hidden;
                      }
              
                      @media (max-width:700px) {
              
                          .desktop_hide table.icons-inner,
                          .social_block.desktop_hide .social-table {
                              display: inline-block !important;
                          }
              
                          .icons-inner {
                              text-align: center;
                          }
              
                          .icons-inner td {
                              margin: 0 auto;
                          }
              
                          .image_block img.big,
                          .row-content {
                              width: 100% !important;
                          }
              
                          .mobile_hide {
                              display: none;
                          }
              
                          .stack .column {
                              width: 100%;
                              display: block;
                          }
              
                          .mobile_hide {
                              min-height: 0;
                              max-height: 0;
                              max-width: 0;
                              overflow: hidden;
                              font-size: 0px;
                          }
              
                          .desktop_hide,
                          .desktop_hide table {
                              display: table !important;
                              max-height: none !important;
                          }
                      }
                  </style>
              </head>
              <body style="margin: 0; background-color: #000000; padding: 0; -webkit-text-size-adjust: none; text-size-adjust: none;">
              <table border="0" cellpadding="0" cellspacing="0" class="nl-container" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #000000;" width="100%">
              <tbody>
              <tr>
              <td>
              <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-1" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
              <tbody>
              <tr>
              <td>
              <table align="center" border="0" cellpadding="0" cellspacing="0" class="row-content stack" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000000; width: 680px;" width="680">
              <tbody>
              <tr>
              <td class="column column-1" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; padding-top: 0px; padding-bottom: 0px; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;" width="100%">
              <table border="0" cellpadding="0" cellspacing="0" class="image_block block-1" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
              <tr>
              <td class="pad" style="width:100%;padding-right:0px;padding-left:0px;">
              <div align="center" class="alignment" style="line-height:10px"><img src="cid:mainlogo.ee"  alt="Hero Image Placeholder" class="big"  style="display: block; height: auto; border: 0; width: 680px; max-width: 100%;" title="Hero Image Placeholder" width="680"/></div>
              </td>
              </tr>
              </table>
              <table border="0" cellpadding="10" cellspacing="0" class="text_block block-2" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;" width="100%">
              <tr>
              <td class="pad">
              <div style="font-family: sans-serif">
              <div class="" style="font-size: 12px; mso-line-height-alt: 14.399999999999999px; color: #ffffff; line-height: 1.2; font-family: Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif;">
              <p style="margin: 0; font-size: 14px; text-align: center; mso-line-height-alt: 16.8px;"><span style="font-size:30px;"><strong>THANK YOU FOR YOUR PICKUP REQUEST</strong></span></p>
              </div>
              </div>
              </td>
              </tr>
              </table>
              <table border="0" cellpadding="0" cellspacing="0" class="text_block block-4" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;" width="100%">
              <tr>
              <td class="pad" style="padding-bottom:60px;padding-left:25px;padding-right:25px;padding-top:40px;">
              <div style="font-family: sans-serif">
              <div class="" style="font-size: 12px; mso-line-height-alt: 18px; color: #ffffff; line-height: 1.5; font-family: Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif;">
              <p style="margin: 0; mso-line-height-alt: 24px;"><span style="font-size:16px;">Hi  ${result[0].Consignee[0].CustomerName},<br/><br/></span></p>
              <p style="margin: 0; mso-line-height-alt: 24px;"><span style="font-size:16px;">Thanks for your Pickup request - your pickup request  number is ${result[0].RequestedId}.</span><br/><span style="font-size:16px;">Full details of your order can be found below.<br/></span><br/><span style="font-size:16px;"><em>Please note this email cannot be used for entry.</em></span></p>
              </div>
              </div>
              </td>
              </tr>
              </table>
              </td>
              </tr>
              </tbody>
              </table>
              </td>
              </tr>
              </tbody>
              </table>
              <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-2" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
              <tbody>
              <tr>
              <td>
              <table align="center" border="0" cellpadding="0" cellspacing="0" class="row-content stack" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-position: center top; background-repeat: no-repeat; color: #000000; background-color: #000000; background-image: url('../SenderImages/space.png'); width: 680px;" width="680">
              <tbody>
              <tr>
              <td class="column column-1" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; padding-top: 0px; padding-bottom: 0px; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;" width="100%">
              <table border="0" cellpadding="0" cellspacing="0" class="text_block block-1" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;" width="100%">
              <tr>
              <td class="pad" style="padding-bottom:10px;padding-left:25px;padding-right:25px;padding-top:10px;">
              <div style="font-family: sans-serif">
              <div class="" style="font-size: 12px; mso-line-height-alt: 14.399999999999999px; color: #ffffff; line-height: 1.2; font-family: Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif;">
              <p dir="rtl" style="margin: 0; font-size: 14px; text-align: left; mso-line-height-alt: 16.8px;"><span style="font-size:30px;"><strong>PICKUP REQUEST  DETAILS</strong></span></p>
              </div>
              </div>
              </td>
              </tr>
              </table>
              </td>
              </tr>
              </tbody>
              </table>
              </td>
              </tr>
              </tbody>
              </table>
              <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-3" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
              <tbody>
              <tr>
              <td>
              <table align="center" border="0" cellpadding="0" cellspacing="0" class="row-content stack" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000000; width: 680px;" width="680">
              <tbody>
              <tr>
              <td class="column column-1" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; padding-top: 5px; padding-bottom: 5px; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;" width="100%">
              <table border="0" cellpadding="0" cellspacing="0" class="icons_block block-2" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
              <tr>
              <td class="pad" style="vertical-align: middle; color: #ffffff; font-family: 'Montserrat', 'Trebuchet MS', 'Lucida Grande', 'Lucida Sans Unicode', 'Lucida Sans', Tahoma, sans-serif; font-size: 16px; text-align: left; padding-top: 30px;">
              <table cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
              <tr>
              <td class="alignment" style="vertical-align: middle; text-align: left;">
              <!--[if vml]><table align="left" cellpadding="0" cellspacing="0" role="presentation" style="display:inline-block;padding-left:0px;padding-right:0px;mso-table-lspace: 0pt;mso-table-rspace: 0pt;"><![endif]-->
              <!--[if !vml]><!-->
              <table cellpadding="0" cellspacing="0" class="icons-inner" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; display: inline-block; margin-right: -4px; padding-left: 0px; padding-right: 0px;">
              <!--<![endif]-->
              <tr>
              <td style="vertical-align: middle; text-align: center; padding-top: 5px; padding-bottom: 5px; padding-left: 25px; padding-right: 25px;"><img align="center" alt="Calendar Icon" class="icon" height="32" src="cid:calender.ee" style="display: block; height: auto; margin: 0 auto; border: 0;" width="32"/></td>
              <td style="font-family: 'Montserrat', 'Trebuchet MS', 'Lucida Grande', 'Lucida Sans Unicode', 'Lucida Sans', Tahoma, sans-serif; font-size: 16px; color: #ffffff; vertical-align: middle; letter-spacing: undefined; text-align: left;">${result[0].Date} at ${result[0].Time}</td>
              </tr>
              </table>
              </td>
              </tr>
              </table>
              </td>
              </tr>
              </table>
              <table border="0" cellpadding="0" cellspacing="0" class="icons_block block-3" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
              <tr>
              <td class="pad" style="vertical-align: middle; color: #ffffff; font-family: 'Montserrat', 'Trebuchet MS', 'Lucida Grande', 'Lucida Sans Unicode', 'Lucida Sans', Tahoma, sans-serif; font-size: 16px; text-align: left;">
              <table cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
              <tr>
              <td class="alignment" style="vertical-align: middle; text-align: left;">
              <!--[if vml]><table align="left" cellpadding="0" cellspacing="0" role="presentation" style="display:inline-block;padding-left:0px;padding-right:0px;mso-table-lspace: 0pt;mso-table-rspace: 0pt;"><![endif]-->
              <!--[if !vml]><!-->
              <table cellpadding="0" cellspacing="0" class="icons-inner" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; display: inline-block; margin-right: -4px; padding-left: 0px; padding-right: 0px;">
              <!--<![endif]-->
              <tr>
              <td style="vertical-align: middle; text-align: center; padding-top: 5px; padding-bottom: 5px; padding-left: 25px; padding-right: 25px;"><img align="center" alt="Location Icon" class="icon" height="32" src="images/MCC_confirmation_icon_location.png" style="display: block; height: auto; margin: 0 auto; border: 0;" width="32"/></td>
              <td style="font-family: 'Montserrat', 'Trebuchet MS', 'Lucida Grande', 'Lucida Sans Unicode', 'Lucida Sans', Tahoma, sans-serif; font-size: 16px; color: #ffffff; vertical-align: middle; letter-spacing: undefined; text-align: left;">${result[0].Consignee[0].BillingAddress}</td>
              </tr>
              </table>
              </td>
              </tr>
              </table>
              </td>
              </tr>
              </table>
              <table border="0" cellpadding="0" cellspacing="0" class="icons_block block-4" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
              <tr>
              <td class="pad" style="vertical-align: middle; color: #ffffff; font-family: 'Montserrat', 'Trebuchet MS', 'Lucida Grande', 'Lucida Sans Unicode', 'Lucida Sans', Tahoma, sans-serif; font-size: 16px; text-align: left; padding-bottom: 30px;">
              <table cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
              <tr>
              <td class="alignment" style="vertical-align: middle; text-align: left;">
              <!--[if vml]><table align="left" cellpadding="0" cellspacing="0" role="presentation" style="display:inline-block;padding-left:0px;padding-right:0px;mso-table-lspace: 0pt;mso-table-rspace: 0pt;"><![endif]-->
              <!--[if !vml]><!-->
              <table cellpadding="0" cellspacing="0" class="icons-inner" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; display: inline-block; margin-right: -4px; padding-left: 0px; padding-right: 0px;">
              <!--<![endif]-->
              <tr>
              <td style="vertical-align: middle; text-align: center; padding-top: 5px; padding-bottom: 5px; padding-left: 25px; padding-right: 25px;"><img align="center" alt="Ticket Icon" class="icon" height="32" src="images/MCC_confirmation_icon_tickets.png" style="display: block; height: auto; margin: 0 auto; border: 0;" width="32"/></td>
              <td style="font-family: 'Montserrat', 'Trebuchet MS', 'Lucida Grande', 'Lucida Sans Unicode', 'Lucida Sans', Tahoma, sans-serif; font-size: 16px; color: #ffffff; vertical-align: middle; letter-spacing: undefined; text-align: left;">NO OF PARTICULAR</td>
              </tr>
              </table>
              <!--[if vml]><table align="left" cellpadding="0" cellspacing="0" role="presentation" style="display:inline-block;padding-left:0px;padding-right:0px;mso-table-lspace: 0pt;mso-table-rspace: 0pt;"><![endif]-->
              <!--[if !vml]><!-->
              <table cellpadding="0" cellspacing="0" class="icons-inner" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; display: inline-block; margin-right: -4px; padding-left: 0px; padding-right: 0px;">
              <!--<![endif]-->
              <tr>
              <td style="vertical-align: middle; text-align: center; padding-top: 5px; padding-bottom: 5px; padding-left: 25px; padding-right: 25px;"><img align="center" alt="App Icon" class="icon" height="32" src="images/MCC_confirmation_icon_logo.png" style="display: block; height: auto; margin: 0 auto; border: 0;" width="32"/></td>
              <td style="font-family: 'Montserrat', 'Trebuchet MS', 'Lucida Grande', 'Lucida Sans Unicode', 'Lucida Sans', Tahoma, sans-serif; font-size: 16px; color: #ffffff; vertical-align: middle; letter-spacing: undefined; text-align: left;">Mobile Number</td>
              </tr>
              </table>
              </td>
              </tr>
              </table>
              </td>
              </tr>
              </table>
              </td>
              </tr>
              </tbody>
              </table>
              </td>
              </tr>
              </tbody>
              </table>
              <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-4" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
              <tbody>
              <tr>
              <td>
              <table align="center" border="0" cellpadding="0" cellspacing="0" class="row-content stack" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000000; width: 680px;" width="680">
              <tbody>
              <tr>
              <td class="column column-1" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; padding-top: 0px; padding-bottom: 0px; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;" width="100%">
              <table border="0" cellpadding="0" cellspacing="0" class="divider_block block-1" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
              <tr>
              <td class="pad" style="padding-bottom:10px;padding-top:10px;">
              <div align="center" class="alignment">
              <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
              <tr>
              <td class="divider_inner" style="font-size: 1px; line-height: 1px; border-top: 1px solid #3DE6E8;"><span> </span></td>
              </tr>
              </table>
              </div>
              </td>
              </tr>
              </table>
              </td>
              </tr>
              </tbody>
              </table>
              </td>
              </tr>
              </tbody>
              </table>
              <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-5" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
              <tbody>
              <tr>
              <td>
              <table align="center" border="0" cellpadding="0" cellspacing="0" class="row-content stack" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000000; width: 680px;" width="680">
              <tbody>
              <tr>
              <td class="column column-1" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;" width="25%">
              <table border="0" cellpadding="0" cellspacing="0" class="text_block block-2" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;" width="100%">
              <tr>
              <td class="pad" style="padding-bottom:10px;padding-left:25px;padding-right:25px;padding-top:10px;">
              <div style="font-family: sans-serif">
              <div class="" style="font-size: 12px; mso-line-height-alt: 18px; color: #ffffff; line-height: 1.5; font-family: Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif;">
              <p style="margin: 0; mso-line-height-alt: 24px;"><span style="font-size:16px;">Item</span></p>
              </div>
              </div>
              </td>
              </tr>
              </table>
              <table border="0" cellpadding="0" cellspacing="0" class="text_block block-3" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;" width="100%">
              <tr>
              <td class="pad" style="padding-bottom:10px;padding-left:25px;padding-right:25px;">
              <div style="font-family: sans-serif">
              <div class="" style="font-size: 12px; mso-line-height-alt: 18px; color: #ffffff; line-height: 1.5; font-family: Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif;">
              <p style="margin: 0; mso-line-height-alt: 18px;"><strong><span style="font-size:16px;">Regular</span></strong></p>
              </div>
              </div>
              </td>
              </tr>
              </table>
              </td>
              <td class="column column-2" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;" width="25%">
              <table border="0" cellpadding="0" cellspacing="0" class="text_block block-2" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;" width="100%">
              <tr>
              <td class="pad" style="padding-bottom:10px;padding-left:25px;padding-right:25px;padding-top:10px;">
              <div style="font-family: sans-serif">
              <div class="" style="font-size: 12px; mso-line-height-alt: 18px; color: #ffffff; line-height: 1.5; font-family: Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif;">
              <p style="margin: 0; mso-line-height-alt: 24px;"><span style="font-size:16px;">Required Temp</span></p>
              </div>
              </div>
              </td>
              </tr>
              </table>
              <table border="0" cellpadding="0" cellspacing="0" class="text_block block-3" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;" width="100%">
              <tr>
              <td class="pad" style="padding-bottom:10px;padding-left:25px;padding-right:25px;">
              <div style="font-family: sans-serif">
              <div class="" style="font-size: 12px; mso-line-height-alt: 18px; color: #ffffff; line-height: 1.5; font-family: Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif;">
              <p style="margin: 0; mso-line-height-alt: 18px;"><strong><span style="font-size:16px;">107 | 205, 206</span></strong></p>
              </div>
              </div>
              </td>
              </tr>
              </table>
              </td>
              <td class="column column-3" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;" width="25%">
              <table border="0" cellpadding="0" cellspacing="0" class="text_block block-2" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;" width="100%">
              <tr>
              <td class="pad" style="padding-bottom:10px;padding-left:25px;padding-right:25px;padding-top:10px;">
              <div style="font-family: sans-serif">
              <div class="" style="font-size: 12px; mso-line-height-alt: 18px; color: #ffffff; line-height: 1.5; font-family: Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif;">
              <p style="margin: 0; mso-line-height-alt: 24px;"><span style="font-size:16px;">Qty</span></p>
              </div>
              </div>
              </td>
              </tr>
              </table>
              <table border="0" cellpadding="0" cellspacing="0" class="text_block block-3" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;" width="100%">
              <tr>
              <td class="pad" style="padding-bottom:10px;padding-left:25px;padding-right:25px;">
              <div style="font-family: sans-serif">
              <div class="" style="font-size: 12px; mso-line-height-alt: 18px; color: #ffffff; line-height: 1.5; font-family: Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif;">
              <p style="margin: 0; mso-line-height-alt: 18px;"><strong><span style="font-size:16px;">2</span></strong></p>
              </div>
              </div>
              </td>
              </tr>
              </table>
              </td>
              <td class="column column-4" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;" width="25%">
              <table border="0" cellpadding="0" cellspacing="0" class="empty_block block-2" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
              <tr>
              <td class="pad">
              <div></div>
              </td>
              </tr>
              </table>
              </td>
              </tr>
              </tbody>
              </table>
              </td>
              </tr>
              </tbody>
              </table>
              <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-6" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
              <tbody>
              <tr>
              <td>
              <table align="center" border="0" cellpadding="0" cellspacing="0" class="row-content stack" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000000; width: 680px;" width="680">
              <tbody>
              <tr>
              <td class="column column-1" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; padding-top: 0px; padding-bottom: 0px; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;" width="100%">
              <table border="0" cellpadding="0" cellspacing="0" class="divider_block block-1" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
              <tr>
              <td class="pad" style="padding-bottom:10px;padding-top:10px;">
              <div align="center" class="alignment">
              <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
              <tr>
              <td class="divider_inner" style="font-size: 1px; line-height: 1px; border-top: 1px solid #3DE6E8;"><span> ${result[0].Consignee[0].Mobile }</span></td>
              </tr>
              </table>
              </div>
              </td>
              </tr>
              </table>
              </td>
              </tr>
              </tbody>
              </table>
              </td>
              </tr>
              </tbody>
              </table>
              <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-7" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
              <tbody>
              <tr>
              <td>
              <table align="center" border="0" cellpadding="0" cellspacing="0" class="row-content stack" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000000; width: 680px;" width="680">
              <tbody>
              <tr>
              <td class="column column-1" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; padding-top: 5px; padding-bottom: 5px; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;" width="100%">
              <div class="spacer_block" style="height:50px;line-height:50px;font-size:1px;"> </div>
              </td>
              </tr>
              </tbody>
              </table>
              </td>
              </tr>
              </tbody>
              </table>
              <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-8" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
              <tbody>
              <tr>
              <td>
              <table align="center" border="0" cellpadding="0" cellspacing="0" class="row-content stack" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000000; width: 680px;" width="680">
              <tbody>
              <tr>
              <td class="column column-1" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;" width="75%">
              <div class="spacer_block" style="height:30px;line-height:0px;font-size:1px;"> </div>
              </td>
              <td class="column column-2" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;" width="25%">
              <div class="spacer_block" style="height:30px;line-height:0px;font-size:1px;"> </div>
              </td>
              </tr>
              </tbody>
              </table>
              </td>
              </tr>
              </tbody>
              </table>
              <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-9" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
              <tbody>
              <tr>
              <td>
              <table align="center" border="0" cellpadding="0" cellspacing="0" class="row-content stack" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-position: center top; background-repeat: no-repeat; color: #000000; background-color: #000000; background-image: url('images/MCC_confirmation_additionalinformation_bg.png'); width: 680px;" width="680">
              <tbody>
              <tr>
              <td class="column column-1" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; padding-top: 5px; padding-bottom: 5px; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;" width="100%">
              <table border="0" cellpadding="0" cellspacing="0" class="text_block block-1" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;" width="100%">
              <tr>
              <td class="pad" style="padding-bottom:10px;padding-left:25px;padding-right:25px;padding-top:10px;">
              <div style="font-family: sans-serif">
              <div class="" style="font-size: 12px; mso-line-height-alt: 14.399999999999999px; color: #ffffff; line-height: 1.2; font-family: Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif;">
              <p dir="rtl" style="margin: 0; font-size: 14px; text-align: left; mso-line-height-alt: 16.8px;"><span style="font-size:30px;"><strong>ADDITIONAL INFORMATION</strong></span></p>
              </div>
              </div>
              </td>
              </tr>
              </table>
              </td>
              </tr>
              </tbody>
              </table>
              </td>
              </tr>
              </tbody>
              </table>
              <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-10" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
              <tbody>
              <tr>
              <td>
              <table align="center" border="0" cellpadding="0" cellspacing="0" class="row-content stack" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000000; width: 680px;" width="680">
              <tbody>
              <tr>
              <td class="column column-1" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; padding-top: 5px; padding-bottom: 5px; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;" width="100%">
              <table border="0" cellpadding="0" cellspacing="0" class="text_block block-2" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;" width="100%">
              <tr>
              <td class="pad" style="padding-bottom:5px;padding-left:25px;padding-right:25px;padding-top:35px;">
              <div style="font-family: sans-serif">
              <div class="" style="font-size: 12px; mso-line-height-alt: 18px; color: #ffffff; line-height: 1.5; font-family: Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif;">
              <p style="margin: 0; mso-line-height-alt: 18px;"> </p>
              </div>
              </div>
              </td>
              </tr>
              </table>
              <table border="0" cellpadding="0" cellspacing="0" class="text_block block-3" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;" width="100%">
              <tr>
              <td class="pad" style="padding-bottom:10px;padding-left:25px;padding-right:25px;padding-top:10px;">
              <div style="font-family: sans-serif">
              <div class="" style="font-size: 12px; mso-line-height-alt: 18px; color: #ffffff; line-height: 1.5; font-family: Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif;">
              <p style="margin: 0; mso-line-height-alt: 24px;"><span style="font-size:16px;">For additional information about the venue arena, please visit the <br/>website at www.lalogistics.co.in<br/></span><span style="font-size:16px;"><br/></span></p>
              </div>
              </div>
              </td>
              </tr>
              </table>
              <table border="0" cellpadding="0" cellspacing="0" class="text_block block-4" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;" width="100%">
              <tr>
              <td class="pad" style="padding-bottom:5px;padding-left:25px;padding-right:25px;padding-top:5px;">
              <div style="font-family: sans-serif">
              <div class="" style="font-size: 12px; mso-line-height-alt: 18px; color: #ffffff; line-height: 1.5; font-family: Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif;">
              <p style="margin: 0; mso-line-height-alt: 18px;"><strong><span style="font-size:16px;">CUSTOMER SUPPORT</span></strong></p>
              </div>
              </div>
              </td>
              </tr>
              </table>
              <table border="0" cellpadding="0" cellspacing="0" class="text_block block-5" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;" width="100%">
              <tr>
              <td class="pad" style="padding-bottom:10px;padding-left:25px;padding-right:25px;padding-top:10px;">
              <div style="font-family: sans-serif">
              <div class="" style="font-size: 12px; mso-line-height-alt: 18px; color: #ffffff; line-height: 1.5; font-family: Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif;">
              <p style="margin: 0; mso-line-height-alt: 24px;"><span style="font-size:16px;">If you have not received your reference number 3 days prior to the event or if you would like to speak with a member of our Team, please contact us .<br/></span></p>
              </div>
              </div>
              </td>
              </tr>
              </table>
              </td>
              </tr>
              </tbody>
              </table>
              </td>
              </tr>
              </tbody>
              </table>
              <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-11" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
              <tbody>
              <tr>
              <td>
              <table align="center" border="0" cellpadding="0" cellspacing="0" class="row-content stack" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000000; width: 680px;" width="680">
              <tbody>
              <tr>
              <td class="column column-1" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; padding-top: 5px; padding-bottom: 5px; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;" width="100%">
              <div class="spacer_block" style="height:50px;line-height:50px;font-size:1px;"> </div>
              </td>
              </tr>
              </tbody>
              </table>
              </td>
              </tr>
              </tbody>
              </table>
              <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-12" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
              <tbody>
              <tr>
              <td>
              <table align="center" border="0" cellpadding="0" cellspacing="0" class="row-content stack" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #000000; color: #000000; width: 680px;" width="680">
              <tbody>
              <tr>
              <td class="column column-1" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; padding-top: 0px; padding-bottom: 0px; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;" width="100%">
              <table border="0" cellpadding="0" cellspacing="0" class="image_block block-1" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
              <tr>
              <td class="pad" style="width:100%;padding-right:0px;padding-left:0px;">
              <div align="center" class="alignment" style="line-height:10px"><img alt="Your Logo Placeholder" src="cid:esparelogo.jpg.ee" style="display: block; height: auto; border: 0; width: 136px; max-width: 100%;" title="Your Logo Placeholder" width="136"/></div>
              </td>
              </tr>
              </table>
              <table border="0" cellpadding="10" cellspacing="0" class="social_block block-2" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
              <tr>
              <td class="pad">
              <div class="alignment" style="text-align:center;">
              <table border="0" cellpadding="0" cellspacing="0" class="social-table" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; display: inline-block;" width="108px">
              <tr>
              <td style="padding:0 2px 0 2px;"><a href="https://www.example.com" target="_blank"><img alt="Facebook" height="32" src="cid:facebook2x.png.ee" style="display: block; height: auto; border: 0;" title="facebook" width="32"/></a></td>
              <td style="padding:0 2px 0 2px;"><a href="https://www.example.com" target="_blank"><img alt="Twitter" height="32" src="cid:twitter2x.png.ee" style="display: block; height: auto; border: 0;" title="twitter" width="32"/></a></td>
              <td style="padding:0 2px 0 2px;"><a href="https://www.example.com" target="_blank"><img alt="Instagram" height="32" src="cid:instagram2x.png.ee" style="display: block; height: auto; border: 0;" title="instagram" width="32"/></a></td>
              </tr>
              </table>
              </div>
              </td>
              </tr>
              </table>
              <table border="0" cellpadding="0" cellspacing="0" class="text_block block-3" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;" width="100%">
              <tr>
              <td class="pad" style="padding-left:30px;padding-right:30px;">
              <div style="font-family: sans-serif">
              <div class="" style="font-size: 12px; mso-line-height-alt: 14.399999999999999px; color: #ffffff; line-height: 1.2; font-family: Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif;">
              <p style="margin: 0; font-size: 14px; text-align: center; mso-line-height-alt: 16.8px;"><span style="font-size:26px;"><strong>LA LOGISTIC PVT LTD</strong></span></p>
              </div>
              </div>
              </td>
              </tr>
              </table>
              <table border="0" cellpadding="0" cellspacing="0" class="text_block block-5" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;" width="100%">
              <tr>
              <td class="pad" style="padding-left:30px;padding-right:30px;padding-top:30px;padding-bottom:50px;">
              <div style="font-family: sans-serif">
              <div class="" style="font-size: 12px; mso-line-height-alt: 14.399999999999999px; color: #ffffff; line-height: 1.2; font-family: Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif;">
              <p style="margin: 0; font-size: 12px; mso-line-height-alt: 14.399999999999999px;"> </p>
              </div>
              </div>
              </td>
              </tr>
              </table>
              </td>
              </tr>
              </tbody>
              </table>
              </td>
              </tr>
              </tbody>
              </table>
              <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-13" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
              <tbody>
              <tr>
              <td>
              <table align="center" border="0" cellpadding="0" cellspacing="0" class="row-content stack" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000000; width: 680px;" width="680">
              <tbody>
              <tr>
              <td class="column column-1" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; padding-top: 5px; padding-bottom: 5px; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;" width="100%">
              <table border="0" cellpadding="0" cellspacing="0" class="icons_block block-1" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
              <tr>
              <td class="pad" style="vertical-align: middle; color: #9d9d9d; font-family: inherit; font-size: 15px; padding-bottom: 5px; padding-top: 5px; text-align: center;">
              <table cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
              <tr>
              <td class="alignment" style="vertical-align: middle; text-align: center;">
              <!--[if vml]><table align="left" cellpadding="0" cellspacing="0" role="presentation" style="display:inline-block;padding-left:0px;padding-right:0px;mso-table-lspace: 0pt;mso-table-rspace: 0pt;"><![endif]-->
              <!--[if !vml]><!-->
              <table cellpadding="0" cellspacing="0" class="icons-inner" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; display: inline-block; margin-right: -4px; padding-left: 0px; padding-right: 0px;">
              <!--<![endif]-->
              <tr>
              <td style="vertical-align: middle; text-align: center; padding-top: 5px; padding-bottom: 5px; padding-left: 5px; padding-right: 6px;"><a href="https://www.designedwithbee.com/" style="text-decoration: none;" target="_blank"><img align="center" alt="Designed with BEE" class="icon" height="32" src="images/bee.png" style="display: block; height: auto; margin: 0 auto; border: 0;" width="34"/></a></td>
              <td style="font-family: Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif; font-size: 15px; color: #9d9d9d; vertical-align: middle; letter-spacing: undefined; text-align: center;"><a href="https://www.designedwithbee.com/" style="color: #9d9d9d; text-decoration: none;" target="_blank">Designed with BEE</a></td>
              </tr>
              </table>
              </td>
              </tr>
              </table>
              </td>
              </tr>
              </table>
              </td>
              </tr>
              </tbody>
              </table>
              </td>
              </tr>
              </tbody>
              </table>
              </td>
              </tr>
              </tbody>
              </table><!-- End -->
              </body>
              </html>
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
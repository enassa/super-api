const path = require("path");
const { appName, appEmail } = require("../../config/api-variables");

const getRegisterationTemplate = (
  confirmUrl,
  appUrl = "https://www.koinovoter.web.app"
) => {
  const applogo =
    "https://firebasestorage.googleapis.com/v0/b/koinovote-361416.appspot.com/o/emailtemplateimages%2Fapplogowhite.png?alt=media&token=29b942e8-ecfc-429e-bfea-fa4d2e0379e7";
  const facebookImg =
    "https://firebasestorage.googleapis.com/v0/b/koinovote-361416.appspot.com/o/emailtemplateimages%2Ffacebook.png?alt=media&token=6a755bdb-1104-4da6-a0b2-c4bfdddc807e";
  const hifiveImg =
    "https://firebasestorage.googleapis.com/v0/b/koinovote-361416.appspot.com/o/emailtemplateimages%2Fhifive.png?alt=media&token=82ccf551-3ad3-4c5d-97b6-c7885e86cae1";
  const whatsapp =
    "https://firebasestorage.googleapis.com/v0/b/koinovote-361416.appspot.com/o/emailtemplateimages%2Fwhatsapp.png?alt=media&token=6c31ffd2-5e15-4896-999e-9b8105a9ef45";
  const facebookUrl = "https://web.facebook.com/profile.php?id=100009019927936";
  const whatsappUrl = "wa.me/+233501595639";
  return `<!DOCTYPE HTML PUBLIC "-//W3C//DTD XHTML 1.0 Transitional //EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
<head>
<!--[if gte mso 9]>
<xml>
  <o:OfficeDocumentSettings>
    <o:AllowPNG/>
    <o:PixelsPerInch>96</o:PixelsPerInch>
  </o:OfficeDocumentSettings>
</xml>
<![endif]-->
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="x-apple-disable-message-reformatting">
  <!--[if !mso]><!--><meta http-equiv="X-UA-Compatible" content="IE=edge"><!--<![endif]-->
  <title></title>
  
    <style type="text/css">
      @media only screen and (min-width: 620px) {
  .u-row {
    width: 600px !important;
  }
  .u-row .u-col {
    vertical-align: top;
  }

  .u-row .u-col-100 {
    width: 600px !important;
  }

}

@media (max-width: 620px) {
  .u-row-container {
    max-width: 100% !important;
    padding-left: 0px !important;
    padding-right: 0px !important;
  }
  .u-row .u-col {
    min-width: 320px !important;
    max-width: 100% !important;
    display: block !important;
  }
  .u-row {
    width: calc(100% - 40px) !important;
  }
  .u-col {
    width: 100% !important;
  }
  .u-col > div {
    margin: 0 auto;
  }
}
body {
  margin: 0;
  padding: 0;
}

table,
tr,
td {
  vertical-align: top;
  border-collapse: collapse;
}

p {
  margin: 0;
}

.ie-container table,
.mso-container table {
  table-layout: fixed;
}

* {
  line-height: inherit;
}

a[x-apple-data-detectors='true'] {
  color: inherit !important;
  text-decoration: none !important;
}

@media (max-width: 480px) {
  .hide-mobile {
    max-height: 0px;
    overflow: hidden;
    display: none !important;
  }
}

table, td { color: #000000; } #u_body a { color: #0000ee; text-decoration: underline; } @media (max-width: 480px) { #u_content_image_1 .v-container-padding-padding { padding: 4px 10px 0px !important; } #u_content_image_1 .v-src-width { width: auto !important; } #u_content_image_1 .v-src-max-width { max-width: 100% !important; } #u_content_image_2 .v-container-padding-padding { padding: 80px 10px 0px !important; } #u_content_image_2 .v-src-width { width: auto !important; } #u_content_image_2 .v-src-max-width { max-width: 100% !important; } #u_content_heading_1 .v-font-size { font-size: 18px !important; } #u_content_text_1 .v-container-padding-padding { padding: 10px !important; } #u_content_button_1 .v-size-width { width: 45% !important; } #u_content_text_3 .v-container-padding-padding { padding: 60px 20px 10px !important; } #u_content_text_3 .v-line-height { line-height: 170% !important; } #u_content_menu_1 .v-padding { padding: 5px 10px !important; } #u_content_text_4 .v-container-padding-padding { padding: 10px 20px 60px !important; } #u_content_text_4 .v-line-height { line-height: 170% !important; } }
    </style>
  
  

<!--[if !mso]><!--><link href="https://fonts.googleapis.com/css?family=Montserrat:400,700&display=swap" rel="stylesheet" type="text/css"><!--<![endif]-->

</head>

<body class="clean-body u_body" style="margin: 0;padding: 0;-webkit-text-size-adjust: 100%;background-color: #f9f9f9;color: #000000">
  <!--[if IE]><div class="ie-container"><![endif]-->
  <!--[if mso]><div class="mso-container"><![endif]-->
  <table id="u_body" style="border-collapse: collapse;table-layout: fixed;border-spacing: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;vertical-align: top;min-width: 320px;Margin: 0 auto;background-color: #e7e7e7;width:100%" cellpadding="0" cellspacing="0">
  <tbody>
  <tr style="vertical-align: top">
    <td style="word-break: break-word;border-collapse: collapse !important;vertical-align: top">
    <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td align="center" style="background-color: #f9f9f9;"><![endif]-->



<div class="u-row-container" style="padding: 0px;background-color: white; box-shadow:0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%);">
  <div class="u-row" style="Margin: 0 auto;min-width: 320px;max-width: 600px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: transparent;">
    <div style="border-collapse: collapse;display: table;width: 100%;height: 100%;background-color: transparent;">
      <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:600px;"><tr style="background-color: transparent;"><![endif]-->
      
<!--[if (mso)|(IE)]><td align="center" width="600" style="background-color: #ffffff;width: 600px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;" valign="top"><![endif]-->
<div class="u-col u-col-100" style="max-width: 320px;min-width: 600px;display: table-cell;vertical-align: top;">
  <div style="background-color: #ffffff;height: 100%;width: 100% !important; margin-top:100px">
  <!--[if (!mso)&(!IE)]><!--><div style="height: 100%; padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;"><!--<![endif]-->
  <table id="u_content_image_1" style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
  <tbody>
    <tr>
      <td class="v-container-padding-padding" style="overflow-wrap:break-word;word-break:break-word;padding:4px 0px 0px;font-family:arial,helvetica,sans-serif;background-color:#4B0082" align="left">
        
<table width="100%" cellpadding="0" cellspacing="0" border="0">
  <tr>
    <td style="padding-right: 0px;padding-left: 0px; margin-left:70px; padding-bottom:10px" align="center">
      &nbsp; &nbsp; &nbsp;
      <div style="display:inline-flex; align-items:center; margin-top"20px">
      <img align="left" border="0" src="${applogo}" alt="image" title="image" style="outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;clear: both;display: inline-block !important;border: none;height: auto;float: none;width: 5%;max-width: 80pxpx; margin-right:10px" width="144" class="v-src-width v-src-max-width"/>
      <div style="font-size:25px;color:white;">
       <span>Koino<b>Voter</b></span>
      </div>
      </div>
    </td>
  </tr>
</table>
      </td>
    </tr>
  </tbody>
</table>
<table id="u_content_image_2" style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
  <tbody>
    <tr>
      <td class="v-container-padding-padding" style="overflow-wrap:break-word;word-break:break-word;padding:80px 0px 0px;font-family:arial,helvetica,sans-serif;" align="left">
        
<table width="100%" cellpadding="0" cellspacing="0" border="0">
  <tr>
    <td style="padding-right: 0px;padding-left: 0px;" align="center">
      
      <img align="center" border="0" src="${hifiveImg}" alt="image" title="image" style="outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;clear: both;display: inline-block !important;border: none;height: auto;float: none;width: 65%;max-width: 390px;" width="390" class="v-src-width v-src-max-width"/>
      
    </td>
  </tr>
</table>

      </td>
    </tr>
  </tbody>
</table>

  <!--[if (!mso)&(!IE)]><!--></div><!--<![endif]-->
  </div>
</div>
<!--[if (mso)|(IE)]></td><![endif]-->
      <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
    </div>
  </div>
</div>



<div class="u-row-container" style="padding: 0px;background-color: transparent">
  <div class="u-row" style="Margin: 0 auto;min-width: 320px;max-width: 600px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: transparent;">
    <div style="border-collapse: collapse;display: table;width: 100%;height: 100%;background-color: transparent;">
      <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:600px;"><tr style="background-color: transparent;"><![endif]-->
      
<!--[if (mso)|(IE)]><td align="center" width="600" style="background-color: #ffffff;width: 600px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;" valign="top"><![endif]-->
<div class="u-col u-col-100" style="max-width: 320px;min-width: 600px;display: table-cell;vertical-align: top;">
  <div style="background-color: #ffffff;height: 100%;width: 100% !important;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;">
  <!--[if (!mso)&(!IE)]><!--><div style="height: 100%; padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;"><!--<![endif]-->
  
<table id="u_content_heading_1" style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
  <tbody>
    <tr>
      <td class="v-container-padding-padding" style="overflow-wrap:break-word;word-break:break-word;padding:60px 10px 10px;font-family:arial,helvetica,sans-serif;" align="left">
        
  <h1 class="v-line-height v-font-size" style="margin: 0px; color: #2F2E41; line-height: 130%; text-align: center; word-wrap: break-word; font-weight: normal; font-family: 'Montserrat',sans-serif; font-size: 24px;">
    <div>
<div><strong>Great!! You are just a step away.<br />Click the confirm button to complete your <br />registration!</strong></div>
</div>
  </h1>

      </td>
    </tr>
  </tbody>
</table>

<table id="u_content_text_1" style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
  <tbody>
    <tr>
      <td class="v-container-padding-padding" style="overflow-wrap:break-word;word-break:break-word;padding:10px 80px;font-family:arial,helvetica,sans-serif;" align="left">
        
  <div class="v-line-height" style="line-height: 170%; text-align: center; word-wrap: break-word;">
    <p style="font-size: 14px; line-height: 170%;">
    <span style="color: #; font-size: 14px; line-height: 23.8px;">
     KoinoVote
     </span> is the first of it's kind in terms of simplicity, security and speed. We burried manual counting of votes yesterday😎. Let's keep it in the grave.</p>
  </div>

      </td>
    </tr>
  </tbody>
</table>

<table id="u_content_button_1" style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
  <tbody>
    <tr>
      <td class="v-container-padding-padding" style="overflow-wrap:break-word;word-break:break-word;padding:10px 10px 40px;font-family:arial,helvetica,sans-serif;" align="left">
        
<div align="center">
  <!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0" style="border-spacing: 0; border-collapse: collapse; mso-table-lspace:0pt; mso-table-rspace:0pt;font-family:arial,helvetica,sans-serif;"><tr><td style="font-family:arial,helvetica,sans-serif;" align="center"><v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href="${appUrl}" style="height:37px; v-text-anchor:middle; width:174px;" arcsize="11%" stroke="f" fillcolor="#6C63FF"><w:anchorlock/><center style="color:#FFFFFF;font-family:arial,helvetica,sans-serif;"><![endif]-->
    <a href="${confirmUrl}" target="_blank" class="v-size-width" style="box-sizing: border-box;display: inline-block;font-family:arial,helvetica,sans-serif;text-decoration: none;-webkit-text-size-adjust: none;text-align: center;color: #FFFFFF; background-color: #4B0082; border-radius: 50px;-webkit-border-radius: 4px; -moz-border-radius: 4px; width:30%; max-width:100%; overflow-wrap: break-word; word-break: break-word; word-wrap:break-word; mso-border-alt: none;">
      <span class="v-line-height v-padding" style="display:block;padding:10px 20px;line-height:120%;"><p style="font-size: 14px; line-height: 120%;"><span style="font-size: 14px; line-height: 16.8px; background-color:#4B0082;border-radius:50px ">Confirm</span></p></span>
    </a>
  <!--[if mso]></center></v:roundrect></td></tr></table><![endif]-->
</div>
      </td>
    </tr>
  </tbody>
</table>

  <!--[if (!mso)&(!IE)]><!--></div><!--<![endif]-->
  </div>
</div>
<!--[if (mso)|(IE)]></td><![endif]-->
      <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
    </div>
  </div>
</div>



<div class="u-row-container" style="padding: 0px;background-color: transparent">
  <div class="u-row" style="Margin: 0 auto;min-width: 320px;max-width: 600px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: transparent;">
    <div style="border-collapse: collapse;display: table;width: 100%;height: 100%;background-color: transparent;">
      <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:600px;"><tr style="background-color: transparent;"><![endif]-->
      
<!--[if (mso)|(IE)]><td align="center" width="600" style="width: 600px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;" valign="top"><![endif]-->
<div class="u-col u-col-100" style="max-width: 320px;min-width: 600px;display: table-cell;vertical-align: top;">
  <div style="height: 100%;width: 100% !important;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;">
  <!--[if (!mso)&(!IE)]><!--><div style="height: 100%; padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;"><!--<![endif]-->
  
<table id="u_content_text_3" style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
  <tbody>
    <tr>
      <td class="v-container-padding-padding" style="overflow-wrap:break-word;word-break:break-word;padding:60px 50px 10px;font-family:arial,helvetica,sans-serif;" align="left">
        
  <div class="v-line-height" style="line-height: 170%; text-align: center; word-wrap: break-word;">
    <p style="font-size: 14px; line-height: 170%;">If you have any questions, please email us at ${appEmail} or visit our FAQS, you can also chat with a reel live human during our operating hours. They can answer questions about your account</p>
  </div>

      </td>
    </tr>
  </tbody>
</table>

<table style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
  <tbody>
    <tr>
      <td class="v-container-padding-padding" style="overflow-wrap:break-word;word-break:break-word;padding:20px;font-family:arial,helvetica,sans-serif;" align="left">
        
  <table height="0px" align="center" border="0" cellpadding="0" cellspacing="0" width="41%" style="border-collapse: collapse;table-layout: fixed;border-spacing: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;vertical-align: top;border-top: 1px solid #000000;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%">
    <tbody>
      <tr style="vertical-align: top">
        <td style="word-break: break-word;border-collapse: collapse !important;vertical-align: top;font-size: 0px;line-height: 0px;mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%">
          <span>&#160;</span>
        </td>
      </tr>
    </tbody>
  </table>

      </td>
    </tr>
  </tbody>
</table>

<table style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
  <tbody>
    <tr>
      <td class="v-container-padding-padding" style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:arial,helvetica,sans-serif;" align="left">
        
<div align="center">
  <div style="display: table; max-width:93px;">
  <!--[if (mso)|(IE)]><table width="93" cellpadding="0" cellspacing="0" border="0"><tr><td style="border-collapse:collapse;" align="center"><table width="100%" cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse; mso-table-lspace: 0pt;mso-table-rspace: 0pt; width:93px;"><tr><![endif]-->
  
    
    <!--[if (mso)|(IE)]><td width="32" style="width:32px; padding-right: 15px;" valign="top"><![endif]-->
    <table align="left" border="0" cellspacing="0" cellpadding="0" width="32" height="32" style="width: 32px !important;height: 32px !important;display: inline-block;border-collapse: collapse;table-layout: fixed;border-spacing: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;vertical-align: top;margin-right: 15px">
      <tbody><tr style="vertical-align: top"><td align="left" valign="middle" style="word-break: break-word;border-collapse: collapse !important;vertical-align: top">
        <a href="$${facebookUrl}" title="Facebook" target="_blank">
          <img src="${facebookImg}" alt="Facebook" title="Facebook" width="32" style="outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;clear: both;display: block !important;border: none;height: auto;float: none;max-width: 32px !important">
        </a>
      </td></tr>
    </tbody></table>
    <!--[if (mso)|(IE)]></td><![endif]-->
    
    <!--[if (mso)|(IE)]><td width="32" style="width:32px; padding-right: 0px;" valign="top"><![endif]-->
    <table align="left" border="0" cellspacing="0" cellpadding="0" width="32" height="32" style="width: 32px !important;height: 32px !important;display: inline-block;border-collapse: collapse;table-layout: fixed;border-spacing: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;vertical-align: top;margin-right: 0px">
      <tbody><tr style="vertical-align: top"><td align="left" valign="middle" style="word-break: break-word;border-collapse: collapse !important;vertical-align: top">
        <a  href="$${whatsappUrl}" title="WhatsApp" target="_blank">
          <img src="${whatsapp}" alt="WhatsApp" title="WhatsApp" width="32" style="outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;clear: both;display: block !important;border: none;height: auto;float: none;max-width: 32px !important">
        </a>
      </td></tr>
    </tbody></table>
    <!--[if (mso)|(IE)]></td><![endif]-->
    
    
    <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
  </div>
</div>

      </td>
    </tr>
  </tbody>
</table>

<table id="u_content_menu_1" style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
  <tbody>
    <tr>
      <td class="v-container-padding-padding" style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:arial,helvetica,sans-serif;" align="left">
        
<div class="menu" style="text-align:center">
<!--[if (mso)|(IE)]><table role="presentation" border="0" cellpadding="0" cellspacing="0" align="center"><tr><![endif]-->

  <!--[if (mso)|(IE)]><td style="padding:5px 15px"><![endif]-->
  
    <a href="${appUrl}" target="_blank" style="padding:5px 15px;display:inline-block;color:#000000;font-family:arial,helvetica,sans-serif;font-size:14px;text-decoration:none"  class="v-padding v-font-size">
      Home
    </a>
  
  <!--[if (mso)|(IE)]></td><![endif]-->
  
    <!--[if (mso)|(IE)]><td style="padding:5px 15px"><![endif]-->
    <span style="padding:5px 15px;display:inline-block;color:#000000;font-family:arial,helvetica,sans-serif;font-size:14px" class="v-padding v-font-size hide-mobile">
      |
    </span>
    <!--[if (mso)|(IE)]></td><![endif]-->
  

  <!--[if (mso)|(IE)]><td style="padding:5px 15px"><![endif]-->
  
    <a href="${appUrl}" target="_blank" style="padding:5px 15px;display:inline-block;color:#000000;font-family:arial,helvetica,sans-serif;font-size:14px;text-decoration:none"  class="v-padding v-font-size">
      Page
    </a>
  
  <!--[if (mso)|(IE)]></td><![endif]-->
  
    <!--[if (mso)|(IE)]><td style="padding:5px 15px"><![endif]-->
    <span style="padding:5px 15px;display:inline-block;color:#000000;font-family:arial,helvetica,sans-serif;font-size:14px" class="v-padding v-font-size hide-mobile">
      |
    </span>
    <!--[if (mso)|(IE)]></td><![endif]-->
  

  <!--[if (mso)|(IE)]><td style="padding:5px 15px"><![endif]-->
  
    <a href="${appUrl}" target="_blank" style="padding:5px 15px;display:inline-block;color:#000000;font-family:arial,helvetica,sans-serif;font-size:14px;text-decoration:none"  class="v-padding v-font-size">
      About Us
    </a>
  
  <!--[if (mso)|(IE)]></td><![endif]-->
  
    <!--[if (mso)|(IE)]><td style="padding:5px 15px"><![endif]-->
    <span style="padding:5px 15px;display:inline-block;color:#000000;font-family:arial,helvetica,sans-serif;font-size:14px" class="v-padding v-font-size hide-mobile">
      |
    </span>
    <!--[if (mso)|(IE)]></td><![endif]-->
  

  <!--[if (mso)|(IE)]><td style="padding:5px 15px"><![endif]-->
  
    <a href="https://wa.me/+233501595639" target="_blank" style="padding:5px 15px;display:inline-block;color:#000000;font-family:arial,helvetica,sans-serif;font-size:14px;text-decoration:none"  class="v-padding v-font-size">
      Contact Us
    </a>
  
  <!--[if (mso)|(IE)]></td><![endif]-->
  

<!--[if (mso)|(IE)]></tr></table><![endif]-->
</div>

      </td>
    </tr>
  </tbody>
</table>

<table id="u_content_text_4" style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
  <tbody>
    <tr>
      <td class="v-container-padding-padding" style="overflow-wrap:break-word;word-break:break-word;padding:10px 60px 60px;font-family:arial,helvetica,sans-serif;" align="left">
        
  <div class="v-line-height" style="line-height: 170%; text-align: center; word-wrap: break-word;">
    <p style="font-size: 14px; line-height: 170%;">You have received this email because you filled a form to register an account with <a rel="noopener" href="https://www.koinovoter.web.app" target="_blank">KoinoVote.</a> If this is not true or does not sense to you, please ignore this mail.</p>
  </div>

      </td>
    </tr>
  </tbody>
</table>

  <!--[if (!mso)&(!IE)]><!--></div><!--<![endif]-->
  </div>
</div>
<!--[if (mso)|(IE)]></td><![endif]-->
      <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
    </div>
  </div>
</div>


    <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
    </td>
  </tr>
  </tbody>
  </table>
  <!--[if mso]></div><![endif]-->
  <!--[if IE]></div><![endif]-->
</body>

</html>
`;

  // ############################################------Paswword reset template----################
};
const getResetPasswordtemplate = (
  resetUrl,
  appUrl = "https://www.koinovoter.web.app"
) => {
  const applogo =
    "https://firebasestorage.googleapis.com/v0/b/koinovote-361416.appspot.com/o/emailtemplateimages%2Fapplogowhite.png?alt=media&token=29b942e8-ecfc-429e-bfea-fa4d2e0379e7";
  const facebookImg =
    "https://firebasestorage.googleapis.com/v0/b/koinovote-361416.appspot.com/o/emailtemplateimages%2Ffacebook.png?alt=media&token=6a755bdb-1104-4da6-a0b2-c4bfdddc807e";
  const middleImage =
    "https://firebasestorage.googleapis.com/v0/b/koinovote-361416.appspot.com/o/emailtemplateimages%2Fpasswordreset2.png?alt=media&token=a3612963-73bf-41a0-ae42-19848fd5c4f2";
  const whatsapp =
    "https://firebasestorage.googleapis.com/v0/b/koinovote-361416.appspot.com/o/emailtemplateimages%2Fwhatsapp.png?alt=media&token=6c31ffd2-5e15-4896-999e-9b8105a9ef45";
  const facebookUrl = "https://web.facebook.com/profile.php?id=100009019927936";
  const whatsappUrl = "wa.me/+233501595639";
  return `<!DOCTYPE HTML PUBLIC "-//W3C//DTD XHTML 1.0 Transitional //EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
<head>
<!--[if gte mso 9]>
<xml>
  <o:OfficeDocumentSettings>
    <o:AllowPNG/>
    <o:PixelsPerInch>96</o:PixelsPerInch>
  </o:OfficeDocumentSettings>
</xml>
<![endif]-->
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="x-apple-disable-message-reformatting">
  <!--[if !mso]><!--><meta http-equiv="X-UA-Compatible" content="IE=edge"><!--<![endif]-->
  <title></title>
  
    <style type="text/css">
      @media only screen and (min-width: 620px) {
  .u-row {
    width: 600px !important;
  }
  .u-row .u-col {
    vertical-align: top;
  }

  .u-row .u-col-100 {
    width: 600px !important;
  }

}

@media (max-width: 620px) {
  .u-row-container {
    max-width: 100% !important;
    padding-left: 0px !important;
    padding-right: 0px !important;
  }
  .u-row .u-col {
    min-width: 320px !important;
    max-width: 100% !important;
    display: block !important;
  }
  .u-row {
    width: calc(100% - 40px) !important;
  }
  .u-col {
    width: 100% !important;
  }
  .u-col > div {
    margin: 0 auto;
  }
}
body {
  margin: 0;
  padding: 0;
}

table,
tr,
td {
  vertical-align: top;
  border-collapse: collapse;
}

p {
  margin: 0;
}

.ie-container table,
.mso-container table {
  table-layout: fixed;
}

* {
  line-height: inherit;
}

a[x-apple-data-detectors='true'] {
  color: inherit !important;
  text-decoration: none !important;
}

@media (max-width: 480px) {
  .hide-mobile {
    max-height: 0px;
    overflow: hidden;
    display: none !important;
  }
}

table, td { color: #000000; } #u_body a { color: #0000ee; text-decoration: underline; } @media (max-width: 480px) { #u_content_image_1 .v-container-padding-padding { padding: 4px 10px 0px !important; } #u_content_image_1 .v-src-width { width: auto !important; } #u_content_image_1 .v-src-max-width { max-width: 100% !important; } #u_content_image_2 .v-container-padding-padding { padding: 80px 10px 0px !important; } #u_content_image_2 .v-src-width { width: auto !important; } #u_content_image_2 .v-src-max-width { max-width: 100% !important; } #u_content_heading_1 .v-font-size { font-size: 18px !important; } #u_content_text_1 .v-container-padding-padding { padding: 10px !important; } #u_content_button_1 .v-size-width { width: 45% !important; } #u_content_text_3 .v-container-padding-padding { padding: 60px 20px 10px !important; } #u_content_text_3 .v-line-height { line-height: 170% !important; } #u_content_menu_1 .v-padding { padding: 5px 10px !important; } #u_content_text_4 .v-container-padding-padding { padding: 10px 20px 60px !important; } #u_content_text_4 .v-line-height { line-height: 170% !important; } }
    </style>
  
  

<!--[if !mso]><!--><link href="https://fonts.googleapis.com/css?family=Montserrat:400,700&display=swap" rel="stylesheet" type="text/css"><!--<![endif]-->

</head>

<body class="clean-body u_body" style="margin: 0;padding: 0;-webkit-text-size-adjust: 100%;background-color: #f9f9f9;color: #000000">
  <!--[if IE]><div class="ie-container"><![endif]-->
  <!--[if mso]><div class="mso-container"><![endif]-->
  <table id="u_body" style="border-collapse: collapse;table-layout: fixed;border-spacing: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;vertical-align: top;min-width: 320px;Margin: 0 auto;background-color: #e7e7e7;width:100%" cellpadding="0" cellspacing="0">
  <tbody>
  <tr style="vertical-align: top">
    <td style="word-break: break-word;border-collapse: collapse !important;vertical-align: top">
    <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td align="center" style="background-color: #f9f9f9;"><![endif]-->



<div class="u-row-container" style="padding: 0px;background-color: white; box-shadow:0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%);">
  <div class="u-row" style="Margin: 0 auto;min-width: 320px;max-width: 600px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: transparent;">
    <div style="border-collapse: collapse;display: table;width: 100%;height: 100%;background-color: transparent;">
      <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:600px;"><tr style="background-color: transparent;"><![endif]-->
      
<!--[if (mso)|(IE)]><td align="center" width="600" style="background-color: #ffffff;width: 600px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;" valign="top"><![endif]-->
<div class="u-col u-col-100" style="max-width: 320px;min-width: 600px;display: table-cell;vertical-align: top;">
  <div style="background-color: #ffffff;height: 100%;width: 100% !important; margin-top:100px">
  <!--[if (!mso)&(!IE)]><!--><div style="height: 100%; padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;"><!--<![endif]-->
  <table id="u_content_image_1" style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
  <tbody>
    <tr>
      <td class="v-container-padding-padding" style="overflow-wrap:break-word;word-break:break-word;padding:4px 0px 0px;font-family:arial,helvetica,sans-serif;background-color:#4B0082" align="left">
        
<table width="100%" cellpadding="0" cellspacing="0" border="0">
  <tr>
    <td style="padding-right: 0px;padding-left: 0px; margin-left:70px; padding-bottom:10px" align="center">
      &nbsp; &nbsp; &nbsp;
      <div style="display:inline-flex; align-items:center; margin-top"20px">
      <img align="left" border="0" src="${applogo}" alt="image" title="image" style="outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;clear: both;display: inline-block !important;border: none;height: auto;float: none;width: 5%;max-width: 80pxpx; margin-right:10px" width="144" class="v-src-width v-src-max-width"/>
      <div style="font-size:25px;color:white;">
       <span>Koino<b>Voter</b></span>
      </div>
      </div>
    </td>
  </tr>
</table>
      </td>
    </tr>
  </tbody>
</table>
<table id="u_content_image_2" style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
  <tbody>
    <tr>
      <td class="v-container-padding-padding" style="overflow-wrap:break-word;word-break:break-word;padding:80px 0px 0px;font-family:arial,helvetica,sans-serif;" align="left">
        
<table width="100%" cellpadding="0" cellspacing="0" border="0">
  <tr>
    <td style="padding-right: 0px;padding-left: 0px;" align="center">
      <img align="center" border="0" src="${middleImage}" alt="image" title="image" style="outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;clear: both;display: inline-block !important;border: none;height: auto;float: none;width: 65%;max-width: 390px;" width="390" class="v-src-width v-src-max-width"/>
    </td>
  </tr>
</table>

      </td>
    </tr>
  </tbody>
</table>

  <!--[if (!mso)&(!IE)]><!--></div><!--<![endif]-->
  </div>
</div>
<!--[if (mso)|(IE)]></td><![endif]-->
      <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
    </div>
  </div>
</div>



<div class="u-row-container" style="padding: 0px;background-color: transparent">
  <div class="u-row" style="Margin: 0 auto;min-width: 320px;max-width: 600px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: transparent;">
    <div style="border-collapse: collapse;display: table;width: 100%;height: 100%;background-color: transparent;">
      <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:600px;"><tr style="background-color: transparent;"><![endif]-->
      
<!--[if (mso)|(IE)]><td align="center" width="600" style="background-color: #ffffff;width: 600px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;" valign="top"><![endif]-->
<div class="u-col u-col-100" style="max-width: 320px;min-width: 600px;display: table-cell;vertical-align: top;">
  <div style="background-color: #ffffff;height: 100%;width: 100% !important;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;">
  <!--[if (!mso)&(!IE)]><!--><div style="height: 100%; padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;"><!--<![endif]-->
  
<table id="u_content_heading_1" style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
  <tbody>
    <tr>
      <td class="v-container-padding-padding" style="overflow-wrap:break-word;word-break:break-word;padding:60px 10px 10px;font-family:arial,helvetica,sans-serif;" align="left">
        
  <h1 class="v-line-height v-font-size" style="margin: 0px; color: #2F2E41; line-height: 130%; text-align: center; word-wrap: break-word; font-weight: normal; font-family: 'Montserrat',sans-serif; font-size: 24px;">
    <div>
<div><strong><br />Please click on the button below to reset your password<br />.</strong></div>
</div>
  </h1>

      </td>
    </tr>
  </tbody>
</table>



<table id="u_content_button_1" style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
  <tbody>
    <tr>
      <td class="v-container-padding-padding" style="overflow-wrap:break-word;word-break:break-word;padding:10px 10px 40px;font-family:arial,helvetica,sans-serif;" align="left">
        
<div align="center">
  <!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0" style="border-spacing: 0; border-collapse: collapse; mso-table-lspace:0pt; mso-table-rspace:0pt;font-family:arial,helvetica,sans-serif;"><tr><td style="font-family:arial,helvetica,sans-serif;" align="center"><v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href="${appUrl}" style="height:37px; v-text-anchor:middle; width:174px;" arcsize="11%" stroke="f" fillcolor="#6C63FF"><w:anchorlock/><center style="color:#FFFFFF;font-family:arial,helvetica,sans-serif;"><![endif]-->
    <a href="${resetUrl}" target="_blank" class="v-size-width" style="box-sizing: border-box;display: inline-block;font-family:arial,helvetica,sans-serif;text-decoration: none;-webkit-text-size-adjust: none;text-align: center;color: #FFFFFF; background-color: #4B0082; border-radius: 50px;-webkit-border-radius: 4px; -moz-border-radius: 4px; width:30%; max-width:100%; overflow-wrap: break-word; word-break: break-word; word-wrap:break-word; mso-border-alt: none;">
      <span class="v-line-height v-padding" style="display:block;padding:10px 20px;line-height:120%;"><p style="font-size: 14px; line-height: 120%;"><span style="font-size: 14px; line-height: 16.8px; background-color:#4B0082;border-radius:50px ">Reset password</span></p></span>
    </a>
  <!--[if mso]></center></v:roundrect></td></tr></table><![endif]-->
</div>
      </td>
    </tr>
  </tbody>
</table>

  <!--[if (!mso)&(!IE)]><!--></div><!--<![endif]-->
  </div>
</div>
<!--[if (mso)|(IE)]></td><![endif]-->
      <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
    </div>
  </div>
</div>



<div class="u-row-container" style="padding: 0px;background-color: transparent">
  <div class="u-row" style="Margin: 0 auto;min-width: 320px;max-width: 600px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: transparent;">
    <div style="border-collapse: collapse;display: table;width: 100%;height: 100%;background-color: transparent;">
      <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:600px;"><tr style="background-color: transparent;"><![endif]-->
      
<!--[if (mso)|(IE)]><td align="center" width="600" style="width: 600px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;" valign="top"><![endif]-->
<div class="u-col u-col-100" style="max-width: 320px;min-width: 600px;display: table-cell;vertical-align: top;">
  <div style="height: 100%;width: 100% !important;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;">
  <!--[if (!mso)&(!IE)]><!--><div style="height: 100%; padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;"><!--<![endif]-->
  
<table id="u_content_text_3" style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
  <tbody>
    <tr>
      <td class="v-container-padding-padding" style="overflow-wrap:break-word;word-break:break-word;padding:60px 50px 10px;font-family:arial,helvetica,sans-serif;" align="left">
        
  <div class="v-line-height" style="line-height: 170%; text-align: center; word-wrap: break-word;">
    <p style="font-size: 14px; line-height: 170%;">If you have any questions, please email us at ${appEmail} or visit our FAQS, you can also chat with a reel live human during our operating hours. They can answer questions about your account</p>
  </div>

      </td>
    </tr>
  </tbody>
</table>

<table style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
  <tbody>
    <tr>
      <td class="v-container-padding-padding" style="overflow-wrap:break-word;word-break:break-word;padding:20px;font-family:arial,helvetica,sans-serif;" align="left">
        
  <table height="0px" align="center" border="0" cellpadding="0" cellspacing="0" width="41%" style="border-collapse: collapse;table-layout: fixed;border-spacing: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;vertical-align: top;border-top: 1px solid #000000;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%">
    <tbody>
      <tr style="vertical-align: top">
        <td style="word-break: break-word;border-collapse: collapse !important;vertical-align: top;font-size: 0px;line-height: 0px;mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%">
          <span>&#160;</span>
        </td>
      </tr>
    </tbody>
  </table>

      </td>
    </tr>
  </tbody>
</table>

<table style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
  <tbody>
    <tr>
      <td class="v-container-padding-padding" style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:arial,helvetica,sans-serif;" align="left">
        
<div align="center">
  <div style="display: table; max-width:93px;">
  <!--[if (mso)|(IE)]><table width="93" cellpadding="0" cellspacing="0" border="0"><tr><td style="border-collapse:collapse;" align="center"><table width="100%" cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse; mso-table-lspace: 0pt;mso-table-rspace: 0pt; width:93px;"><tr><![endif]-->
  
    
    <!--[if (mso)|(IE)]><td width="32" style="width:32px; padding-right: 15px;" valign="top"><![endif]-->
    <table align="left" border="0" cellspacing="0" cellpadding="0" width="32" height="32" style="width: 32px !important;height: 32px !important;display: inline-block;border-collapse: collapse;table-layout: fixed;border-spacing: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;vertical-align: top;margin-right: 15px">
      <tbody><tr style="vertical-align: top"><td align="left" valign="middle" style="word-break: break-word;border-collapse: collapse !important;vertical-align: top">
        <a href="$${facebookUrl}" title="Facebook" target="_blank">
          <img src="${facebookImg}" alt="Facebook" title="Facebook" width="32" style="outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;clear: both;display: block !important;border: none;height: auto;float: none;max-width: 32px !important">
        </a>
      </td></tr>
    </tbody></table>
    <!--[if (mso)|(IE)]></td><![endif]-->
    
    <!--[if (mso)|(IE)]><td width="32" style="width:32px; padding-right: 0px;" valign="top"><![endif]-->
    <table align="left" border="0" cellspacing="0" cellpadding="0" width="32" height="32" style="width: 32px !important;height: 32px !important;display: inline-block;border-collapse: collapse;table-layout: fixed;border-spacing: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;vertical-align: top;margin-right: 0px">
      <tbody><tr style="vertical-align: top"><td align="left" valign="middle" style="word-break: break-word;border-collapse: collapse !important;vertical-align: top">
        <a  href="$${whatsappUrl}" title="WhatsApp" target="_blank">
          <img src="${whatsapp}" alt="WhatsApp" title="WhatsApp" width="32" style="outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;clear: both;display: block !important;border: none;height: auto;float: none;max-width: 32px !important">
        </a>
      </td></tr>
    </tbody></table>
    <!--[if (mso)|(IE)]></td><![endif]-->
    
    
    <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
  </div>
</div>

      </td>
    </tr>
  </tbody>
</table>

<table id="u_content_menu_1" style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
  <tbody>
    <tr>
      <td class="v-container-padding-padding" style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:arial,helvetica,sans-serif;" align="left">
        
<div class="menu" style="text-align:center">
<!--[if (mso)|(IE)]><table role="presentation" border="0" cellpadding="0" cellspacing="0" align="center"><tr><![endif]-->

  <!--[if (mso)|(IE)]><td style="padding:5px 15px"><![endif]-->
  
    <a href="${appUrl}" target="_blank" style="padding:5px 15px;display:inline-block;color:#000000;font-family:arial,helvetica,sans-serif;font-size:14px;text-decoration:none"  class="v-padding v-font-size">
      Home
    </a>
  
  <!--[if (mso)|(IE)]></td><![endif]-->
  
    <!--[if (mso)|(IE)]><td style="padding:5px 15px"><![endif]-->
    <span style="padding:5px 15px;display:inline-block;color:#000000;font-family:arial,helvetica,sans-serif;font-size:14px" class="v-padding v-font-size hide-mobile">
      |
    </span>
    <!--[if (mso)|(IE)]></td><![endif]-->
  

  <!--[if (mso)|(IE)]><td style="padding:5px 15px"><![endif]-->
  
    <a href="${appUrl}" target="_blank" style="padding:5px 15px;display:inline-block;color:#000000;font-family:arial,helvetica,sans-serif;font-size:14px;text-decoration:none"  class="v-padding v-font-size">
      Page
    </a>
  
  <!--[if (mso)|(IE)]></td><![endif]-->
  
    <!--[if (mso)|(IE)]><td style="padding:5px 15px"><![endif]-->
    <span style="padding:5px 15px;display:inline-block;color:#000000;font-family:arial,helvetica,sans-serif;font-size:14px" class="v-padding v-font-size hide-mobile">
      |
    </span>
    <!--[if (mso)|(IE)]></td><![endif]-->
  

  <!--[if (mso)|(IE)]><td style="padding:5px 15px"><![endif]-->
  
    <a href="${appUrl}" target="_blank" style="padding:5px 15px;display:inline-block;color:#000000;font-family:arial,helvetica,sans-serif;font-size:14px;text-decoration:none"  class="v-padding v-font-size">
      About Us
    </a>
  
  <!--[if (mso)|(IE)]></td><![endif]-->
  
    <!--[if (mso)|(IE)]><td style="padding:5px 15px"><![endif]-->
    <span style="padding:5px 15px;display:inline-block;color:#000000;font-family:arial,helvetica,sans-serif;font-size:14px" class="v-padding v-font-size hide-mobile">
      |
    </span>
    <!--[if (mso)|(IE)]></td><![endif]-->
  

  <!--[if (mso)|(IE)]><td style="padding:5px 15px"><![endif]-->
  
    <a href="https://wa.me/+233501595639" target="_blank" style="padding:5px 15px;display:inline-block;color:#000000;font-family:arial,helvetica,sans-serif;font-size:14px;text-decoration:none"  class="v-padding v-font-size">
      Contact Us
    </a>
  
  <!--[if (mso)|(IE)]></td><![endif]-->
  

<!--[if (mso)|(IE)]></tr></table><![endif]-->
</div>

      </td>
    </tr>
  </tbody>
</table>

<table id="u_content_text_4" style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
  <tbody>
    <tr>
      <td class="v-container-padding-padding" style="overflow-wrap:break-word;word-break:break-word;padding:10px 60px 60px;font-family:arial,helvetica,sans-serif;" align="left">
        
  <div class="v-line-height" style="line-height: 170%; text-align: center; word-wrap: break-word;">
    <p style="font-size: 14px; line-height: 170%;">You have received this email because you filled a form to register an account with <a rel="noopener" href="https://www.koinovoter.web.app" target="_blank">KoinoVote.</a> If this is not true or does not sense to you, please ignore this mail.</p>
  </div>

      </td>
    </tr>
  </tbody>
</table>

  <!--[if (!mso)&(!IE)]><!--></div><!--<![endif]-->
  </div>
</div>
<!--[if (mso)|(IE)]></td><![endif]-->
      <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
    </div>
  </div>
</div>


    <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
    </td>
  </tr>
  </tbody>
  </table>
  <!--[if mso]></div><![endif]-->
  <!--[if IE]></div><![endif]-->
</body>

</html>
`;
};

const getElectionTemplate = (
  votinglink,
  resultsLink,
  electionTitle,
  electionPassword,
  appUrl = "koinovoter.web.app"
) => `
<!DOCTYPE html>
<html>
  <head>
      <title>Font Awesome Icons</title>
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
  </head>
  <style>
      .copy-icon:hover {
          color: indigo;
          transform: scale(1.1);
          transition: all 0.22s ease;
      }
  </style>
  <body style="background-color:; width:100%; display:inline-flex; margin:0px; flex-direction:row; justify-content:center;">
  <table width="100%" align="center">
  <tr>
    <td>
  <table style="width:100%; background-color:indigo; height:100px;">
    <tr style="width:100%" align="center">
      <td style="width:100%" align="center">
        <div>
<img border="0" style="width:5%" src="https://firebasestorage.googleapis.com/v0/b/koinovote-361416.appspot.com/o/emailtemplateimages%2Fapplogowhite.png?alt=media&token=29b942e8-ecfc-429e-bfea-fa4d2e0379e7" alt="image" title="image" style=";" width="144" class="v-src-width v-src-max-width" />
      <div style="font-size:25px;color:white;margin-left:10px">
          <span>Koino<b>Vote</b></span>
      </div>
  </div>
      </td>
      </tr>
  </table>
    </td>
</tr>
  <tr style="width:100%; height:100px; background-color:;" >
    <td style="width:100%; ">
      <table style="width:100%;  border-collapse: collapse;" align="center">
        <tr><td>.</td></tr>
        <tr width="100%" align="center"><td><h2>${electionTitle}</h2></td></tr>
        <tr style="width:100%; background-color:#F6F8FA">
          <td style="width:100%;">
        <div  
            style="padding:10px; text-overflow:ellipsis; width:90%;  overflow-x:hidden; background-color:#F6F8FA"
            >
              <h3 style="margin:0px; color:indigo;">
                Results screen:
              </h3>
              <input
              id="results-link"
              disabled
              style=" text-overflow:ellipsis; width:90%;  overflow-x:hidden; ackground-color:#F6F8FA; border-radius:10px;border:0px" value="https:dsas.sdsa./ddsda.sd/sasda.sd/sasda.sd/sa">
              <br/>
              <strong style="font-size:11; font-weight:300; color:#333;">Password: <b>${electionPassword}</b></strong>
            </div> 
           </td>
          <td>
            <a href="${resultsLink}"  
              style="cursor:pointer;margin-right:10px; padding:10px 20px; border-radius:100px; background-color:indigo; color:white; text-decoration:none;  white-space:nowrap"
            >
             Open
            </button>
          </td>
        </tr>
        <tr><td>.</td></tr>

        <tr style="width:100%; background-color:#F6F8FA;">
          <td tyle="width:%;">
        <div  
            style="padding:10px; text-overflow:ellipsis; width:90%;  overflow-x:hidden; background-color:#F6F8FA;"
            >
              <h3 style="margin:0px; color:indigo;">
                Voting screen:
              </h3>
              htt  <input
              id="voting-link"
              disabled
              style=" text-overflow:ellipsis; width:90%;  overflow-x:hidden; ackground-color:#F6F8FA; border-radius:10px;border:0px" value="https:dsas.sdsa./ddsda.sd/sasda.sd/sasda.sd/sa">
              <br/>
            <!--  <strong>Password: election2022</strong> -->
            </div> 
           </td>
          <td>
            <a href="${votinglink}"  
            style="cursor:pointer;margin-right:10px; padding:10px 20px; border-radius:100px; background-color:indigo; color:white; text-decoration:none;  white-space:nowrap"
            >
            Open
            </a>
          </td>
        </tr>
        <tr>
          <td>
          <h5>Please find attached to this mail a pdf containing your  <b>Voter Ids</b>.</h5>
          </td>
        </tr>
      </table>
    </td>
  </tr>
</table>
        <br/>
        <br/>
        
  </body>
</html>
`;

// const getResetPasswordtemplate = (
//   user,
//   resetUrl,
//   header,
//   name,
//   appUrl
// ) => `<html><body>
// <h1 style='color:green'>Koinovote.org - ${header || "Password reset"}</h1>
// <p > Hi ${name || user.email},</p>
// <p>Please click on the link below to reset your password. Please note that the link will expire in 15 minutes.</p>
// <p'> Reset your password:  ${resetUrl}</p>
// </body</html>`;
module.exports = {
  getRegisterationTemplate,
  getElectionTemplate,
  getResetPasswordtemplate,
};
{
  /*
   */
}
//

const getHtmlBody = (user, resetUrl) => `<html><body> 
<h1 style='color:green'>Koinovote.org - Password reset</h1>
<p > Hi ${user.email},</p>
<p>Please click on the link below to reset your password. Please note that the link will expire in 15 minutes.</p>
<p'> Reset your password:  ${resetUrl}</p>
</body</html>`;
module.exports = { getHtmlBody };

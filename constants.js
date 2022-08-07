const getHtmlBody = (user, resetUrl, header) => `<html><body> 
<h1 style='color:green'>Koinovote.org - ${header || "Password reset"}</h1>
<p > Hi ${user.email},</p>
<p>Please click on the link below to reset your password. Please note that the link will expire in 15 minutes.</p>
<p'> Reset your password:  ${resetUrl}</p>
</body</html>`;
const getRandomStringKey = (limit = 5) => {
  return Math.random(0).toString();
};
const getRandomInt = (max = 999999) => {
  return Math.floor(Math.random() * max);
};
console.log("==", getRandomInt());
module.exports = { getHtmlBody, getRandomStringKey, getRandomInt };

const getHtmlBody = (user, resetUrl, header, name) => `<html><body> 
<h1 style='color:green'>Koinovote.org - ${header || "Password reset"}</h1>
<p > Hi ${name || user.email},</p>
<p>Please click on the link below to reset your password. Please note that the link will expire in 15 minutes.</p>
<p'> Reset your password:  ${resetUrl}</p>
</body</html>`;
const getCreatedElectionBody = (votinglink, resultsLink, electionTitle) => `
<html>
  <body>
    <h1 style="color:green;">Election info</h1>
    <div style="display:flex;">
      <strong>Title of election: </strong>
      <span> ${electionTitle}</span>
    </div>
    <div style="display:flex;">
      <strong>Voting link: </strong>
      <span> ${votinglink}</span>
    </div>
    <div style="display:flex;">
      <strong>Results link:</strong>
      <span> ${resultsLink}</span>
    </div>
  </body>
</html>;
`;
const getRandomStringKey = (limit = 5) => {
  return Math.random(0).toString();
};
const getRandomInt = (max = 999999) => {
  return Math.floor(Math.random() * max);
};
// prettier-ignore
const generateRandomId = () => {
  var S4 = function() {
    return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
 };
 return (S4()+S4()+"-"+S4()+"-"+S4()+"-"+S4()+"-"+S4()+S4()+S4());
};
// prettier-ignore
const generateRandomNoDashes = () =>  {
  var S4 = function() {
     return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
  };
  return (S4()+S4()+"-"+S4()+"-"+S4()+"-"+S4()+"-"+S4()+S4()+S4());
}

const generateShortId = () => {
  var S4 = function () {
    return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
  };
  return S4() + S4() + "" + S4() + "" + S4();
};

const generateVeryShortId = () => {
  var S4 = function () {
    return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
  };
  return S4() + S4() + "" + S4();
};
const generateSuperShortId = () => {
  var S4 = function () {
    return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
  };
  return S4() + S4();
};

module.exports = {
  getHtmlBody,
  getRandomStringKey,
  getRandomInt,
  generateRandomId,
  generateShortId,
  generateVeryShortId,
  generateSuperShortId,
  generateRandomNoDashes,
  getCreatedElectionBody,
};

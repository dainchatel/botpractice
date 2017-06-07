module.exports = function (req, res, next) {
  var userName = req.body.user_name;
  var beefName = '';
  if (userName === 'dain') {
    beefName = 'dad'
  }
  else {
    beefName = 'lady'
  }
  var suppMessageArr = ['how you doin?', 'what\'s the uh, wet food situation?', 'you guys getting up to anything cool tonight?', 'sorry one sec, these birds are REAL assholes', 'man what is the deal with doors, you guys hate those things too?', 'can i borrow some money?'];
  var suppMessage = suppMessageArr[Math.floor(Math.random() * 6)];
  var botPayload = {
    text : 'hey ' + beefName + '. ' + suppMessage
  };

  // avoid infinite loop
  if (userName !== 'slackbot') {
    return res.status(200).json(botPayload);
  } else {
    return res.status(200).end();
  }
}

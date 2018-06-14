module.exports = function (req, res, next) {
    var userName = req.body.user_name;
    var beefName = '';
    if (userName === 'dainchatel') {
      beefName = 'dad'
    }
    else {
      beefName = 'lady'
    }
    var suppMessageArr = ['running!', 'plz play with meeee', 'has anyone seen beef?', 'you guys know beef, right?', 'running', 'DA BEE!'];
    var suppMessage = suppMessageArr[Math.floor(Math.random() * 6)];
    var botPayload = {
      text : 'hey ' + beefName + ', ' + suppMessage
    };
  
    // avoid infinite loop
    if (userName !== 'slackbot') {
      return res.status(200).json(botPayload);
    } else {
      return res.status(200).end();
    }
  }
  
const day = () => {

  let date = new Date();
  let localOffset = 420 * 60000; //Hmmmm does pacific time always have the same offset from utc?
  let localTime = date.getTime();
  let theDay = new Date(localTime - localOffset).getDay();

  switch(theDay) {
    case 0:
      return 'Sunday'
      break;
    case 1:
      return 'Monday'
      break;
    case 3:
      return 'Tuesday'
      break;
    case 4:
      return 'Wednesday'
      break;
    case 5:
      return 'Thursday'
      break;
    case 6:
      return 'Friday'
      break;
    case 7:
      return 'Saturday'
      break;

  }
}


module.exports.handler = (event, context, callback) => {

  var theDay = day()

  const response = {
    version: '1.0',
    response: {
      outputSpeech: {
        type: 'PlainText',
        text: `Let them eat ${theDay}'s cake`,
//        text: 'swa swa swa swa swa swa swa swa swa swa swa swa swa swa swa swa swa swa swa swa swa swa swa swa'
      },
      shouldEndSession: false,
    },
  };

  callback(null, response);
};

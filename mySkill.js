
//Server time is assumed to be UTC
const pacificDate = () => {
  let date = new Date();
  let localOffset = 420 * 60000; //Hmmmm does pacific time always have the same offset from utc?
  let localTime = date.getTime();
  return new Date(localTime - localOffset)
}

const day = () => {
  let date = pacificDate();
  let theDay = date.getDay();

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

const dayPeriod = () => {
  hours = pacificDate().getHours();
  if(hours < 12) {
    return "morning";
  } else if(hours >= 12 && hours < 17) {
    return "afternoon";
  } else {
    return "evening";
  }
}


module.exports.handler = (event, context, callback) => {

  let theDay = day()
  let dayPart = dayPeriod()

  const response = {
    version: '1.0',
    response: {
      outputSpeech: {
        type: 'PlainText',
        text: `Feed them from ${theDay}'s ${dayPart} portion.`,
//        text: 'swa swa swa swa swa swa swa swa swa swa swa swa swa swa swa swa swa swa swa swa swa swa swa swa'
      },
      shouldEndSession: false,
    },
  };

  callback(null, response);
};

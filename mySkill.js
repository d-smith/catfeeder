module.exports.handler = (event, context, callback) => {
  const response = {
    version: '1.0',
    response: {
      outputSpeech: {
        type: 'PlainText',
        text: `Let them eat cake`,
      },
      shouldEndSession: false,
    },
  };

  callback(null, response);
};

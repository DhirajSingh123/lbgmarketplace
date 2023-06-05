const errorResponseHandler = (errorMsg) => {
  const error = [
    {
      error: errorMsg,
    },
  ];
  return error;
};

module.exports = { errorResponseHandler };

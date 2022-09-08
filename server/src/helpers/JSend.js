module.exports = {
  SuccessResponse: (data, message) => {
    return {
      status: "SUCCESS",
      data,
      message,
    };
  },
  FailResponse: (data, message, reason) => {
    return {
      status: "FAILED",
      data,
      message,
      reason,
    };
  },
};

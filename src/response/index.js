const responseBag = (res, status, code, data = null) => {
  let payload;
  switch (code) {
    case 200:
      payload = { status, data };
      break;
    case 201:
      payload = { status, data };
      break;
    default:
      payload = { status, messgae: data };
  }
  return res.status(code).json(payload);
};
module.exports = responseBag;

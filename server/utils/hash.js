const crypto = require('crypto');

const hashPwd = (password) => {
  const salt = crypto.randomBytes(Math.ceil(15)).toString('hex').slice(0, 30);

  const pwd = crypto.createHmac('sha512', salt);
  pwd.update(password);
  const hash = pwd.digest('hex');

  return {
    hash,
    salt,
  };
};

const Decrypt = (salt, password) => {
  const saltSecret = salt;
  const pwd = crypto.createHmac('sha512', saltSecret);
  pwd.update(password);
  const hashPass = pwd.digest('hex');
  return hashPass;
};

module.exports.decrypt = Decrypt;
module.exports.encrypt = hashPwd;

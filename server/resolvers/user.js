const { DBUser } = require('../models/User');
const { encrypt, decrypt } = require('../utils/hash');
const { generateToken } = require('../utils/token');

const User = async (_parent, { id }) => {
  const user = await DBUser.findOne({ where: { id } });

  if (user) return user;

  throw new Error("Didn't find any user associated with the provided Id");
};

const createUser = async (_parent, { object }) => {
  const { name, username, email, password } = object;

  const isEmail = await DBUser.findAll({
    where: {
      email,
    },
  });
  if (isEmail[0]) {
    return new Error('Email Already exists please login!');
  }

  const isUsername = await DBUser.findOne({ where: { username } });
  if (isUsername) {
    return new Error('Username Already exists please try another one!');
  }

  const { hash, salt } = encrypt(password);
  const user = await DBUser.create({
    name,
    username,
    email,
    salt,
    password: hash,
  });

  if (user) {
    const token = await generateToken({ _id: user.id });
    return { user, token };
  }

  throw new Error('Failed to create new user!');
};

const login = async (_parent, { object }) => {
  const { email, password } = object;

  const isUser = await DBUser.findOne({ where: { email } });
  if (!isUser) {
    return new Error('Invalid Email or Password!');
  }

  const hash = await decrypt(isUser.dataValues.salt, password);

  const user = await DBUser.findOne({
    where: {
      email,
      password: hash,
    },
  });

  if (user) {
    const token = await generateToken({ _id: user.id });
    return { user, token };
  }

  throw new Error('Invalid Email or Password!');
};

module.exports = {
  Query: {
    user: User,
  },
  Mutation: {
    createUser,
    login,
  },
};

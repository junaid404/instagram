const { v4: uuid } = require('uuid');

const getDefaultUser = () => {
  const user = {
    id: uuid(),
    username: 'username',
    name: 'name',
    profile_image: '',
  };
  return user;
};
const User = async () => {
  const user = {
    id: uuid(),
    username: 'me',
    name: 'myself',
    profile_image:
      'https://scontent-ort2-2.cdninstagram.com/v/t51.2885-19/s150x150/82559664_3161307737426774_8687807477812559872_n.jpg?_nc_ht=scontent-ort2-2.cdninstagram.com&_nc_ohc=llb3VCRb-mkAX_XTEi3&oh=64f0323db646c01299e513e3337b83ff&oe=5E8620BF',
    website: 'https://google.com',
    email: 'me@gmail.com',
    bio: 'This is my bio',
    phone_number: '555-555-5555',
    posts: [],
    followers: [getDefaultUser(), getDefaultUser()],
    following: [getDefaultUser(), getDefaultUser()],
  };
  return user;
};

module.exports = {
  Query: {
    user: User,
  },
};

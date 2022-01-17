module.exports = {
  emailAlreadyExists: {
    error: 
      { 
        message: 'User already registered',
        code: 409, 
      },
  },
  emailOrPasswordNotExist: {
    error:
      {
        message: 'Invalid fields',
        code: 400,
      },
  },
  loginTokenNotFound: {
    error:
      {
        message: 'Token not found',
        code: 401,
      },
  },
  invalidLoginToken: {
    error:
      {
        message: 'Expired or invalid token',
        code: 401,
      },
  },
  userNotFound: {
    error:
      {
        message: 'User does not exist',
        code: 404,
      },
  },
  categoryNotFound: {
    error:
      {
        message: '"categoryIds" not found',
        code: 400,
      },
  },
  categoryNotBeEdited: {
    error:
      {
        message: 'Categories cannot be edited',
        code: 400,
      },
  },
  postNotFound: {
    error:
      {
        message: 'Post does not exist',
        code: 404,
      },
  },
  unauthorizedUser: {
    error:
      {
        message: 'Unauthorized user',
        code: 401,
      },
  },
};

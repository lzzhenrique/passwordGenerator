const options = {
  upper: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  lower: 'abcdefghijklmnopqrstuvwxyz',
  numbers: '1234567890',
  simbols: '!@#$%^&*()_+=-',
};

const randomGenerator = (char) => char[Math.floor(Math.random() * char.length)];

const main = async (passwordObj) => {
  try {
    const { passwordLength, ...types } = passwordObj;
    const typeKeys = Object.keys(types);
    const result = [];

    for (let i = 0; i < passwordLength; i += 1) {
      const charType = typeKeys[Math.floor(Math.random() * typeKeys.length)];
      result.push(randomGenerator(options[charType]));
    }

    const finalPassword = result.join('');
    return { finalPassword };
  } catch (error) {
    return { error };
  }
};

module.exports = main;
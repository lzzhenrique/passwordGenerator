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
    const keys = Object.keys(types);
    const result = [];

    for (let i = 0; i < passwordLength; i += 1) {
      const charType = keys[Math.floor(Math.random() * keys.length)];
      result.push(randomGenerator(options[charType]));
    }

    const finalPassword = result.join('');
    return { finalPassword };
  } catch (error) {
    return { error };
  }
};

module.exports = main;
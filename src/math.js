const getRandomIntInclusive = (min, max) => {
  const num1 = Math.ceil(min);
  const num2 = Math.floor(max);
  return Math.floor(Math.random() * (num2 - num1 + 1)) + num1;
};

export default getRandomIntInclusive;

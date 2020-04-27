const greet = (name) => {
  function Greet(name) {
    return `Heyo ${name}! What's poppin'?`;
  }
  console.log(Greet(name));
};

module.exports = greet;

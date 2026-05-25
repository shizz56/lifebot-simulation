const coinAlphabet = {
  L: 12, I: 9, F: 6, E: 5,
  T: 20, O: 15, K: 11, N: 14
};

function powerWord(word) {
  return word.toUpperCase().split("").reduce((sum, letter, index) => {
    const value = coinAlphabet[letter] || (letter.charCodeAt(0) % 26);
    return sum + Math.pow(value, (index % 3) + 1);
  }, 0);
}

function sentencePower(sentence) {
  return sentence.split(/\s+/).reduce((sum, word) => {
    return sum + powerWord(word);
  }, 0);
}

function coinEquation(tokens) {
  const belief = sentencePower(
    "open book decentralized currency belief"
  ) / 100000;

  const decentralization =
    (tokens.wisdom + tokens.love + tokens.legacy + tokens.clarity) / 4;

  const lifeTokenPower =
    Math.pow(decentralization, 2) +
    Math.pow(belief, 3) +
    tokens.soul +
    tokens.spirit;

  return {
    belief: belief.toFixed(4),
    decentralization: decentralization.toFixed(2),
    lifeTokenPower: lifeTokenPower.toFixed(2),
    sentence:
      "The more people believe in open knowledge and decentralized value, the more symbolic power moves from control into shared creation."
  };
}

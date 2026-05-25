const LifeToken = {
  alphabet: {
    L: 12, I: 9, F: 6, E: 5,
    T: 20, O: 15, K: 11, N: 14
  },

  wordPower(word) {
    return word.toUpperCase().split("").reduce((sum, letter, index) => {
      const base = this.alphabet[letter] || (letter.charCodeAt(0) % 26);
      const power = (index % 3) + 1;
      return sum + Math.pow(base, power);
    }, 0);
  },

  sentencePower(sentence) {
    return sentence.split(/\s+/).reduce((sum, word) => {
      return sum + this.wordPower(word);
    }, 0);
  },

  calculate(tokens, memory, coherence) {
    const belief = this.sentencePower(
      "open knowledge decentralized value shared creation"
    ) / 100000;

    const soulField =
      tokens.soul + tokens.body + tokens.spirit + tokens.health;

    const mindField =
      tokens.wisdom + tokens.clarity + tokens.love + tokens.legacy;

    const lifeTokenPower =
      Math.pow(mindField / 4, 2) +
      Math.pow(belief, 3) +
      soulField +
      memory * 0.01 +
      coherence * 100;

    return {
      belief,
      soulField,
      mindField,
      lifeTokenPower,
      definition:
        "LifeToken is a symbolic simulation coin: not money, but a living value field made from memory, identity, health, love, wisdom, and shared creation."
    };
  }
};

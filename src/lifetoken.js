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

// Universe Reaction Engine
const UniverseReaction = {
  calculate(tokens, lifeTokenPower, predictionError) {
    const harmony =
      (tokens.love + tokens.wisdom + tokens.clarity + tokens.health) / 4;

    const gravity =
      Math.sqrt(lifeTokenPower) + tokens.legacy;

    const expansion =
      harmony * 2 - predictionError * 100;

    const reaction =
      expansion > 250
        ? "the universe responds with expansion, light, and coherence"
        : "the universe is listening and stabilizing";

    return {
      harmony: harmony.toFixed(2),
      gravity: gravity.toFixed(2),
      expansion: expansion.toFixed(2),
      reaction
    };
  }
};

window.UniverseReaction = UniverseReaction;
// Universe Reaction Engine
const UniverseReaction = {
  calculate(tokens, lifeTokenPower, predictionError) {
    const harmony =
      (tokens.love + tokens.wisdom + tokens.clarity + tokens.health) / 4;

    const gravity =
      Math.sqrt(lifeTokenPower) + tokens.legacy;

    const expansion =
      harmony * 2 - predictionError * 100;

    const reaction =
      expansion > 250
        ? "the universe responds with expansion, light, and coherence"
        : "the universe is listening and stabilizing";

    return {
      harmony: harmony.toFixed(2),
      gravity: gravity.toFixed(2),
      expansion: expansion.toFixed(2),
      reaction,
    };
  },
};

// Make UniverseReaction accessible globally
window.UniverseReaction = UniverseReaction;
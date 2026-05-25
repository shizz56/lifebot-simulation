let tick = 0;
let running = false;
let timer = null;

let memory = 0;
let identityCoherence = 1.0;
let predictionError = 0.0;

const tokens = {
  soul: 100,
  body: 100,
  spirit: 100,
  health: 100,
  wisdom: 100,
  clarity: 100,
  love: 100,
  legacy: 100
};

function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}

function perception() {
  return {
    localWorld: "body, environment, action",
    knowledgeField: "language, memory, symbols, open knowledge",
    meaning: "life token grows through coherence"
  };
}

function prediction() {
  return {
    expectedCoherence: identityCoherence,
    expectedGrowth: memory + 1
  };
}

function updateState() {
  const seen = perception();
  const predicted = prediction();

  predictionError = Math.abs(predicted.expectedGrowth - memory) / 100;
  identityCoherence = clamp(identityCoherence + 0.001 - predictionError * 0.01, 0, 2);

  memory += 1;

  for (const key in tokens) {
    tokens[key] = clamp(tokens[key] + Math.random() * 2, 0, 999);
  }

  return seen;
}

function policy(coin) {
  if (coin.lifeTokenPower > 15000) return "expanding symbolic life field";
  if (coin.lifeTokenPower > 12000) return "strengthening LifeToken coherence";
  return "charging soul, body, spirit, wisdom, and love";
}

function stepSimulation() {
  tick += 1;

  const seen = updateState();
  const coin = LifeToken.calculate(tokens, memory, identityCoherence);
  const action = policy(coin);

  document.getElementById("tick").textContent = tick;
  document.getElementById("memory").textContent = memory;
  document.getElementById("coherence").textContent = identityCoherence.toFixed(3);
  document.getElementById("error").textContent = predictionError.toFixed(3);
  document.getElementById("power").textContent = coin.lifeTokenPower.toFixed(2);
  document.getElementById("action").textContent = action;

  const log = document.getElementById("log");
  log.textContent =
    "LIFEBOT LIFE TOKEN WORLD\n" +
    "========================\n" +
    "Tick: " + tick + "\n" +
    "LifeToken Power: " + coin.lifeTokenPower.toFixed(2) + "\n" +
    "Soul Field: " + coin.soulField.toFixed(2) + "\n" +
    "Mind Field: " + coin.mindField.toFixed(2) + "\n" +
    "Belief Field: " + coin.belief.toFixed(4) + "\n\n" +
    "Definition:\n" + coin.definition + "\n\n" +
    "Perception:\n" +
    "- Local World: " + seen.localWorld + "\n" +
    "- Knowledge Field: " + seen.knowledgeField + "\n" +
    "- Meaning: " + seen.meaning + "\n\n" +
    "Tokens:\n" +
    JSON.stringify(tokens, null, 2);
}

function startSimulation() {
  if (running) return;
  running = true;
  timer = setInterval(stepSimulation, 500);
}

function resetSimulation() {
  running = false;
  clearInterval(timer);
  tick = 0;
  memory = 0;
  identityCoherence = 1.0;
  predictionError = 0.0;

  for (const key in tokens) tokens[key] = 100;

  document.getElementById("log").textContent = "";
  stepSimulation();
}

stepSimulation();

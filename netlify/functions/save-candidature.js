const fs = require('fs');
const path = require('path');

exports.handler = async function(event) {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Méthode non autorisée" };
  }

  const newCandidature = JSON.parse(event.body);
  const filePath = path.resolve(__dirname, 'candidatures.json');
  let existing = [];

  if (fs.existsSync(filePath)) {
    existing = JSON.parse(fs.readFileSync(filePath));
  }

  existing.push(newCandidature);
  fs.writeFileSync(filePath, JSON.stringify(existing, null, 2));

  return { statusCode: 200, body: "Candidature enregistrée" };
};

const fs = require('fs');
const path = require('path');

exports.handler = async function(event) {
  const filePath = path.resolve(__dirname, 'candidatures.json');

  if (!fs.existsSync(filePath)) {
    return { statusCode: 200, body: JSON.stringify([]) };
  }

  const data = fs.readFileSync(filePath);
  return {
    statusCode: 200,
    headers: { "Content-Type": "application/json" },
    body: data
  };
};

const fetch = require("node-fetch");

exports.handler = async function(event) {
  const { nom, accepte } = JSON.parse(event.body);
  const message = accepte ?
    `✅ Candidature ACCEPTÉE pour **${nom}** ! Merci de prendre rendez-vous dans le salon <#prise-de-rendez-vous>` :
    `❌ Candidature REFUSÉE pour **${nom}**.`;

  await fetch("https://discord.com/api/webhooks/1377969438070018199/PDQFt3wf2vdPKFA7WvkCQjWe4YyegQES3K9rnfNhWP7wjlZG2BF2M5o5Dy2Dr807aTpM", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ content: message })
  });

  return { statusCode: 200, body: "Notification envoyée" };
};

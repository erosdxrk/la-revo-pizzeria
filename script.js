document.getElementById("candidatureForm").addEventListener("submit", async function(e) {
  e.preventDefault();

  const nom = document.getElementById("nom").value;
  const age = document.getElementById("age").value;
  const email = document.getElementById("email").value;
  const telephone = document.getElementById("telephone").value;
  const discord = document.getElementById("discord").value;
  const fivem = document.getElementById("fivem").value;
  const experience = document.getElementById("experience").value;

  const webhookURL = "https://discord.com/api/webhooks/1377952866114998272/rTMWbrQBIAL9xuetQpICuZ3GBW1zUK58mcSsWQI8IyxnGDhKRR6x1dMqcn9VWR0IIANQ";

  const payload = {
    content: `📩 **Nouvelle candidature reçue**\n**Nom RP** : ${nom}\n**Âge RP** : ${age}\n**Email** : ${email}\n**Téléphone** : ${telephone}\n**ID Discord** : ${discord}\n**Pseudo FiveM / Steam** : ${fivem}\n**Motivation / Expérience** : ${experience}`
  };

  await fetch(webhookURL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload)
  });

  alert("Candidature envoyée !");
  document.getElementById("candidatureForm").reset();
});

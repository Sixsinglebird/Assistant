const fetchRsp = async (token) => {
  let q = process.argv[2];
  console.log("User: ", q);
  console.log("");
  await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: `${q}` }],
      temperature: 0.75,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
    }),
  })
    .then(async (rsp) => await rsp.json())
    .then((data) => {
      if (data && data.choices && data.choices.length > 0) {
        console.log("GPTAssistant: ", data.choices[0].message.content);
      } else {
        console.log("no response from GPT. Check API key.");
      }
    })
    .catch((e) => console.log(e));
};
const APIKEY = "";
fetchRsp(APIKEY);

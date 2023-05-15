////////////////////////////////////////////////
// imports
const fs = require("fs");
const logger = require("./Logger");

////////////////////////////////////////////////
// constants
const url = "https://api.openai.com/v1/chat/completions";

////////////////////////////////////////////////
// functions
const readKey = () => {
  let tmp = fs.readFileSync("key.txt", "utf8", (err, data) => {
    if (err) console.error(err);
    return data;
  });
  return tmp;
};

const fetchRsp = async (token) => {
  // process the third argument given in the terminal.
  // first two being node and gpt
  let q = process.argv[2];
  console.log("User: ", q);
  await logger.chatLogger(`User: ${q}`);

  ////////////////////////////////////////////////
  // fetch a response from the provided url
  await fetch(url, {
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
    .then(async (data) => {
      if (data && data.choices && data.choices.length > 0) {
        console.log("GPTAssistant: ", data.choices[0].message.content);
        await logger.chatLogger(
          `GPTAssistant: ${data.choices[0].message.content}`
        );
      } else {
        console.log("no response from GPT. Check API key.");
        await logger.chatLogger("no response from GPT. Check API key.");
      }
    })
    .catch((e) => console.log(e));
};
////////////////////////////////////////////////
// chunck lord above gets his own box so im
// not confused

////////////////////////////////////////////////
// calls

const apiKey = readKey();
fetchRsp(apiKey);

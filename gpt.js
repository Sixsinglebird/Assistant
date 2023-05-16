////////////////////////////////////////////////
// imports
const fs = require("fs");
const logger = require("./Logger");

////////////////////////////////////////////////
// constants
const url = "https://api.openai.com/v1/chat/completions";
const arg = process.argv[2];

////////////////////////////////////////////////
// functions
const readKey = () => {
  let tmp = fs.readFileSync("key.txt", "utf8", (err, data) => {
    if (err) console.error(err);
    return data;
  });
  return tmp;
};

const setKey = (key) => {
  fs.writeFileSync("key.txt", key);
};

const fetchRsp = async (token) => {
  let q = process.argv[2];
  // process the third argument given in the terminal.
  // first two being node and gpt
  console.log("User: ", q);
  console.log("");
  await logger.chatLogger(`User: ${q}`);
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
  console.log("");
};

////////////////////////////////////////////////
// calls
switch (process.argv[2]) {
  case "":
    console.log("Argument cannot be left blank");
    return;
  case "key":
    if (process.argv[3]) {
      setKey(process.argv[3]);
      return;
    } else {
      console.log("Key argument needs an api key");
      return;
    }
}

const apiKey = readKey();
fetchRsp(apiKey);

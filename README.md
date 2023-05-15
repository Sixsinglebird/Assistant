# assistant

the plan:
Creates a command line argument "gpt" for asking openAI's gpt-3.5-turbo model questions.
THIS IS THE FREE MODEL AND YOU NEED A VALID KEY FROM OPENAI.

# to begin

run the command

### `node gpt key <your api key>`

# to test the gpt argument is working;

run the command

### `npm test`

this is an alias for

### `node gpt "hello"`

if everything is working properly you should see a prompt like;

### User: hi

### GPTAssistant: Hello! How can I assist you today?

# if you get a prompt saying

### GPTAssistant: no response from GPT. Check API key.

1. run the command

### `node gpt key <apiKey>`

2. if the problem persitsts:

### check that you properly set your API Key in the key.txt file.

if you cannot see a key.txt file, make it, and place your apiKey in it on the first line

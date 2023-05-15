# assistant
Creates a command line argument "gpt" for asking openAI's gpt-3.5-turbo model questions.
# to begin
in the current directory create a file .key.dat and place your api key into it.
# move file to appropriate location
navigate to /etc
### `cd /etc`
create a new directory "gpt"
### `mkdir gpt`
copy gpt.js into your new dir gpt/ this step varies depending on where you have gpt.js located
### `sudo cp /pathToGPT/gpt.js /etc/gpt/`
# update your bash aliases. 
this step varies depending on OS.
# for macOS
### `nano ~/.bash_profile`
in this file enter
alias gpt='node /etc/gpt/gpt.js' 
then save and close file.
# finally 
### `source ~/.bash_profile`

# to test the gpt argument is working;
### `gpt "hi gpt"`
if evrything is working properly you should see a prompt like;
### User:  hi
###
### GPTAssistant:  Hello! How can I assist you today?

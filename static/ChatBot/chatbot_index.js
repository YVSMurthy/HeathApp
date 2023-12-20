document.addEventListener("DOMContentLoaded", () => {
  const inputField = document.getElementById("input");
  inputField.addEventListener("keydown", (e) => {
    if (e.code === "Enter") {
      let input = inputField.value;
      inputField.value = "";
      console.log(input);
      output(input);
    }
  });
});

function output(input) {
  let product;

  let text = input.toLowerCase().replace("/[^\w\s]/gi", "").replace("/[\d]/gi", "").trim();
  text = text
    .replace(/ a /g, " ")
    .replace(/i feel /g, "")
    .replace(/whats/g, "what is")
    .replace(/please /g, "")
    .replace(/ please/g, "")
    .replace(/r u/g, "are you");

  if (!product) {
    product = compare(Prompts, Responses, text);
  }

  if (!product) {
    product = alternative[Math.floor(Math.random() * alternative.length)];
  }

  addChat(input, product);
}


function compare(promptsArray, repliesArray, string) {
  let reply;
  let replyFound = false;
  for (let x = 0; x < promptsArray.length; x++) {
    for (let y = 0; y < promptsArray[x].length; y++) {
      if (promptsArray[x][y] === string) {
        let replies = repliesArray[x];
        reply = replies[Math.floor(Math.random() * replies.length)];
        replyFound = true;
        break;
      }
    }
    if (replyFound) {
      break;
    }
  }

if (!replyFound) {
  for (let i = 0; i < Prompts.length; i++) {
    for (let j = 0; j < Prompts[i].length; j++) {
      if (Prompts[i][j] === string) {
        let healthReplies = Responses[i];
        reply = healthReplies[Math.floor(Math.random() * healthReplies.length)];
        replyFound = true;
        break;
      }
    }
    if (replyFound) {
      break;
    }
  }
}
  
  return reply;
}


function addChat(input, product) {
  const messagesContainer = document.getElementById("messages");

  let userDiv = document.createElement("div");
  userDiv.id = "user";
  userDiv.className = "user response";
  userDiv.innerHTML = `<img src="../static/ChatBot/chatbot_user.jpeg" class="avatar"><span>${input}</span>`;
  messagesContainer.appendChild(userDiv);

  let botDiv = document.createElement("div");
  let botImg = document.createElement("img");
  let botText = document.createElement("span");
  botDiv.id = "bot";
  botImg.src = "../static/ChatBot/chatbot_bot-mini.jpeg";
  botImg.className = "avatar";
  botDiv.className = "bot-response";
  botText.innerText = "Typing...";
  botDiv.appendChild(botText);
  botDiv.appendChild(botImg);
  messagesContainer.appendChild(botDiv);
  messagesContainer.scrollTop = messagesContainer.scrollHeight - messagesContainer.clientHeight;

  setTimeout(() => {
    botText.innerText = `${product}`;
    textToSpeech(product)
  }, 2000
  )

}
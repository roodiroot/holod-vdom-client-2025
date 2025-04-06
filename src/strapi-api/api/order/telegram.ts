import { makePostRequest } from "./api";

const telegramBotKey = process.env.BOT_TOKEN;
const chat = [process.env.CHAT_ID, process.env.CHAT_ID_ADMIN];

export const sendNotification = async (text: string, parse_mode = "HTML") => {
  const endpoint = `https://api.telegram.org/bot${telegramBotKey}/sendMessage`;
  let response;
  for (let i = 0; i < chat.length; i++) {
    if (chat[i]) {
      response = await makePostRequest(endpoint, {
        text,
        parse_mode,
        chat_id: chat[i],
      });
    }
  }

  if (!response) {
    return null;
  }
  return response;
};

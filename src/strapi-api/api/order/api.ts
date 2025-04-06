export const makePostRequest = async (
  url: string,
  details: {
    text: string;
    parse_mode: string;
    chat_id: string | number | undefined;
  }
) => {
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(details),
  });
  if (!response) {
    return null;
  }
  return await response.json();
};

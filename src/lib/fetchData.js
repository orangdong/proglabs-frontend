export const fetchData = async (endpoint) => {
  const data = await fetch(`${process.env.API_URL}${endpoint}`, {
    headers: {
      "Content-Type": "application/json",
      "x-api-key": process.env.API_KEY,
    },
  })
    .then((response) => response.json())
    .then((data) => data);

  return data.data;
};

export const fetchData = async (endpoint, headers) => {
  const data = await fetch(`${process.env.NEXT_PUBLIC_API_URL}${endpoint}`, {
    headers: {
      "Content-Type": "application/json",
      "x-api-key": process.env.NEXT_PUBLIC_API_KEY,
      ...headers,
    },
  })
    .then((response) => response.json())
    .then((data) => data);

  if (data.status === "error") {
    return {
      status: data.status,
      message: data.message,
    };
  }

  return data.data;
};

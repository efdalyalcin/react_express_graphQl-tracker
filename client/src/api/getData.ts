const BASE_URL = 'http://localhost:4000/graphql';

export const getData = async () => {
  const response = await fetch(BASE_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: '{ users { name } }',
    }),
  })

  const data = await response.json();

  return data;
};

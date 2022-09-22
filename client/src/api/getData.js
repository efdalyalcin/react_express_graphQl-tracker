const BASE_URL = 'http://localhost:9000/testAPI';

export const getData = async () => {
  const data = await fetch(BASE_URL)
    .then(res => res.text());

  return data;
};

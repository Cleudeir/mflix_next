export default async function GetInfo({ type }) {
  let url = process.env.URL_SERVER02;
  try {
    await fetch(url);
  } catch (error) {
    url = process.env.URL_SERVER01;
  }
  const baseUrl = 'https://redecanais.to';

  const responseLibrary = await fetch(`${url}/${type}?baseUrl=${baseUrl}`);

  const jsonLibrary = await responseLibrary.json();
  return jsonLibrary;
}

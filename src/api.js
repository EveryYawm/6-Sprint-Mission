export async function getProducts() {
  const response = await fetch("https://panda-market-api.vercel.app/docs/#/");
  const body = await response.json();
  return body;
}

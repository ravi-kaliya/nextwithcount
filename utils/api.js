// api.js
export async function fetchApiData() {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
  if (!response.ok) {
    throw new Error('Failed to fetch data from the API');
  }
  const json = await response.json();
  return json;
}

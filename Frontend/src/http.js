export async function fetchAllMenus() {
  const response = await fetch("http://localhost:8000/api/menus");
  const resData = await response.json();

  if (!response.ok) {
    throw new Error("Failed to fetch menus");
  }

  return resData;
}

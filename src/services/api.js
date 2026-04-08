const API_URL = import.meta.env.VITE_API_URL;

export const pingServer = async () => {
  const res = await fetch(`${API_URL}/ping`);
  return res.json();
};
import axios from "axios";

export const getDateFormat = (date: string) => {
  return `${date.slice(5, 7)}/${date.slice(8, 10)}/${date.slice(0, 4)}`;
};

export async function getWeb3Jobs() {
  const result = await axios.get(`/api/jobs`);
  return result;
}

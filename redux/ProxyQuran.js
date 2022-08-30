import axios from "axios";

const API_URL = process.env.NEXT_PUBLIC_API_QURAN_URL;

export default axios.create({
  baseURL: API_URL,
});

export const endPoint = {
  // -- collection types ---
  getAllSurah: `/surah/`,
  getBySurah: `/surah`,
};

import axios from "axios";

const API_URL = process.env.NEXT_PUBLIC_API_SHOLAT_URL;

export default axios.create({
  baseURL: API_URL,
});

export const endPoint = {
  // -- collection types ---
  getAllCity: `/sholat/kota/semua`,
  getSchedule: `/sholat/jadwal/`,
};

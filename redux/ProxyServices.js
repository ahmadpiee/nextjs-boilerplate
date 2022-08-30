import axios from "axios";

const API_URL = process.env.NEXT_PUBLIC_API_SERVICE;

export default axios.create({
  baseURL: API_URL,
});

export const endPoint = {
  // --- collection types ---
  createUser: `/dataJamaah/createJamaah`,
  getDataByDeparture: "/dataJamaah/getTotal",
  getDataGroup: "/dataJamaah/getDataGroup",
  deleteUserbyDate: "/dataJamaah/delete",
};

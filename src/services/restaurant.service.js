import api from "./api";
const RESTO_API = import.meta.env.VITE_RESTO_API;

const getAllRestaurant = async () => {
  const response = await api.get(RESTO_API);
  return await api.get(RESTO_API);
};

const RestaurantService = {
  getAllRestaurant,
};

export default RestaurantService;
import api from "./api";
const RESTO_API = import.meta.env.VITE_RESTO_API;

const getAllRestaurant = async () => {
  try {
    const response = await api.get(RESTO_API);
    return response;
  } catch (error) {
    console.error("Error fetching restaurants:", error);
    throw error; // You can also rethrow the error if you want to handle it in the component
  }
};

const RestaurantService = {
  getAllRestaurant,
};

export default RestaurantService;

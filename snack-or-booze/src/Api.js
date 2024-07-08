import axios from "axios";

const BASE_API_URL = "http://localhost:5000";

class SnackOrBoozeApi {
  static async getSnacks() {
    const result = await axios.get(`${BASE_API_URL}/snacks`);
    return result.data;
  }

  static async getDrinks() {
    const result = await axios.get(`${BASE_API_URL}/drinks`);
    return result.data;
  }

  static async addSnack(snack) {
    const result = await axios.post(`${BASE_API_URL}/snacks`, snack);
    return result.data;
  }

  static async addDrink(drink) {
    const result = await axios.post(`${BASE_API_URL}/drinks`, drink);
    return result.data;
  }
}

export default SnackOrBoozeApi;

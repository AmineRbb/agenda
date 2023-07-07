import axios from "axios";

export const getAllRdvService = async (headers) => {
    try {
      const response = await axios.get('http://localhost:8083/api/v1/rdv/seeAllRdv', {headers});
      return response.data;
    } catch (error) {
      console.error(error);
      const updatedData = {
        pageReturn: "error"
      };
      return updatedData;
    }
  }
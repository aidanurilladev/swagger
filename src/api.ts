import axios from "axios";

const api = import.meta.env.VITE_URL;

export const addItem = async (item: any) => {
  try {
    const response = await axios.post(`${api}/api/v1/products/create`, item, {
      withCredentials: true,
    });

    return response.data;
  } catch (error: any) {
    if (error.response && error.response.data) {
      throw new Error(
        error.response.data.message 
      );
    } else {
      throw new Error("ошибкаа при добавлении элемента");
    }
  }
};

export const deleteItem = async (itemId: string) => {
  try {
    const response = await axios.delete(
      `${api}/api/v1/products/delete/${itemId}`,
      {
        withCredentials: true,
      }
    );
    return response.data;
  } catch (error: any) {
    if (error.response && error.response.data) {
      throw new Error(error.response.data.message || "Ошибка ");
    } else {
      throw new Error("Ошибка при удалении элемента");
    }
  }
};

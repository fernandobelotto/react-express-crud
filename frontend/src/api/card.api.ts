import getInstance from ".";
import { EntiteModel } from "../models/card.model";

export class EntiteApi {
  static async create(body: EntiteModel) {
    const axiosInstance = getInstance();
    const { data } = await axiosInstance.post("/entities", body);
    return data;
  }

  static async fetch() {
    const axiosInstance = getInstance();
    const { data } = await axiosInstance.get("/entities");
    return data;
  }

  static async deleteById(id: string) {
    const axiosInstance = getInstance();
    const { data } = await axiosInstance.delete(`entities/${id}`);
    return data;
  }

  static async updateById(id: string, body: EntiteModel) {
    const axiosInstance = getInstance();
    const { data } = await axiosInstance.patch(`/entities/${id}`, body);
    return data;
  }
}

import { NumberCalculationArray } from "../types/numbers.typedef";
import axios, { AxiosResponse } from "axios";
import { NUMBERS_API_ROUTES } from "@/modules/numbers/services/routes";

export const fetchGetAllCalculations = async (): Promise<
  AxiosResponse<NumberCalculationArray>
> => {
  const response: AxiosResponse<NumberCalculationArray> = await axios.get(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}${NUMBERS_API_ROUTES.base}${NUMBERS_API_ROUTES.getAll}`
  );
  return response;
};

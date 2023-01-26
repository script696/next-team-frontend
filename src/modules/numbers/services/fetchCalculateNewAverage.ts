import axios, { AxiosResponse } from "axios";
import { NUMBERS_API_ROUTES } from "../services/routes";
import { Calculation, NumberCalculation } from "../types/numbers.typedef";

export const fetchCalculateNewAverage = async (
  calculationFormValues: Calculation
): Promise<AxiosResponse<NumberCalculation>> => {
  const response: AxiosResponse<NumberCalculation> = await axios.post(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}${NUMBERS_API_ROUTES.base}${NUMBERS_API_ROUTES.calculateAverage}`,
    calculationFormValues
  );
  return response;
};

import {
  Message,
  MessageArray,
  MessagesFormValues,
} from "@/modules/messages/types/messages.typedef";
import axios, { AxiosResponse } from "axios";
import { MESSAGES_API_ROUTES } from "@/modules/messages/services/routes";
import { NUMBERS_API_ROUTES } from "@/modules/numbers/services/routes";
import {
  Calculation,
  NumberCalculation,
} from "@/modules/numbers/types/numbers.typedef";

export const fetchCalculateNewAverage = async (
  calculationFormValues: Calculation
): Promise<AxiosResponse<NumberCalculation>> => {
  const response: AxiosResponse<NumberCalculation> = await axios.post(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}${NUMBERS_API_ROUTES.base}${NUMBERS_API_ROUTES.calculateAverage}`,
    calculationFormValues
  );
  return response;
};

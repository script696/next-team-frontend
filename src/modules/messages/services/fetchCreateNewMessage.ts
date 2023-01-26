import {
  Message,
  MessageArray,
  MessagesFormValues,
} from "@/modules/messages/types/messages.typedef";
import axios, { AxiosResponse } from "axios";
import { MESSAGES_API_ROUTES } from "@/modules/messages/services/routes";

export const fetchCreateNewMessage = async (
  messagesFormValues: MessagesFormValues
): Promise<AxiosResponse<Message>> => {
  const response: AxiosResponse<Message> = await axios.post(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}${MESSAGES_API_ROUTES.base}${MESSAGES_API_ROUTES.create}`,
    messagesFormValues
  );
  return response;
};

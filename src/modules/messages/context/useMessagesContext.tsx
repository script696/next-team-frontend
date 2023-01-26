import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import {
  Message,
  MessageArray,
  MessagesFormValues,
} from "@/modules/messages/types/messages.typedef";
import { fetchCreateNewMessage } from "@/modules/messages";
import { Axios, AxiosResponse } from "axios";

type MessagesFlowContextModel = {
  messagesData: MessageArray;
  onCreateNewMessage: (messagesFormValues: MessagesFormValues) => Promise<void>;
};

export const MessagesFlowContext = createContext<
  MessagesFlowContextModel | undefined
>(undefined);

type MessagesProviderProps = {
  children: ReactNode;
  initialMessagesData: MessageArray;
};

export const MessagesProvider = ({
  children,
  initialMessagesData,
}: MessagesProviderProps) => {
  const [messagesData, setMessagesData] =
    useState<MessageArray>(initialMessagesData);

  const onCreateNewMessage = async (messagesFormValues: MessagesFormValues) => {
    try {
      const newMessageData: AxiosResponse<Message> =
        await fetchCreateNewMessage(messagesFormValues);

      setMessagesData((prev) => [...prev, newMessageData.data]);
    } catch (err) {
      console.error(err);
    }
  };

  const contextData = {
    messagesData,
    onCreateNewMessage,
  };

  return (
    <MessagesFlowContext.Provider value={contextData}>
      {children}
    </MessagesFlowContext.Provider>
  );
};

export const useMessagesContext = () => {
  const context = useContext(MessagesFlowContext);
  if (context === undefined) {
    throw new Error("useJournalContext was used outside of its Provider");
  }
  return context;
};

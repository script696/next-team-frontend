export type Message = { author: string; id: number; message: string };
export type MessageArray = Array<Message>;
export type MessagesFormValues = Omit<Message, "id">;

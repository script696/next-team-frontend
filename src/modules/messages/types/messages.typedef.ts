export type Message = { id: number; author: string; message: string };
export type MessageArray = Array<Message>;
export type MessagesFormValues = Omit<Message, "id">;

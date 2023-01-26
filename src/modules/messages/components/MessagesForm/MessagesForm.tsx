import s from "./MessagesForm.module.scss";
import { ChangeEvent, FormEvent, useState } from "react";
import { MessagesFormValues } from "../../types/messages.typedef";
import {
  useMessagesContext,
} from "@/modules/messages/context/useMessagesContext";

const MessagesForm = () => {
  const [inputValues, setInputValues] = useState<MessagesFormValues>({
    author: "",
    message: "",
  });
  const { onCreateNewMessage } = useMessagesContext();

  const handleSubmitForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onCreateNewMessage(inputValues);
  };

  const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;
    setInputValues((prev) => {return { ...prev, [name]: value }});
  };

  return (
    <form className={s.messagesForm} onSubmit={handleSubmitForm}>
      <input
        className={s.messagesForm__input}
        name="author"
        onChange={handleChangeInput}
        placeholder="Автор"
        type="text"
        value={inputValues.author}
      />
      <input
        className={s.messagesForm__input}
        name="message"
        onChange={handleChangeInput}
        placeholder="Сообщение"
        type="text"
        value={inputValues.message}
      />
      <button className={s.messagesForm__submitBtn} type="submit">
        Отправить сообщение
      </button>
    </form>
  );
};

export default MessagesForm;

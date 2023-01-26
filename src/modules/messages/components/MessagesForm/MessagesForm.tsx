import s from "./MessagesForm.module.scss";
import { ChangeEvent, FormEvent, useState } from "react";
import { Message, MessagesFormValues } from "../../types/messages.typedef";
import {
  MessagesFlowContext,
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
    setInputValues((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section className={s.messagesForm}>
      <h3 className={s.messagesForm__title}>Отправить сообщение</h3>
      <form className={s.messagesForm__form} onSubmit={handleSubmitForm}>
        <input
          type="text"
          placeholder="Автор"
          className={s.messagesForm__input}
          name="author"
          value={inputValues.author}
          onChange={handleChangeInput}
        />
        <input
          type="text"
          placeholder="Сообщение"
          className={s.messagesForm__input}
          name="message"
          value={inputValues.message}
          onChange={handleChangeInput}
        />
        <button className={s.messagesForm__submitBtn} type="submit">
          Отправить сообщение
        </button>
      </form>
    </section>
  );
};

export default MessagesForm;

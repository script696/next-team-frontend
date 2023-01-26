import s from "./MessagesList.module.scss";
import { useMessagesContext } from "@/modules/messages/context/useMessagesContext";

const MessagesList = () => {
  const { messagesData } = useMessagesContext();

  return (
    <ul className={s.messagesList__wrapper}>
      <li className={s.messagesList__row}>
        <span className={s.messagesList__item}>Author</span>
        <span className={s.messagesList__item}>Text</span>
      </li>
      {messagesData.map(({ id, author, message }) => {
        return (
          <li className={s.messagesList__row} key={id}>
            <span className={s.messagesList__item}>{author}</span>
            <span className={s.messagesList__item}>{message}</span>
          </li>
        );
      })}
    </ul>
  );
};

export default MessagesList;

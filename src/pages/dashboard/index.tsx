import s from "./styles/Dashboard.module.scss";
import { ChangeEvent, FormEvent, FormEventHandler, useState } from "react";

const mockMsg = [
  { id: 1, author: "Nikc", text: "SomeText" },
  { id: 2, author: "Nikc2", text: "SomeText2" },
];

const Dashboard = () => {
  const [messagesData, setMessagesData] = useState(mockMsg);
  const [inputValues, setInputValues] = useState({ author: "", message: "" });

  const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;
    setInputValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmitForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { author, message } = inputValues;
    const newMessage = {
      id: Math.random(),
      author,
      text: message,
    };
    setMessagesData((prev) => [...prev, newMessage]);
  };

  return (
    <div className={s.dashboard}>
      <h2 className={s.dashboard__title}>Доска сообщений</h2>
      <div className={s.dashboard__contentWrapper}>
        <section className={s.dashboard__messagesSection}>
          <h3>Сообщения</h3>
          <ul className={s.messagesList}>
            <li className={s.messagesList__row}>
              <span className={s.messagesList__item}>Author</span>
              <span className={s.messagesList__item}>Text</span>
            </li>
            {messagesData.map(({ id, author, text }) => {
              return (
                <li key={id} className={s.messagesList__row}>
                  <span className={s.messagesList__item}>{author}</span>
                  <span className={s.messagesList__item}>{text}</span>
                </li>
              );
            })}
          </ul>
        </section>
        <section className={s.dashboard__formSection}>
          <h3>Отправить сообщение</h3>
          <form className={s.form} onSubmit={handleSubmitForm}>
            <input
              type="text"
              placeholder="Автор"
              className={s.form__input}
              name="author"
              value={inputValues.author}
              onChange={handleChangeInput}
            />
            <input
              type="text"
              placeholder="Сообщение"
              className={s.form__input}
              name="message"
              value={inputValues.message}
              onChange={handleChangeInput}
            />
            <button className={s.form__submitBtn} type="submit">
              Отправить сообщение
            </button>
          </form>
        </section>
      </div>
    </div>
  );
};

export default Dashboard;

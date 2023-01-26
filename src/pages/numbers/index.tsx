import s from "./styles/Dashboard.module.scss";
import { FormEvent, useState } from "react";
import { Input } from "postcss";

const numbersListData = [
  { id: 1, previous: 1, current: 5, average: 3 },
  { id: 2, previous: 1, current: 5, average: 3 },
  { id: 3, previous: 1, current: 5, average: 3 },
];

const Numbers = () => {
  const [checkboxValues, setCheckboxValues] = useState({
    isPositive: true,
    isInteger: true,
  });

  const [inputValues, setInputValues] = useState({
    number: "",
  });

  const handleChangeCheckbox = (e: FormEvent<HTMLInputElement>) => {
    const { name, checked } = e.currentTarget;
    setCheckboxValues((prev) => ({ ...prev, [name]: checked }));
  };

  const handleChangeInput = (e: FormEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;
    setInputValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmitForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <div className={s.numbers}>
      <h2 className={s.numbers__title}>Средние числа</h2>
      <section className={s.numbers__contentWrapper}>
        <form className={s.form} onSubmit={handleSubmitForm}>
          <input
            type="text"
            placeholder="Число"
            className={s.form__input}
            name="number"
            value={inputValues.number}
            onChange={handleChangeInput}
          />
          <div className={s.form__checkBoxWrapper}>
            <label className={s.form__checkLabel}>
              Положительное число
              <input
                type="checkbox"
                name="isPositive"
                checked={checkboxValues.isPositive}
                onChange={handleChangeCheckbox}
              />
            </label>
            <label className={s.form__checkLabel}>
              Целое число
              <input
                type="checkbox"
                name="isInteger"
                checked={checkboxValues.isInteger}
                onChange={handleChangeCheckbox}
              />
            </label>
          </div>
          <button className={s.form__submitBtn} type="submit">
            Отправить и получить среднее
          </button>
        </form>
        <ul className={s.numbersList}>
          <li className={s.numbersList__row}>
            <span className={s.numbersList__item}>Предыдущее</span>
            <span className={s.numbersList__item}>Текущее</span>
            <span className={s.numbersList__item}>Среднее</span>
          </li>
          {numbersListData.map(({ id, previous, current, average }) => {
            return (
              <li key={id} className={s.numbersList__row}>
                <span className={s.numbersList__item}>{previous}</span>
                <span className={s.numbersList__item}>{current}</span>
                <span className={s.numbersList__item}>{average}</span>
              </li>
            );
          })}
        </ul>
      </section>
    </div>
  );
};

export default Numbers;

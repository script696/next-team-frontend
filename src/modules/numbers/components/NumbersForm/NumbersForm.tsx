import s from "./NumbersForm.module.scss";
import { FormEvent, useState } from "react";
import {
  CheckboxesFormValues,
  NumbersFormValues,
} from "../../types/numbers.typedef";
import { useNumbersContext } from "../../context/useNumbersContext";

const NumbersForm = () => {
  const { onCalculateNewAverage } = useNumbersContext();
  const [inputValues, setInputValues] = useState<NumbersFormValues>({
    number: "",
  });

  const [checkboxValues, setCheckboxValues] = useState<CheckboxesFormValues>({
    isInteger: true,
    isPositive: true,
  });

  const handleSubmitForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onCalculateNewAverage(inputValues, checkboxValues);
  };

  const handleChangeInput = (e: FormEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;
    setInputValues((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleChangeCheckbox = (e: FormEvent<HTMLInputElement>) => {
    const { name, checked } = e.currentTarget;
    setCheckboxValues((prev) => {
      return { ...prev, [name]: checked };
    });
  };

  return (
    <form className={s.form} onSubmit={handleSubmitForm}>
      <input
        className={s.form__input}
        name="number"
        onChange={handleChangeInput}
        placeholder="Число"
        type="text"
        value={inputValues.number}
      />
      <div className={s.form__checkBoxWrapper}>
        <label className={s.form__checkLabel}>
          Положительное число
          <input
            checked={checkboxValues.isPositive}
            name="isPositive"
            onChange={handleChangeCheckbox}
            type="checkbox"
          />
        </label>
        <label className={s.form__checkLabel}>
          Целое число
          <input
            checked={checkboxValues.isInteger}
            name="isInteger"
            onChange={handleChangeCheckbox}
            type="checkbox"
          />
        </label>
      </div>
      <button className={s.form__submitBtn} type="submit">
        Отправить и получить среднее
      </button>
    </form>
  );
};

export default NumbersForm;

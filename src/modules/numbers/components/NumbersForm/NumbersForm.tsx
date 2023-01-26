import s from "./NumbersForm.module.scss";
import { FormEvent, useState } from "react";
import {
  useNumbersContext,
  CheckboxesFormValues,
  NumbersFormValues,
} from "@/modules/numbers";

const NumbersForm = () => {
  const { onCalculateNewAverage } = useNumbersContext();
  const [inputValues, setInputValues] = useState<NumbersFormValues>({
    number: "",
  });

  const [checkboxValues, setCheckboxValues] = useState<CheckboxesFormValues>({
    isPositive: true,
    isInteger: true,
  });

  const handleSubmitForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onCalculateNewAverage(inputValues, checkboxValues);
  };

  const handleChangeInput = (e: FormEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;
    setInputValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleChangeCheckbox = (e: FormEvent<HTMLInputElement>) => {
    const { name, checked } = e.currentTarget;
    setCheckboxValues((prev) => ({ ...prev, [name]: checked }));
  };

  return (
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
  );
};

export default NumbersForm;

import s from "./NumbersList.module.scss";
import { useNumbersContext } from "@/modules/numbers";
import { useEffect } from "react";

const NumbersList = () => {
  const { numbersData, updateNumbersData } = useNumbersContext();

  useEffect(() => {
    updateNumbersData();
  }, []);
  return (
    <ul className={s.numbersList}>
      <li className={s.numbersList__row}>
        <span className={s.numbersList__item}>Предыдущее</span>
        <span className={s.numbersList__item}>Текущее</span>
        <span className={s.numbersList__item}>Среднее</span>
      </li>
      {numbersData?.map(
        ({ id, previousAverage, currentNumber, currentAverage }) => {
          return (
            <li key={id} className={s.numbersList__row}>
              <span className={s.numbersList__item}>{previousAverage}</span>
              <span className={s.numbersList__item}>{currentNumber}</span>
              <span className={s.numbersList__item}>{currentAverage}</span>
            </li>
          );
        }
      )}
    </ul>
  );
};

export default NumbersList;
